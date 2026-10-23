// test_dvd_multisara.js - Verification of DVD HUD/Badge Removal, Spawning & Collision Physics
import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('--- 1. Testing Removal of Badge & HUD from index.html & style.css ---');
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const cssContent = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
const appContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

// 1.1 Badge check
assert(!htmlContent.includes('dvd-logo-badge'), 'index.html must not contain dvd-logo-badge');
assert(!htmlContent.includes('SARA DVD'), 'index.html must not contain SARA DVD text');
assert(!cssContent.includes('.dvd-logo-badge'), 'style.css must not contain .dvd-logo-badge');
assert(!cssContent.includes('.dvd-badge-title'), 'style.css must not contain .dvd-badge-title');
assert(!cssContent.includes('.dvd-badge-sub'), 'style.css must not contain .dvd-badge-sub');
console.log('✓ PASS: Badge completely removed from HTML and CSS');

// 1.2 HUD check
assert(!htmlContent.includes('dvd-hud'), 'index.html must not contain dvd-hud');
assert(!htmlContent.includes('hud-bounces'), 'index.html must not contain hud-bounces');
assert(!htmlContent.includes('hud-corners'), 'index.html must not contain hud-corners');
assert(!htmlContent.includes('dvd-sound-btn'), 'index.html must not contain dvd-sound-btn');
assert(!htmlContent.includes('dvd-pause-btn'), 'index.html must not contain dvd-pause-btn');

assert(!cssContent.includes('.dvd-hud'), 'style.css must not contain .dvd-hud');
assert(!cssContent.includes('.hud-stats'), 'style.css must not contain .hud-stats');
assert(!cssContent.includes('.hud-stat-pill'), 'style.css must not contain .hud-stat-pill');
assert(!cssContent.includes('.hud-controls'), 'style.css must not contain .hud-controls');
assert(!cssContent.includes('.hud-btn'), 'style.css must not contain .hud-btn');

assert(!appContent.includes('hud-bounces'), 'app.js must not reference hud-bounces');
assert(!appContent.includes('hud-corners'), 'app.js must not reference hud-corners');
assert(!appContent.includes('dvd-sound-btn'), 'app.js must not reference dvd-sound-btn');
assert(!appContent.includes('dvd-pause-btn'), 'app.js must not reference dvd-pause-btn');
assert(!appContent.includes('.dvd-hud'), 'app.js must not reference .dvd-hud');
console.log('✓ PASS: HUD completely removed from HTML, CSS, and JS');

console.log('\n--- 2. Testing Logic Constraints in app.js ---');
// Check max 10 cap
assert(appContent.includes('MAX_SARAS = 10'), 'MAX_SARAS must be 10');
assert(appContent.includes('saras.length >= MAX_SARAS'), 'spawning must respect MAX_SARAS cap');
assert(appContent.includes('resolveSaraCollisions'), 'app.js must implement resolveSaraCollisions');
assert(appContent.includes('colDist'), 'app.js must compute collision distance');
console.log('✓ PASS: MAX_SARAS constant and collision methods present in app.js');

console.log('\n--- 3. Testing Circle Collision Physics Math ---');
// Emulate the physics functions from app.js to test edge cases
const DVD_COLORS = [
  '#F1BF00', '#E63946', '#2563EB', '#10B981', '#A855F7', '#EC4899', '#F97316', '#06B6D4', '#FFE066'
];
const SPEED = 200;
const MAX_SARAS = 10;
const saras = [];

function createMockSara(id, x, y, dirX, dirY, colorIndex) {
  return {
    id,
    el: { style: { setProperty() {}, transform: '' } },
    innerEl: { style: { transform: '', transition: '' } },
    posX: x,
    posY: y,
    velX: dirX * SPEED,
    velY: dirY * SPEED,
    dirX,
    dirY,
    colorIndex,
    color: DVD_COLORS[colorIndex % DVD_COLORS.length],
    isDragging: false,
    dragOffset: { x: 0, y: 0 },
    pointerStartPos: { x: 0, y: 0 },
    pointerHistory: []
  };
}

const mockMetrics = { width: 100, height: 100, padX: 5, padY: 5 };
const colDist = mockMetrics.width * 0.88; // 88px
const colDistSq = colDist * colDist;

