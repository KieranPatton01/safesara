// scenes/act4_valencia.js - The Saffron Siege & The Paella Climax
import { clear, renderLetterboxScreen, sleep, COLORS } from '../engine/screen.js';
import { ART } from './art.js';
import { playSuccessChime, playHeartbeat, speakAsync } from '../engine/audio.js';
import { askChoice, waitForKeyPress } from '../engine/input.js';

export async function runAct4() {
  clear();

  // Simmering steam animation
  for (let f = 0; f < 3; f++) {
    renderLetterboxScreen(ART.PAELLA_VALENCIA, {
      locationTag: "VALENCIA - THE CRADLE OF PAELLA",
      speaker: "VALENCIAN GRANDMASTER CHEF",
      subtitle: f === 0 ? "The wood fire crackles. Saffron perfumes the Mediterranean breeze..." : "The rice is simmering into golden glory! But we need the FINAL INGREDIENT!",
      heartMeter: 88
    });
    await sleep(600);
  }

  speakAsync("The paella is simmering. What is the missing secret ingredient?");

  // Interactive Choice
  let chosenIngredient = null;
  while (chosenIngredient !== "C") {
    chosenIngredient = await askChoice("WHAT IS THE FINAL SECRET INGREDIENT FOR SARA'S PAELLA?", [
      { key: "A", label: "Chunks of spicy Chorizo sausage" },
      { key: "B", label: "A mountain of Garlic Aioli" },
      { key: "C", label: "Sara's radiant smile and sweet laughter" }
    ]);

    clear();
    if (chosenIngredient === "A") {
      renderLetterboxScreen(ART.PAELLA_VALENCIA, {
        locationTag: "VALENCIA - SACRILEGE ALERT!",
        speaker: "THE ENTIRE POPULATION OF VALENCIA",
        subtitle: "¡¡SACRILEGIO!! Putting chorizo in authentic paella?! They will banish us to the sea! Choose again!",
        heartMeter: 85
      });
      await sleep(1800);
    } else if (chosenIngredient === "B") {
      renderLetterboxScreen(ART.PAELLA_VALENCIA, {
        locationTag: "VALENCIA - NEAR MISS",
        speaker: "CHEF VALENCIANO",
        subtitle: "Aioli is heavenly, but it's not enough to conquer Sara's heart! Dig deeper!",
        heartMeter: 89
      });
      await sleep(1800);
    }
  }

  // Critical success!
  playSuccessChime();
  speakAsync("Critical success! Sara's smile creates the most legendary socarrat in Spanish history.");

  renderLetterboxScreen(ART.PAELLA_VALENCIA, {
    locationTag: "VALENCIA - THE FEAST OF GLORY",
    speaker: "CHEF VALENCIANO (CRYING TEARS OF JOY)",
    subtitle: "¡¡¡SUBLIME!!! The socarrat reaches 100% crispy perfection! The feast is ready for our Queen Sara!",
    heartMeter: 98
  });

  playHeartbeat();
  await sleep(2200);

  await waitForKeyPress("Press [SPACE] to Travel to Barcelona for the Grand Rooftop Confession...");
}
