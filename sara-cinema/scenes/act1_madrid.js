// scenes/act1_madrid.js - The Madrid Awakening & The Inciting Incident
import { clear, renderLetterboxScreen, sleep, shakeScreen, COLORS } from '../engine/screen.js';
import { ART } from './art.js';
import { playDramaticBwaam, speakAsync } from '../engine/audio.js';
import { waitForKeyPress } from '../engine/input.js';

export async function runAct1() {
  clear();
  
  // Dramatic Hans Zimmer Opening
  playDramaticBwaam();
  await shakeScreen(2, 3);

  speakAsync("In a world of boring text messages... one man dared to build an entire cinema in command line... for Sara.");

  renderLetterboxScreen(ART.MADRID_SKYLINE, {
    locationTag: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "CINEMATIC TRAILER NARRATOR",
    subtitle: "IN A WORLD... of boring, low-effort text messages...",
    heartMeter: 20
  });

  await sleep(1800);

  renderLetterboxScreen(ART.MADRID_SKYLINE, {
    locationTag: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "CINEMATIC TRAILER NARRATOR",
    subtitle: "One developer refused to send a simple 'Hey, what's up?'... and chose to write an entire Hollywood blockbuster.",
    heartMeter: 25
  });

  await sleep(2200);

  playDramaticBwaam();
  await shakeScreen(3, 4);

  renderLetterboxScreen(ART.MADRID_SKYLINE, {
    locationTag: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "CINEMATIC TRAILER NARRATOR",
    subtitle: "HER NAME: SARA. Her superpower: Looking breathtaking and appreciating top-tier food.",
    heartMeter: 35
  });

  await sleep(2200);

  renderLetterboxScreen(ART.MADRID_SKYLINE, {
    locationTag: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "THE PLOT CRISIS",
    subtitle: "ALERT: The legendary 'Receta del Amor' has been scattered across Spain! Only Sara can help recover it!",
    heartMeter: 40
  });

  await waitForKeyPress("Press [SPACE] to Board the High-Speed Train to San Sebastián...");
}