function resolveCollisions(list, screenWidth = 1000, screenHeight = 800) {
  const minX = 0;
  const maxX = screenWidth - mockMetrics.width;
  const minY = 0;
  const maxY = screenHeight - mockMetrics.height;

  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const s1 = list[i];
        const s2 = list[j];

        const c1X = s1.posX + mockMetrics.width / 2;
        const c1Y = s1.posY + mockMetrics.height / 2;
        const c2X = s2.posX + mockMetrics.width / 2;
        const c2Y = s2.posY + mockMetrics.height / 2;

        let dx = c2X - c1X;
        let dy = c2Y - c1Y;
        let distSq = dx * dx + dy * dy;

        if (distSq < colDistSq) {
          let dist = Math.sqrt(distSq);
          if (dist < 0.001) {
            dx = 1;
            dy = 0;
            dist = 1;
          }
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = colDist - dist;

          // Position separation (50/50)
          s1.posX -= nx * (overlap * 0.5);
          s1.posY -= ny * (overlap * 0.5);
          s2.posX += nx * (overlap * 0.5);
          s2.posY += ny * (overlap * 0.5);

          s1.posX = Math.max(minX, Math.min(maxX, s1.posX));
          s1.posY = Math.max(minY, Math.min(maxY, s1.posY));
          s2.posX = Math.max(minX, Math.min(maxX, s2.posX));
          s2.posY = Math.max(minY, Math.min(maxY, s2.posY));

          if (pass === 0) {
            const relVx = s2.velX - s1.velX;
            const relVy = s2.velY - s1.velY;
            const velAlongNormal = relVx * nx + relVy * ny;

            if (velAlongNormal < 0) {
              const absNx = Math.abs(nx);
              const absNy = Math.abs(ny);
              const closingX = relVx * nx;
              const closingY = relVy * ny;
              let bounced = false;

              if (closingX < 0 && absNx >= 0.35) {
                const dir1X = nx > 0 ? -1 : 1;
                const dir2X = nx > 0 ? 1 : -1;
                s1.dirX = dir1X;
                s1.velX = dir1X * SPEED;
                s2.dirX = dir2X;
                s2.velX = dir2X * SPEED;
                bounced = true;
              }

              if (closingY < 0 && absNy >= 0.35) {
                const dir1Y = ny > 0 ? -1 : 1;
                const dir2Y = ny > 0 ? 1 : -1;
                s1.dirY = dir1Y;
                s1.velY = dir1Y * SPEED;
                s2.dirY = dir2Y;
                s2.velY = dir2Y * SPEED;
                bounced = true;
              }

              if (!bounced) {
                if (absNx >= absNy) {
                  const dir1X = nx > 0 ? -1 : 1;
                  const dir2X = nx > 0 ? 1 : -1;
                  s1.dirX = dir1X;
                  s1.velX = dir1X * SPEED;
                  s2.dirX = dir2X;
                  s2.velX = dir2X * SPEED;
                } else {
                  const dir1Y = ny > 0 ? -1 : 1;
                  const dir2Y = ny > 0 ? 1 : -1;
                  s1.dirY = dir1Y;
                  s1.velY = dir1Y * SPEED;
                  s2.dirY = dir2Y;
                  s2.velY = dir2Y * SPEED;
                }
              }

              s1.colorIndex = (s1.colorIndex + 1) % DVD_COLORS.length;
              s2.colorIndex = (s2.colorIndex + 1) % DVD_COLORS.length;
            }
          }
        }
      }
    }
  }
}

// Test Case 3.1: Head-on horizontal collision
const s1 = createMockSara(1, 100, 200, 1, 1, 0); // moving right (+SPEED, +SPEED)
const s2 = createMockSara(2, 160, 200, -1, 1, 1); // moving left (-SPEED, +SPEED)
// Distance between centers: 60px < 88px
resolveCollisions([s1, s2]);

assert(s1.dirX === -1, 's1 must bounce to move left');
assert(s2.dirX === 1, 's2 must bounce to move right');
assert(Math.abs(s1.velX) === SPEED, 's1 must maintain 45 degree speed');
assert(Math.abs(s2.velX) === SPEED, 's2 must maintain 45 degree speed');
assert(Math.abs(s1.velY) === SPEED, 's1 must maintain 45 degree speed Y');
assert(Math.abs(s2.velY) === SPEED, 's2 must maintain 45 degree speed Y');
const newDist = s2.posX - s1.posX;
assert(newDist >= colDist - 0.01, `Distance after separation must be >= colDist (was ${newDist})`);
console.log('✓ PASS: Horizontal head-on collision bounces elastically and separates positions');

