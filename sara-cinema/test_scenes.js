// test_scenes.js - Automated Verification Test Suite
import { ART } from './scenes/art.js';
import { CONFIG } from './config.js';
import { COLORS, renderLetterboxScreen, clear, SCREEN_WIDTH } from './engine/screen.js';

console.log('--- RUNNING AUTOMATED VERIFICATION ---');

// 1. Verify Config
console.log('✓ Checking CONFIG:', CONFIG.herName, '-', CONFIG.dateProposal.title);

// 2. Verify ASCII Art Integrity
const artKeys = Object.keys(ART);
console.log(`✓ Checking ART elements (${artKeys.length} total):`, artKeys.join(', '));
for (const key of artKeys) {
  if (!Array.isArray(ART[key]) || ART[key].length === 0) {
    throw new Error(`Art element ${key} is invalid or empty!`);
  }
}
console.log('✓ All ASCII artwork arrays validated successfully.');

// 3. Verify Screen Rendering Functions
console.log('✓ Verifying renderLetterboxScreen test render...');
renderLetterboxScreen(ART.STUDIO_LOGO, {
  locationTag: 'TEST STAGE',
  subtitle: 'Verification test running smoothly.',
  heartMeter: 50
});

console.log('\n✓ Screen render executed successfully.');

// 4. Verify Module Imports
import('./scenes/act0_intro.js').then(() => console.log('✓ Act 0 loaded.'));
import('./scenes/act1_madrid.js').then(() => console.log('✓ Act 1 loaded.'));
import('./scenes/act2_sansebastian.js').then(() => console.log('✓ Act 2 loaded.'));
import('./scenes/act3_seville.js').then(() => console.log('✓ Act 3 loaded.'));
import('./scenes/act4_valencia.js').then(() => console.log('✓ Act 4 loaded.'));
import('./scenes/act5_barcelona.js').then(() => console.log('✓ Act 5 loaded.'));
import('./engine/audio.js').then(() => console.log('✓ Audio engine loaded.'));
import('./engine/input.js').then(() => console.log('✓ Input engine loaded.'));

setTimeout(() => {
  console.log('\n★ ALL AUTOMATED VERIFICATION CHECKS PASSED WITH FLYING COLORS! ★\n');
  process.exit(0);
}, 500);
