// scenes/act0_intro.js - Studio Fanfare & Rating Screen
import { clear, renderLetterboxScreen, sleep, typewriter, COLORS } from '../engine/screen.js';
import { ART } from './art.js';
import { playFanfare, speakAsync } from '../engine/audio.js';
import { waitForKeyPress } from '../engine/input.js';

export async function runAct0() {
  clear();
  playFanfare();
  speakAsync("Corazón Studios presents... a command line motion picture... exclusively for Sara.");

  // Animated shimmer on studio logo
  for (let frame = 0; frame < 3; frame++) {
    renderLetterboxScreen(ART.STUDIO_LOGO, {
      locationTag: "HOLLYWOOD DE VALENCIA",
      subtitle: frame === 0 ? "CORAZÓN STUDIOS PRESENTS..." : "A CINEMATIC MASTERPIECE PRODUCED FOR ONE VERY SPECIAL GIRL..."
    });
    await sleep(700);
  }

  await sleep(600);
  clear();

  // Show Rating Screen
  renderLetterboxScreen(ART.RATING_CERT, {
    locationTag: "MINISTRY OF ROMANCE & TAPAS",
    subtitle: "RATED [ S ] : FOR SARA ONLY. Excessive romance and delicious Spanish food ahead."
  });

  await sleep(1000);
  await waitForKeyPress("Press [SPACE] or [ENTER] to Roll Film...");
}
