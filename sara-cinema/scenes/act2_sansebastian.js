// scenes/act2_sansebastian.js - The San Sebastián Pintxos Heist
import { clear, renderLetterboxScreen, sleep, COLORS } from '../engine/screen.js';
import { ART } from './art.js';
import { playSuccessChime, speakAsync } from '../engine/audio.js';
import { askChoice, waitForKeyPress } from '../engine/input.js';

export async function runAct2() {
  clear();

  renderLetterboxScreen(ART.PINTXOS_BAR, {
    locationTag: "SAN SEBASTIÁN - TABERNA DONOSTIA",
    speaker: "MISSION BRIEFING",
    subtitle: "Objective 1: Acquire the Legendary Jamón Ibérico and Crispy Croquetas from Master Chef Don Ignacio.",
    heartMeter: 45
  });

  await sleep(1500);

  renderLetterboxScreen(ART.PINTXOS_BAR, {
    locationTag: "SAN SEBASTIÁN - TABERNA DONOSTIA",
    speaker: "MASTER CHEF IGNACIO",
    subtitle: "'Nobody touches my 5-Jotas Jamón unless they prove their worthy devotion! Who are you cooking for?!'",
    heartMeter: 45
  });

  // Interactive Choice
  const choice = await askChoice("HOW DO YOU CONVINCE THE CHEF?", [
    { key: "1", label: "Speak broken tourist Spanish: 'Hola señor, uno jamoncito por favor!'" },
    { key: "2", label: "Offer your life savings and your entire computer" },
    { key: "3", label: "Look him in the eyes and say: 'This is for the Love of my Life, SARA.'" }
  ]);

  clear();

  if (choice === "1") {
    renderLetterboxScreen(ART.PINTXOS_BAR, {
      locationTag: "SAN SEBASTIÁN - TABERNA DONOSTIA",
      speaker: "CHEF IGNACIO (LAUGHING TEARS)",
      subtitle: "'¡Madre mía! Your Spanish accent is an absolute disaster! But your bravery warms my Basque heart!'",
      heartMeter: 60
    });
  } else if (choice === "2") {
    renderLetterboxScreen(ART.PINTXOS_BAR, {
      locationTag: "SAN SEBASTIÁN - TABERNA DONOSTIA",
      speaker: "CHEF IGNACIO",
      subtitle: "'A computer?! Can I dip a keyboard in olive oil?! No! But I hear the name SARA in your heart...'",
      heartMeter: 60
    });
  } else {
    renderLetterboxScreen(ART.PINTXOS_BAR, {
      locationTag: "SAN SEBASTIÁN - TABERNA DONOSTIA",
      speaker: "CHEF IGNACIO (GASPS IN AWE)",
      subtitle: "'¡¿PARA SARA?! Why didn't you say so?! Take the whole ham! Take the croquetas! Take my restaurant keys!'",
      heartMeter: 70
    });
  }

  playSuccessChime();
  speakAsync("Chef Ignacio surrenders the golden Jamón for Sara.");
  await sleep(2000);

  await waitForKeyPress("Press [SPACE] to Sprint South to Seville for the Flamenco Duel...");
}