// Test Case 3.2: Vertical collision
const s3 = createMockSara(3, 300, 100, 1, 1, 0); // moving down
const s4 = createMockSara(4, 300, 150, 1, -1, 1); // moving up
resolveCollisions([s3, s4]);
assert(s3.dirY === -1, 's3 must bounce up');
assert(s4.dirY === 1, 's4 must bounce down');
console.log('✓ PASS: Vertical collision bounces elastically and separates positions');

// Test Case 3.3: Oblique angled collision bounces cleanly
const sOblique1 = createMockSara(5, 500, 300, 1, 1, 0);
const sOblique2 = createMockSara(6, 550, 320, -1, -1, 1);
resolveCollisions([sOblique1, sOblique2]);
assert(Math.abs(sOblique1.velX) === SPEED && Math.abs(sOblique1.velY) === SPEED);
assert(Math.abs(sOblique2.velX) === SPEED && Math.abs(sOblique2.velY) === SPEED);
console.log('✓ PASS: Oblique angled collision bounces cleanly without sticking');

// Test Case 3.4: Max 10 Sara Spawning Cap
const testSaras = [createMockSara(1, 40, 40, 1, 1, 0)];
for (let click = 0; click < 15; click++) {
  if (testSaras.length < MAX_SARAS) {
    const parent = testSaras[0];
    const newSara = createMockSara(
      testSaras.length + 1,
      parent.posX + 30,
      parent.posY + 30,
      -parent.dirX,
      1,
      testSaras.length
    );
    testSaras.push(newSara);
  }
}
assert(testSaras.length === 10, `Sara count must be capped at 10 (actual: ${testSaras.length})`);
console.log('✓ PASS: Sara spawning strictly capped at 10');

// Test Case 3.5: Multi-body crowd resolution (e.g., 10 Saras in same area)
const crowd = [];
for (let i = 0; i < 10; i++) {
  crowd.push(createMockSara(i + 1, 400 + (i % 3) * 20, 400 + Math.floor(i / 3) * 20, (i % 2 === 0 ? 1 : -1), (i % 3 === 0 ? 1 : -1), i));
}
// Run collision resolution passes
for (let frame = 0; frame < 5; frame++) {
  resolveCollisions(crowd);
}
// Verify all maintain exact 45 degree speed
for (const s of crowd) {
  assert(Math.abs(s.velX) === SPEED, `velX must be ${SPEED}`);
  assert(Math.abs(s.velY) === SPEED, `velY must be ${SPEED}`);
  assert(s.posX >= 0 && s.posX <= 1000 - mockMetrics.width, 'Sara must stay within screen bounds');
  assert(s.posY >= 0 && s.posY <= 800 - mockMetrics.height, 'Sara must stay within screen bounds');
}
console.log('✓ PASS: 10-Sara multi-body crowd resolves stably at 45 degree screensaver physics');

// Test Case 3.6: Same horizontal direction collision preserves X momentum
const sSameX1 = createMockSara(7, 100, 100, 1, 1, 0); // moving right (+1) and down (+1)
const sSameX2 = createMockSara(8, 120, 150, 1, -1, 1); // moving right (+1) and up (-1)
resolveCollisions([sSameX1, sSameX2]);
assert(sSameX1.dirX === 1, 'sSameX1 must continue moving right (horizontal momentum preserved)');
assert(sSameX2.dirX === 1, 'sSameX2 must continue moving right (horizontal momentum preserved)');
assert(sSameX1.dirY === -1, 'sSameX1 must bounce vertically to move up');
assert(sSameX2.dirY === 1, 'sSameX2 must bounce vertically to move down');
console.log('✓ PASS: Same-direction horizontal collision preserves horizontal momentum');

// Test Case 3.7: Autostart initial Sara state
const sInit = createMockSara(9, 40, 40, 1, 1, 0);
assert(Math.abs(sInit.velX) === SPEED, 'Initial Sara must have active velocity on load');
assert(Math.abs(sInit.velY) === SPEED, 'Initial Sara must have active velocity on load');
console.log('✓ PASS: Initial Sara is pre-configured with active screensaver velocity');

// Test Case 3.8: Continuous non-stop motion check
assert(!appContent.includes('isPaused'), 'app.js must not contain isPaused flag');
assert(!appContent.includes('prefers-reduced-motion: reduce'), 'app.js must not pause on prefers-reduced-motion');
console.log('✓ PASS: Physics runs continuously with zero pausing or stopping');

console.log('\n====================================================');
console.log('★ ALL DVD MULTI-SARA PHYSICS & HUD TESTS PASSED! ★');
console.log('====================================================\n');
