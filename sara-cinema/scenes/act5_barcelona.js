// scenes/act5_barcelona.js - The Barcelona Sunset, The Love Letter & Golden Ticket
import { clear, renderLetterboxScreen, sleep, center, COLORS, SCREEN_WIDTH } from '../engine/screen.js';
import { ART } from './art.js';
import { playVictoryCelebration, speakAsync } from '../engine/audio.js';
import { askChoice, waitForKeyPress } from '../engine/input.js';
import { CONFIG } from '../config.js';
import { generateKeepsakes } from '../engine/keepsake.js';

export async function runAct5() {
  clear();

  renderLetterboxScreen(ART.BARCELONA_SUNSET, {
    locationTag: "BARCELONA - PARK GÜELL TWILIGHT",
    speaker: "CINEMATIC PAUSE",
    subtitle: "The journey through Spain reaches its horizon as the sunset paints the Mediterranean...",
    heartMeter: 99
  });

  await sleep(2000);
  clear();

  // The 4th Wall Break: The Genuine Love Letter
  const boxWidth = Math.min(SCREEN_WIDTH - 6, 76);
  const innerWidth = boxWidth - 2;
  const headerText = '★ A SPECIAL MESSAGE FROM THE HEART ★';
  const padLeft = Math.floor((innerWidth - headerText.length) / 2);
  const padRight = innerWidth - headerText.length - padLeft;

  process.stdout.write('\n' + center(COLORS.rose('╔' + '═'.repeat(innerWidth) + '╗')) + '\n');
  process.stdout.write(center(COLORS.rose('║') + ' '.repeat(padLeft) + COLORS.bold(COLORS.gold(headerText)) + ' '.repeat(padRight) + COLORS.rose('║')) + '\n');
  process.stdout.write(center(COLORS.rose('╠' + '═'.repeat(innerWidth) + '╣')) + '\n');
  process.stdout.write(center(COLORS.rose('║') + ' '.repeat(innerWidth) + COLORS.rose('║')) + '\n');

  const letterLines = [
    `Dear ${CONFIG.herName},`,
    "",
    "All jokes and movie trailers aside...",
    "I could have just sent you a simple text or asked you out normally.",
    "But someone as genuinely incredible, hilarious, and radiant as you",
    "deserves something truly one-of-a-kind.",
    "",
    "You bring warmth and laughter everywhere you go,",
    "just like a golden sunset over the Mediterranean.",
    "Sara, you are truly the socarrat of my life - the absolute best part.",
    "Life without you is like paella without saffron: completely missing the spark.",
    "",
    "And because I know how much you love amazing food and great times,",
    "there is only one question left to ask..."
  ];

  for (const line of letterLines) {
    const formatted = '  ' + line;
    const padding = Math.max(0, innerWidth - formatted.length);
    process.stdout.write(center(COLORS.rose('║') + COLORS.white(formatted) + ' '.repeat(padding) + COLORS.rose('║')) + '\n');
    await sleep(200);
  }

  process.stdout.write(center(COLORS.rose('║') + ' '.repeat(innerWidth) + COLORS.rose('║')) + '\n');
  process.stdout.write(center(COLORS.rose('╚' + '═'.repeat(innerWidth) + '╝')) + '\n\n');

  await sleep(1500);

  // Present the Golden VIP Boarding Pass
  for (const line of ART.BOARDING_PASS) {
    process.stdout.write(center(line) + '\n');
  }

  await sleep(1200);

  // The Grand Question
  const answer = await askChoice(`SARA, WILL YOU GO ON A REAL-LIFE SPANISH FOOD DATE WITH ME?`, [
    { key: "Y", label: "¡Sí, por supuesto! (Yes, absolutely!)" },
    { key: "C", label: "Yes, but ONLY with extra Churros con Chocolate & Croquetas!" },
    { key: "D", label: "Definitely YES! When and where?!" }
  ]);

  // Generate permanent physical/digital keepsakes!
  generateKeepsakes();

  // Grand Celebration
  clear();
  playVictoryCelebration();
  speakAsync(`Sara said yes! The mission is a triumphant success! Get ready for the best Spanish tapas date ever!`);

  // Animated Fireworks Loop
  for (let frame = 0; frame < 5; frame++) {
    renderLetterboxScreen(ART.HEART_FIREWORKS, {
      locationTag: "CELEBRATION OVER SPAIN",
      speaker: "WORLD MISSION STATUS",
      subtitle: "MISSION ACCOMPLISHED: SARA SAID YES! SARA'S HEART HAS BEEN WON!",
      heartMeter: 1000000
    });
    await sleep(650);
  }

  // Final confirmation screen
  process.stdout.write('\n');
  process.stdout.write(center(COLORS.bold(COLORS.gold("★ ★ ★ IT'S AN OFFICIAL DATE! ★ ★ ★"))) + '\n\n');
  process.stdout.write(center(COLORS.rose("You and me + Sizzling Spanish Tapas + Endless Churros = Perfection.")) + '\n');
  process.stdout.write(center(COLORS.saffron("✨ YOUR OFFICIAL VIP BOARDING PASS HAS BEEN GENERATED IN THIS FOLDER! ✨")) + '\n');
  process.stdout.write(center(COLORS.amber("(Open 'SARA_VIP_DATE_INVITATION.html' or 'SARA_VIP_DATE_TICKET.txt' to view it!)")) + '\n\n');
  process.stdout.write(center(COLORS.rose("Screenshot this screen and send it to me right now so we can set the day! 😉")) + '\n\n');
  
  await waitForKeyPress("Press [SPACE] or [ENTER] to Roll End Credits...");

  // Rolling End Credits
  clear();
  process.stdout.write('\n' + center(COLORS.gold("═══════════════════════════════════════════════════════════")) + '\n');
  process.stdout.write(center(COLORS.bold(COLORS.white("                   E N D   C R E D I T S                  "))) + '\n');
  process.stdout.write(center(COLORS.gold("═══════════════════════════════════════════════════════════")) + '\n\n');

  const credits = [
    ["STARRING", `${CONFIG.herName} (The Love of My Life)`],
    ["CO-STARRING & DIRECTOR", CONFIG.yourName],
    ["EXECUTIVE CHEF CONSULTANT", "Abuela de Valencia"],
    ["FLAMENCO CHOREOGRAPHY", "Plaza de España Ensemble"],
    ["JAMÓN SECURITY", "Don Ignacio of San Sebastián"],
    ["PRODUCTION BUDGET", "800 lines of code & 100% genuine love"],
    ["CHANCE OF ETERNAL HAPPINESS", "100.0%"],
    ["NEXT EPISODE", "Our Real-Life Tapas Date Coming Soon to a Table Near You!"]
  ];

  for (const [role, name] of credits) {
    process.stdout.write(center(COLORS.amber(role.padEnd(28)) + COLORS.white(name)) + '\n');
    await sleep(500);
  }

  process.stdout.write('\n' + center(COLORS.rose("♥ Gracias por existir, Sara ♥")) + '\n\n');
  await sleep(1500);
}
