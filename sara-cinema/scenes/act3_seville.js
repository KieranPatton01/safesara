// scenes/act3_seville.js - Seville Flamenco Duel & Andalusian Magic
import { clear, renderLetterboxScreen, sleep, COLORS } from '../engine/screen.js';
import { ART } from './art.js';
import { playFlamencoStrum, speakAsync } from '../engine/audio.js';
import { waitForKeyPress } from '../engine/input.js';

export async function runAct3() {
  clear();
  playFlamencoStrum();

  renderLetterboxScreen(ART.SEVILLE_FLAMENCO, {
    locationTag: "SEVILLE - PLAZA DE ESPAÑA",
    speaker: "CINEMATIC NARRATOR",
    subtitle: "The warm night air in Seville smells of orange blossoms and acoustic guitar passion...",
    heartMeter: 70
  });

  await sleep(1800);

  speakAsync("Welcome to Seville. Only those with true passion can dance the flamenco for Sara.");

  renderLetterboxScreen(ART.SEVILLE_FLAMENCO, {
    locationTag: "SEVILLE - PLAZA DE ESPAÑA",
    speaker: "EL BAILAOR DE TRIANA",
    subtitle: "'You seek the Andalusian Paprika of True Love! Only someone dancing with Sara in their soul can handle this!'",
    heartMeter: 75
  });

  await sleep(1500);

  // Rhythm Quick-Time Event
  process.stdout.write('\n' + COLORS.gold("       ★ QUICK-TIME RHYTHM CHALLENGE: GET READY TO HIT [SPACE] ON '¡OLÉ!' ★\n"));
  await sleep(1200);

  process.stdout.write(COLORS.amber("                          3... (Taconeo)... \n"));
  await sleep(700);
  process.stdout.write(COLORS.saffron("                          2... (Palmas)... \n"));
  await sleep(700);
  process.stdout.write(COLORS.crimson("                          1... ¡¡¡ OLÉEEEEE !!! \n"));
  
  await waitForKeyPress("HIT [SPACE] NOW TO PERFORM THE PASSIONATE FLAMENCO SPIN!");

  clear();
  playFlamencoStrum();

  renderLetterboxScreen(ART.SEVILLE_FLAMENCO, {
    locationTag: "SEVILLE - PLAZA DE ESPAÑA",
    speaker: "THE ENTIRE PLAZA DE ESPAÑA",
    subtitle: "¡¡¡PERFECTION!!! 10/10 STYLE POINTS! The Andalusian Paprika & Sweet Churros are yours!",
    heartMeter: 85
  });

  await sleep(1800);
  await waitForKeyPress("Press [SPACE] to Rush to Valencia for the Grand Paella Climax...");
}
