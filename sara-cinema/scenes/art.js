// scenes/art.js - High-Definition ASCII Art Gallery for Sara's Movie
import { COLORS } from '../engine/screen.js';

function makeBoxRow(content, innerWidth, borderColorFn) {
  const visualLen = content.replace(/\x1b\[[0-9;]*m/g, '').length;
  const pad = Math.max(0, innerWidth - visualLen);
  return borderColorFn('║') + content + ' '.repeat(pad) + borderColorFn('║');
}

export const ART = {
  // Act 0: Studio Logo
  STUDIO_LOGO: [
    COLORS.gold("              ★       *       ★       *       ★       *       ★"),
    COLORS.amber("         *        .     .       .       .       .        .        *"),
    COLORS.rose("      .      ┌─────────────────────────────────────────────┐      ."),
    COLORS.rose("    ★        │         C O R A Z Ó N   S T U D I O S       │        ★"),
    COLORS.rose("   *         │          - EL CINE DEL AMOR VERDADERO -     │         *"),
    COLORS.rose("  .          └─────────────────────────────────────────────┘          ."),
    COLORS.amber("         *         /\\                  /\\                  /\\         *"),
    COLORS.gold("              *   /  \\      /\\        /  \\        /\\      /  \\   *"),
    COLORS.saffron("                 / /\\ \\    /  \\  ♥   / /\\ \\  ♥   /  \\    / /\\ \\"),
    COLORS.saffron("                / /__\\ \\  / /\\ \\    / /__\\ \\    / /\\ \\  / /__\\ \\"),
    COLORS.saffron("               /_/    \\_\\/_/__\\_\\  /_/    \\_\\  /_/__\\_\\/_/    \\_\\")
  ],

  // Act 0: Rating Certificate (Width: exactly 73 inner chars)
  RATING_CERT: [
    COLORS.saffron("   ╔═══════════════════════════════════════════════════════════════════════╗"),
    "   " + makeBoxRow("  " + COLORS.bold(COLORS.gold("THE OFFICIAL WORLD ROMANCE & TAPAS BOARD DECLARES:")), 71, COLORS.saffron),
    "   " + makeBoxRow("", 71, COLORS.saffron),
    "   " + makeBoxRow("   " + COLORS.crimson("█████████") + "   " + COLORS.bold(COLORS.white("RATED [ S ] : EXCLUSIVELY FOR SARA")), 71, COLORS.saffron),
    "   " + makeBoxRow("   " + COLORS.crimson("███     █"), 71, COLORS.saffron),
    "   " + makeBoxRow("   " + COLORS.crimson("█████████") + "   " + COLORS.rose("CONTAINS: Extreme levels of cheesiness,"), 71, COLORS.saffron),
    "   " + makeBoxRow("   " + COLORS.crimson("      ███") + "   " + COLORS.rose("uncontrolled cravings for Spanish tapas,"), 71, COLORS.saffron),
    "   " + makeBoxRow("   " + COLORS.crimson("█████████") + "   " + COLORS.rose("and 100% genuine unconditional adoration."), 71, COLORS.saffron),
    "   " + makeBoxRow("", 71, COLORS.saffron),
    COLORS.saffron("   ╚═══════════════════════════════════════════════════════════════════════╝")
  ],

  // Act 1: Madrid Skyline at Night
  MADRID_SKYLINE: [
    COLORS.nightSky("  .  *       .       ★        .      *        .       ★      .      *  ."),
    COLORS.gold("              *                .            *                .          "),
    COLORS.darkGray("                |                     |                                 "),
    COLORS.amber("               / \\                   / \\             ( )  M O O N       "),
    COLORS.amber("              / _ \\                 / _ \\                               "),
    COLORS.darkGray("             | (o) |               |  |  |               .     *    .   "),
    COLORS.darkGray("          ___|_____|___         ___|__|__|___       _______________     "),
    COLORS.darkGray("         |  _   _   _  |       |  _   _   _  |     |  _   _   _   _|    "),
    COLORS.saffron("   [MADRID GRAN VÍA]   |       |  | | | | |  |     | [BAR CHURRERÍA] |    "),
    COLORS.darkGray("         | |_| |_| |_| |       | |_| |_| |_| |     | |_| |_| |_| |_| |    "),
    COLORS.gray("     ════╧═════════════╧═══════╧═════════════╧═════╧═════════════════╧════ ")
  ],

  // Act 2: San Sebastián Pintxos Counter & Jamón
  PINTXOS_BAR: [
    COLORS.amber("           .---.                                        .---.           "),
    COLORS.amber("          /     \\     [ TABERNA DONOSTIA ]             /     \\          "),
    COLORS.darkGray("     ====='====='======================================'====='=====     "),
    COLORS.crimson("          _   _     __      __                                          "),
    COLORS.crimson("         / \\_/ \\   / /     / /       [ LEGENDARY JAMÓN IBÉRICO 5 JOTAS] "),
    COLORS.rose("        |       | / /  ♥  / /         (¯`·. Sliced with Love .·´¯)      "),
    COLORS.amber("     ---'-------'--/-----/-----------------------------------------     "),
    COLORS.olive("       🍢 Gilda Skewers    🥟 Croquetas de Jamón    🍤 Gambas al Ajillo "),
    COLORS.gold("       (Olives & Anchovy)   (Crispy & Creamy)        (Sizzling in Oil)  "),
    COLORS.darkGray("     ══════════════════════════════════════════════════════════════     ")
  ],

  // Act 3: Seville Flamenco & Spanish Guitar
  SEVILLE_FLAMENCO: [
    COLORS.amber("               .---.             [ PLAZA DE ESPAÑA ]                    "),
    COLORS.amber("              /     \\          /\\     /\\     /\\     /\\                  "),
    COLORS.darkGray("        _____/_______\\________/__\\___/__\\___/__\\___/__\\______          "),
    COLORS.crimson("                    (o)                     /\\                          "),
    COLORS.crimson("                   / | \\    💃             /  \\    [GUITARRA ESPAÑOLA]  "),
    COLORS.rose("                  /  |  \\  (FLAMENCO!)    / /\\ \\      ||====()          "),
    COLORS.crimson("                 /___|___\\               / /  \\ \\     ||    ||          "),
    COLORS.crimson("                 (_______)              /_/    \\_\\   (________)         "),
    COLORS.amber("           ¡OLÉ! ¡ARZA Y TOMA!       * Flamenco Strum *  ♪ ♫ ♬ ♩        "),
    COLORS.darkGray("     ══════════════════════════════════════════════════════════════     ")
  ],

  // Act 4: Valencia Steaming Paella Pan
  PAELLA_VALENCIA: [
    COLORS.gold("               ~  ~    ♨  STEAMING AROMA OF SAFFRON  ♨    ~  ~          "),
    COLORS.saffron("            ~       (Smoked Paprika & Rosemary Rising)       ~          "),
    COLORS.amber("               .--------------------------------------------.           "),
    COLORS.amber("        =====(                                                )=====    "),
    COLORS.saffron("              \\   🦐 Gambas    🍋 Limón     🍗 Pollo   🥘   /            "),
    COLORS.gold("               \\    🟡 Golden Saffron Calasparra Rice     /             "),
    COLORS.crimson("                \\     🍅 Tomate Rallado   🌿 Romero      /              "),
    COLORS.amber("                 \\    🔥 EL SOCARRAT PERFECTO PARA SARA /               "),
    COLORS.amber("                  '------------------------------------'                "),
    COLORS.darkGray("                      |____|                    |____|                  ")
  ],

  // Act 5: Barcelona Sunset Skyline
  BARCELONA_SUNSET: [
    COLORS.sunsetPurple("    .    *       ★       .        *        ★        .       *       .   "),
    COLORS.rose("   ~~~~~~~~~~~~~~~~~ [ ATARDECER EN BARCELONA ] ~~~~~~~~~~~~~~~~~       "),
    COLORS.amber("                   .      .         /\\                                  "),
    COLORS.amber("         PARK     / \\    / \\       /  \\     SAGRADA FAMÍLIA             "),
    COLORS.rose("        GÜELL    /   \\  /   \\     / /\\ \\    Under Sunset Glow           "),
    COLORS.sunsetPurple("       MOSAICS  / /_\\ \\/ /_\\ \\   / /__\\ \\                               "),
    COLORS.sangria("      _..---.._/_/   \\_\\/   \\_\\_/_/    \\_\\_________________________     "),
    COLORS.deepSea("     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     "),
    COLORS.mediterranean("     ~~~~ MEDITERRANEAN SEA WHISPERING: 'SARA IS THE ONE' ~~~~~~~~~~     ")
  ],

  // Act 5: Golden Tapas Date Boarding Pass (Width: 71 inner chars)
  BOARDING_PASS: [
    COLORS.gold("  ╔═══════════════════════════════════════════════════════════════════════╗"),
    "  " + makeBoxRow("  " + COLORS.bold(COLORS.white("★ FIRST-CLASS VIP BOARDING PASS")) + "      " + COLORS.crimson("PASSENGER: SARA"), 71, COLORS.gold),
    COLORS.gold("  ╠═══════════════════════════════════════════════════════════════════════╣"),
    "  " + makeBoxRow("  " + COLORS.white("ORIGIN:") + " Your Favorite Spot       " + COLORS.white("DESTINATION:") + " Unlimited Tapas Bar", 71, COLORS.gold),
    "  " + makeBoxRow("  " + COLORS.white("FLIGHT:") + " " + COLORS.amber("SARA-LUVS-FOOD") + "          " + COLORS.white("SEAT:") + " " + COLORS.crimson("1A (VIP Corazón)"), 71, COLORS.gold),
    "  " + makeBoxRow("  " + COLORS.white("DATE:") + " Any Evening You Wish     " + COLORS.white("STATUS:") + " " + COLORS.saffron("AWAITING HER 'SÍ' 💖"), 71, COLORS.gold),
    COLORS.gold("  ╠═══════════════════════════════════════════════════════════════════════╣"),
    "  " + makeBoxRow("  " + COLORS.rose("INCLUDES: Fresh Paella, Hot Churros con Chocolate & Endless Laughs"), 71, COLORS.gold),
    COLORS.gold("  ╚═══════════════════════════════════════════════════════════════════════╝")
  ],

  // Grand Finale: Fireworks of Hearts
  HEART_FIREWORKS: [
    COLORS.rose("             ★          ♥         ✨        ♥          ★                "),
    COLORS.hotPink("       ♥        *       .   🎆   BOOOOM!   🎆   .       *        ♥      "),
    COLORS.gold("             .        ★    \\   |   /    ★        .                      "),
    COLORS.saffron("        ✨        ♥      ---  💖  ---      ♥        ✨                  "),
    COLORS.rose("             *        ★    /   |   \\    ★        *                      "),
    COLORS.crimson("       ♥            .        /   \\        .            ♥                "),
    COLORS.gold("            ★           ✨               ✨           ★                 "),
    COLORS.saffron("    ═══════════════════════════════════════════════════════════════     ")
  ]
};
