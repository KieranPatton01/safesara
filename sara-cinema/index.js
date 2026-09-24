// index.js - Master Orchestrator for "Misión Im-Paella-ble"
import { hideCursor, showCursor, clear } from './engine/screen.js';
import { runAct0 } from './scenes/act0_intro.js';
import { runAct1 } from './scenes/act1_madrid.js';
import { runAct2 } from './scenes/act2_sansebastian.js';
import { runAct3 } from './scenes/act3_seville.js';
import { runAct4 } from './scenes/act4_valencia.js';
import { runAct5 } from './scenes/act5_barcelona.js';

// Safe exit handling to always restore terminal cursor
function cleanup() {
  showCursor();
  process.stdout.write('\n\x1b[0m');
}

process.on('SIGINT', () => {
  cleanup();
  process.exit(0);
});

process.on('uncaughtException', (err) => {
  cleanup();
  console.error('\nAn error occurred:', err);
  process.exit(1);
});

async function main() {
  try {
    hideCursor();
    clear();

    // The Movie Acts
    await runAct0();
    await runAct1();
    await runAct2();
    await runAct3();
    await runAct4();
    await runAct5();

    cleanup();
  } catch (err) {
    cleanup();
    console.error(err);
  }
}

main();
