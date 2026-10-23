// app.js - Retro Bouncing DVD Sara Face Screensaver with Real-Time Element Collision & Multi-Sara Spawning
document.addEventListener('DOMContentLoaded', () => {
  const dvdSara = document.getElementById('dvd-sara');
  const dvdFaceInner = dvdSara ? dvdSara.querySelector('.dvd-face-inner') : null;
  const confettiCanvas = document.getElementById('confetti-canvas');

  if (!dvdSara) return;

  // ---------------------------------------------------------------------------
  // 1. Audio Engine (Web Audio API)
  // ---------------------------------------------------------------------------
  let audioCtx = null;
  let soundEnabled = true;
  const lastSoundTimes = {};

  function initAudio() {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch {
      // Ignore audio initialization restrictions
    }
  }

  function playTone(freqStart, freqEnd, type = 'sine', duration = 0.08, volume = 0.15) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freqStart, now);
      if (freqEnd !== freqStart) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(freqEnd, 20), now + duration);
      }

      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Ignore synthesis errors on restricted platforms
    }
  }

  function playBounceSound(collisionType) {
    if (!soundEnabled) return;
    const now = performance.now();
    if (lastSoundTimes[collisionType] && now - lastSoundTimes[collisionType] < 60) {
      return; // throttle identical sounds within 60ms
    }
    lastSoundTimes[collisionType] = now;
    initAudio();

    switch (collisionType) {
      case 'cinema':
        playTone(330, 415, 'triangle', 0.12, 0.22);
        setTimeout(() => playTone(415, 494, 'sine', 0.1, 0.18), 30);
        break;
      case 'wiki':
        playTone(587, 880, 'sine', 0.12, 0.2);
        setTimeout(() => playTone(880, 1174, 'sine', 0.1, 0.16), 35);
        break;
      case 'heading':
        playTone(220, 130, 'triangle', 0.1, 0.22);
        break;
      case 'illustration':
        playTone(392, 523, 'sine', 0.14, 0.2);
        break;
      case 'relocation':
        playTone(350, 500, 'triangle', 0.09, 0.18);
        break;
      case 'sara':
        playTone(480, 780, 'sine', 0.12, 0.22);
        break;
      case 'corner':
        playTone(523.25, 523.25, 'triangle', 0.12, 0.25);
        setTimeout(() => playTone(659.25, 659.25, 'triangle', 0.12, 0.25), 90);
        setTimeout(() => playTone(783.99, 783.99, 'triangle', 0.12, 0.25), 180);
        setTimeout(() => playTone(1046.50, 1046.50, 'triangle', 0.24, 0.3), 270);
        break;
      default:
        playTone(280, 180, 'sine', 0.08, 0.18);
        break;
    }
  }

  // ---------------------------------------------------------------------------
  // 2. Confetti Particle System for Corner Hits
  // ---------------------------------------------------------------------------
  const particles = [];
  let confettiCtx = null;
  let confettiRunning = false;

  function resizeCanvas() {
    if (confettiCanvas) {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
      confettiCtx = confettiCanvas.getContext('2d');
    }
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function launchConfetti(originX, originY) {
    if (!confettiCtx) return;
    const colors = ['#F1BF00', '#AA151B', '#E63946', '#2563EB', '#10B981', '#A855F7', '#EC4899', '#FFF'];
    for (let i = 0; i < 45; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 4;
      particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01
      });
    }
    if (!confettiRunning) {
      confettiRunning = true;
      requestAnimationFrame(updateConfetti);
    }
  }

  function updateConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2;
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.globalAlpha = Math.max(0, p.alpha);
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      confettiCtx.restore();
    }

    if (particles.length > 0) {
      requestAnimationFrame(updateConfetti);
    } else {
      confettiRunning = false;
    }
  }

  // ---------------------------------------------------------------------------
  // 3. DVD Screensaver Physics, Multi-Sara State & Palette
  // ---------------------------------------------------------------------------
  const DVD_COLORS = [
    '#F1BF00', // Spanish Gold
    '#E63946', // Rose Red
    '#2563EB', // Wiki Electric Blue
    '#10B981', // Neon Green
    '#A855F7', // Electric Purple
    '#EC4899', // Hot Pink
    '#F97316', // Bright Orange
    '#06B6D4', // Cyan
    '#FFE066'  // Sunlight Yellow
  ];

  const SPEED = 200; // Constant screensaver speed in px/sec
  const MAX_SARAS = 10;
  const saras = [];
  let lastTime = performance.now();

  function getFaceMetrics() {
    const isMobile = window.innerWidth < 650;
    const width = isMobile ? 80 : 100;
    const height = isMobile ? 80 : 100;
    const padX = isMobile ? 4 : 5;
    const padY = isMobile ? 4 : 5;
    return { width, height, padX, padY };
  }

  function cycleSaraColor(sara) {
    sara.colorIndex = (sara.colorIndex + 1) % DVD_COLORS.length;
    sara.color = DVD_COLORS[sara.colorIndex];
    sara.el.style.setProperty('--dvd-color', sara.color);
  }

  function applySquash(sara, direction) {
    if (!sara.innerEl) return;
    if (direction === 'horizontal') {
      sara.innerEl.style.transform = 'scale(0.86, 1.14)';
    } else if (direction === 'vertical') {
      sara.innerEl.style.transform = 'scale(1.14, 0.86)';
    } else if (direction === 'corner' || direction === 'click') {
      sara.innerEl.style.transform = 'scale(1.15, 1.15) rotate(8deg)';
    }
    setTimeout(() => {
      if (sara.innerEl) {
        sara.innerEl.style.transform = 'scale(1, 1) rotate(0deg)';
      }
    }, 120);
  }

  function triggerCornerHit(sara, cornerX, cornerY) {
    cycleSaraColor(sara);
    launchConfetti(cornerX, cornerY);
    playBounceSound('corner');

    if (sara.innerEl) {
      sara.innerEl.style.transform = 'scale(1.25) rotate(360deg)';
      setTimeout(() => {
        if (sara.innerEl) {
          sara.innerEl.style.transform = 'scale(1, 1) rotate(0deg)';
        }
      }, 450);
    }
  }

  // ---------------------------------------------------------------------------
  // 4. Obstacle Collision Detection & Resolution
  // ---------------------------------------------------------------------------
  function getObstacles() {
    const list = [];
    const cinemaBtn = document.querySelector('.cinema-link-btn:not(.wiki-link-btn)');
    const wikiBtn = document.querySelector('.wiki-link-btn');
    const heading = document.querySelector('.main-heading');
    const relocationHeader = document.querySelector('.relocation-text h3');
    const spainIllustration = document.querySelector('.spain-illustration');

    if (cinemaBtn) list.push({ el: cinemaBtn, type: 'cinema' });
    if (wikiBtn) list.push({ el: wikiBtn, type: 'wiki' });
    if (heading) list.push({ el: heading, type: 'heading' });
    if (relocationHeader) list.push({ el: relocationHeader, type: 'relocation' });
    if (spainIllustration) list.push({ el: spainIllustration, type: 'illustration' });

    return list;
  }

  function triggerObstacleBump(obstacle, color) {
    const el = obstacle.el;
    if (color) {
      document.documentElement.style.setProperty('--dvd-color', color);
    }
    el.classList.remove('element-bumped');
    void el.offsetWidth;
    el.classList.add('element-bumped');
    setTimeout(() => el.classList.remove('element-bumped'), 400);
  }

  function checkObstacles(sara, metrics, prevX, prevY) {
    const sLeft = sara.posX + metrics.padX;
    const sRight = sara.posX + metrics.width - metrics.padX;
    const sTop = sara.posY + metrics.padY;
    const sBottom = sara.posY + metrics.height - metrics.padY;

    const obstacles = getObstacles();

    for (const obs of obstacles) {
      const o = obs.el.getBoundingClientRect();
      if (o.width === 0 || o.height === 0) continue;

      if (sLeft < o.right && sRight > o.left && sTop < o.bottom && sBottom > o.top) {
        const overlapLeft = sRight - o.left;
        const overlapRight = o.right - sLeft;
        const overlapTop = sBottom - o.top;
        const overlapBottom = o.bottom - sTop;

        const hPen = sara.velX > 0 ? overlapLeft : (sara.velX < 0 ? overlapRight : Math.min(overlapLeft, overlapRight));
        const vPen = sara.velY > 0 ? overlapTop : (sara.velY < 0 ? overlapBottom : Math.min(overlapTop, overlapBottom));

        if (Math.abs(hPen - vPen) <= 6 && hPen > 0 && vPen > 0) {
          sara.velX = -sara.velX;
          sara.velY = -sara.velY;
          sara.dirX = Math.sign(sara.velX);
          sara.dirY = Math.sign(sara.velY);
          sara.posX = prevX;
          sara.posY = prevY;
          applySquash(sara, 'corner');
        } else if (hPen < vPen) {
          sara.velX = -sara.velX;
          sara.dirX = Math.sign(sara.velX);
          if (sara.velX < 0) {
            sara.posX = o.left - metrics.width + metrics.padX;
          } else {
            sara.posX = o.right - metrics.padX;
          }
          applySquash(sara, 'horizontal');
        } else {
          sara.velY = -sara.velY;
          sara.dirY = Math.sign(sara.velY);
          if (sara.velY < 0) {
            sara.posY = o.top - metrics.height + metrics.padY;
          } else {
            sara.posY = o.bottom - metrics.padY;
          }
          applySquash(sara, 'vertical');
        }

        cycleSaraColor(sara);
        triggerObstacleBump(obs, sara.color);
        playBounceSound(obs.type);
        return true;
      }
    }
    return false;
  }

  function resolveObstacleOverlap(sara) {
    const metrics = getFaceMetrics();
    const obstacles = getObstacles();

    for (let pass = 0; pass < 3; pass++) {
      let resolvedAny = false;
      for (const obs of obstacles) {
        const o = obs.el.getBoundingClientRect();
        if (o.width === 0 || o.height === 0) continue;

        const sLeft = sara.posX + metrics.padX;
        const sRight = sara.posX + metrics.width - metrics.padX;
        const sTop = sara.posY + metrics.padY;
        const sBottom = sara.posY + metrics.height - metrics.padY;

        if (sLeft < o.right && sRight > o.left && sTop < o.bottom && sBottom > o.top) {
          const dLeft = sRight - o.left;
          const dRight = o.right - sLeft;
          const dTop = sBottom - o.top;
          const dBottom = o.bottom - sTop;
          const minD = Math.min(dLeft, dRight, dTop, dBottom);

          if (minD === dLeft) {
            sara.posX = o.left - metrics.width + metrics.padX;
            sara.velX = -Math.abs(sara.velX);
            sara.dirX = -1;
          } else if (minD === dRight) {
            sara.posX = o.right - metrics.padX;
            sara.velX = Math.abs(sara.velX);
            sara.dirX = 1;
          } else if (minD === dTop) {
            sara.posY = o.top - metrics.height + metrics.padY;
            sara.velY = -Math.abs(sara.velY);
            sara.dirY = -1;
          } else {
            sara.posY = o.bottom - metrics.padY;
            sara.velY = Math.abs(sara.velY);
            sara.dirY = 1;
          }
          resolvedAny = true;
        }
      }
      if (!resolvedAny) break;
    }

    sara.posX = Math.max(0, Math.min(window.innerWidth - metrics.width, sara.posX));
    sara.posY = Math.max(0, Math.min(window.innerHeight - metrics.height, sara.posY));
  }

  // ---------------------------------------------------------------------------
  // 5. Multi-Body Sara Circle Collision Resolution
  // ---------------------------------------------------------------------------
  function resolveSaraCollisions() {
    const metrics = getFaceMetrics();
    // Circular collision diameter around Sara's cutout face
    const colDist = metrics.width * 0.88;
    const colDistSq = colDist * colDist;
    const minX = 0;
    const maxX = window.innerWidth - metrics.width;
    const minY = 0;
    const maxY = window.innerHeight - metrics.height;

    // 2 relaxation passes for multi-body stability without sticking
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < saras.length; i++) {
        for (let j = i + 1; j < saras.length; j++) {
          const s1 = saras[i];
          const s2 = saras[j];

          const c1X = s1.posX + metrics.width / 2;
          const c1Y = s1.posY + metrics.height / 2;
          const c2X = s2.posX + metrics.width / 2;
          const c2Y = s2.posY + metrics.height / 2;

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
            const nx = dx / dist; // normal pointing from s1 to s2
            const ny = dy / dist;
            const overlap = colDist - dist;

            // Position separation (50/50)
            s1.posX -= nx * (overlap * 0.5);
            s1.posY -= ny * (overlap * 0.5);
            s2.posX += nx * (overlap * 0.5);
            s2.posY += ny * (overlap * 0.5);

            // Clamp both within viewport bounds
            s1.posX = Math.max(minX, Math.min(maxX, s1.posX));
            s1.posY = Math.max(minY, Math.min(maxY, s1.posY));
            s2.posX = Math.max(minX, Math.min(maxX, s2.posX));
            s2.posY = Math.max(minY, Math.min(maxY, s2.posY));

            // Velocity reflection on pass 0
            if (pass === 0) {
              const relVx = s2.velX - s1.velX;
              const relVy = s2.velY - s1.velY;
              const velAlongNormal = relVx * nx + relVy * ny;

              // Only bounce if closing in towards each other along contact normal
              if (velAlongNormal < 0) {
                const absNx = Math.abs(nx);
                const absNy = Math.abs(ny);

                // Closing velocity along each axis
                const closingX = relVx * nx;
                const closingY = relVy * ny;
                let bounced = false;

                // Bounce X if closing in horizontally and horizontal normal is significant
                if (closingX < 0 && absNx >= 0.35) {
                  const dir1X = nx > 0 ? -1 : 1;
                  const dir2X = nx > 0 ? 1 : -1;
                  s1.dirX = dir1X;
                  s1.velX = dir1X * SPEED;
                  s2.dirX = dir2X;
                  s2.velX = dir2X * SPEED;
                  bounced = true;
                }

                // Bounce Y if closing in vertically and vertical normal is significant
                if (closingY < 0 && absNy >= 0.35) {
                  const dir1Y = ny > 0 ? -1 : 1;
                  const dir2Y = ny > 0 ? 1 : -1;
                  s1.dirY = dir1Y;
                  s1.velY = dir1Y * SPEED;
                  s2.dirY = dir2Y;
                  s2.velY = dir2Y * SPEED;
                  bounced = true;
                }

                // Fallback: if oblique angle prevented either condition, bounce dominant axis
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
                    s2.dirY = ny > 0 ? 1 : -1;
                    s2.velY = dir2Y * SPEED;
                  }
                }

                cycleSaraColor(s1);
                cycleSaraColor(s2);
                applySquash(s1, absNx > absNy ? 'horizontal' : 'vertical');
                applySquash(s2, absNx > absNy ? 'horizontal' : 'vertical');
                playBounceSound('sara');
              }
            }
          }
        }
      }
    }

    // Ensure no Saras were displaced into obstacles during separation
    for (const sara of saras) {
      resolveObstacleOverlap(sara);
    }
  }

  // ---------------------------------------------------------------------------
  // 6. Spawning & Click / Tap Interaction Mechanics (Continuous Non-Stop)
  // ---------------------------------------------------------------------------
  function spawnSara(parentSara) {
    if (saras.length >= MAX_SARAS) return;

    const metrics = getFaceMetrics();
    const newEl = document.createElement('div');
    newEl.className = 'dvd-sara';
    newEl.setAttribute('role', 'button');
    newEl.setAttribute('aria-label', 'Bouncing Sara Face Screensaver');
    newEl.setAttribute('tabindex', '0');

    const newInner = document.createElement('div');
    newInner.className = 'dvd-face-inner';

    const newImg = document.createElement('img');
    newImg.src = 'assets/sara-face.png';
    newImg.alt = "Sara's Cutout Face";
    newImg.className = 'dvd-face-img';
    newImg.draggable = false;

    newInner.appendChild(newImg);
    newEl.appendChild(newInner);
    document.body.appendChild(newEl);

    // Pick distinct color from DVD palette
    const nextColorIndex = (parentSara.colorIndex + saras.length) % DVD_COLORS.length;
    const color = DVD_COLORS[nextColorIndex];

    // Position outside parent collision radius so they do not overlap on frame 1
    const colDist = metrics.width * 0.88;
    const spawnDist = colDist + 10;

    // Angle pointing towards center of screen with small random spread
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const toCenterX = centerX - (parentSara.posX + metrics.width / 2);
    const toCenterY = centerY - (parentSara.posY + metrics.height / 2);
    const baseAngle = Math.atan2(toCenterY, toCenterX);
    const angle = baseAngle + (Math.random() - 0.5) * 1.2;

    const maxX = window.innerWidth - metrics.width;
    const maxY = window.innerHeight - metrics.height;
    let posX = parentSara.posX + Math.cos(angle) * spawnDist;
    let posY = parentSara.posY + Math.sin(angle) * spawnDist;
    posX = Math.max(0, Math.min(maxX, posX));
    posY = Math.max(0, Math.min(maxY, posY));

    // Opposite horizontal direction to immediately disperse
    const dirX = -parentSara.dirX || 1;
    const dirY = Math.sign(Math.sin(angle)) || (Math.random() > 0.5 ? 1 : -1);

    const newSara = {
      id: saras.length + 1,
      el: newEl,
      innerEl: newInner,
      posX,
      posY,
      velX: dirX * SPEED,
      velY: dirY * SPEED,
      dirX,
      dirY,
      colorIndex: nextColorIndex,
      color
    };

    newEl.style.setProperty('--dvd-color', color);
    newEl.style.transform = `translate3d(${posX.toFixed(2)}px, ${posY.toFixed(2)}px, 0)`;

    // Spawn pop animation
    newInner.style.transform = 'scale(0.3) rotate(-15deg)';
    requestAnimationFrame(() => {
      newInner.style.transition = 'transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      newInner.style.transform = 'scale(1, 1) rotate(0deg)';
      setTimeout(() => {
        if (newInner) newInner.style.transition = 'filter 0.25s ease';
      }, 260);
    });

    attachSaraListeners(newSara);
    resolveObstacleOverlap(newSara);
    saras.push(newSara);
  }

  function attachSaraListeners(sara) {
    let lastTapTime = 0;

    function handleTapOrClick(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const now = performance.now();
      if (now - lastTapTime < 180) return; // debounce double-trigger
      lastTapTime = now;

      initAudio();
      cycleSaraColor(sara);
      playBounceSound('sara');
      applySquash(sara, 'click');
      if (saras.length < MAX_SARAS) {
        spawnSara(sara);
      }
    }

    // Direct pointerdown click/tap: immediately spawns without stopping motion
    sara.el.addEventListener('pointerdown', (e) => {
      if (e.button === 0) {
        handleTapOrClick(e);
      }
    });

    // Native click event handler
    sara.el.addEventListener('click', (e) => {
      handleTapOrClick(e);
    });

    // Keyboard accessibility
    sara.el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTapOrClick();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Main Physics Tick Loop (Continuous Autostart, No Stopping)
  // ---------------------------------------------------------------------------
  function tick(timestamp) {
    const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // cap at 50ms
    lastTime = timestamp;

    // 1. Move each Sara & check wall / obstacle collisions (continuous, non-stop)
    for (const sara of saras) {
      const prevX = sara.posX;
      const prevY = sara.posY;

      sara.posX += sara.velX * dt;
      sara.posY += sara.velY * dt;

      const metrics = getFaceMetrics();
      const minX = 0;
      const maxX = window.innerWidth - metrics.width;
      const minY = 0;
      const maxY = window.innerHeight - metrics.height;

      const CORNER_THRESH = 8;
      let hitWallH = false;
      let hitWallV = false;

      if (sara.posX <= minX) {
        sara.posX = minX;
        sara.velX = Math.abs(sara.velX);
        sara.dirX = 1;
        hitWallH = true;
      } else if (sara.posX >= maxX) {
        sara.posX = maxX;
        sara.velX = -Math.abs(sara.velX);
        sara.dirX = -1;
        hitWallH = true;
      }

      if (sara.posY <= minY) {
        sara.posY = minY;
        sara.velY = Math.abs(sara.velY);
        sara.dirY = 1;
        hitWallV = true;
      } else if (sara.posY >= maxY) {
        sara.posY = maxY;
        sara.velY = -Math.abs(sara.velY);
        sara.dirY = -1;
        hitWallV = true;
      }

      const isNearCornerX = (sara.posX <= minX + CORNER_THRESH) || (sara.posX >= maxX - CORNER_THRESH);
      const isNearCornerY = (sara.posY <= minY + CORNER_THRESH) || (sara.posY >= maxY - CORNER_THRESH);

      if ((hitWallH && isNearCornerY) || (hitWallV && isNearCornerX)) {
        const cornerX = sara.posX < window.innerWidth / 2 ? 0 : window.innerWidth;
        const cornerY = sara.posY < window.innerHeight / 2 ? 0 : window.innerHeight;

        if (hitWallH) sara.posX = cornerX === 0 ? minX : maxX;
        if (hitWallV) sara.posY = cornerY === 0 ? minY : maxY;

        sara.velX = cornerX === 0 ? Math.abs(sara.velX) : -Math.abs(sara.velX);
        sara.velY = cornerY === 0 ? Math.abs(sara.velY) : -Math.abs(sara.velY);
        sara.dirX = Math.sign(sara.velX);
        sara.dirY = Math.sign(sara.velY);

        triggerCornerHit(sara, cornerX, cornerY);
      } else if (hitWallH || hitWallV) {
        cycleSaraColor(sara);
        playBounceSound('wall');
        applySquash(sara, hitWallH ? 'horizontal' : 'vertical');
      } else {
        checkObstacles(sara, metrics, prevX, prevY);
      }
    }

    // 2. Inter-Sara multi-body collisions
    if (saras.length > 1) {
      resolveSaraCollisions();
    }

    // 3. Render all Sara positions
    for (const sara of saras) {
      sara.el.style.transform = `translate3d(${sara.posX.toFixed(2)}px, ${sara.posY.toFixed(2)}px, 0)`;
    }

    requestAnimationFrame(tick);
  }

  // ---------------------------------------------------------------------------
  // 8. Initialization & Global Handlers (Immediate Autostart)
  // ---------------------------------------------------------------------------
  const initialSara = {
    id: 1,
    el: dvdSara,
    innerEl: dvdFaceInner,
    posX: 40,
    posY: 40,
    velX: SPEED,
    velY: SPEED,
    dirX: 1,
    dirY: 1,
    colorIndex: 0,
    color: DVD_COLORS[0]
  };

  dvdSara.style.setProperty('--dvd-color', initialSara.color);
  document.documentElement.style.setProperty('--dvd-color', initialSara.color);
  attachSaraListeners(initialSara);
  resolveObstacleOverlap(initialSara);
  saras.push(initialSara);

  // Autostart physics loop immediately on load
  requestAnimationFrame(tick);

  // Window resize handler
  window.addEventListener('resize', () => {
    resizeCanvas();
    for (const s of saras) {
      resolveObstacleOverlap(s);
    }
  });

  // Audio unlock gestures
  window.addEventListener('pointerdown', () => initAudio(), { once: true });
  window.addEventListener('keydown', () => initAudio(), { once: true });
});
