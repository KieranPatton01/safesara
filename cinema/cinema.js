// cinema/cinema.js - Web Terminal Cinema Orchestrator for Sara
import {
  initAudioContext,
  toggleSound,
  soundEnabled,
  playFanfare,
  playDramaticBwaam,
  playFlamencoStrum,
  playSuccessChime,
  playHeartbeat,
  playVictoryCelebration,
  speakNarrator
} from './audio.js';

// DOM Elements
const terminalOutput = document.getElementById('terminalOutput');
const startOverlay = document.getElementById('startOverlay');
const btnStartMovie = document.getElementById('btnStartMovie');
const controlsToolbar = document.getElementById('controlsToolbar');
const mobilePromptText = document.getElementById('mobilePromptText');
const terminalBody = document.getElementById('terminalBody');
const btnToggleSound = document.getElementById('btnToggleSound');
const btnToggleCrt = document.getElementById('btnToggleCrt');
const scanlinesOverlay = document.getElementById('scanlinesOverlay');

let currentKeyHandler = null;

// Helpers
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function shakeScreen() {
  terminalBody.classList.remove('shake-screen');
  void terminalBody.offsetWidth; // Force reflow
  terminalBody.classList.add('shake-screen');
}

function updateToolbar(buttons, prompt = 'Choose an option or press the key:') {
  controlsToolbar.innerHTML = '';
  mobilePromptText.textContent = prompt;

  buttons.forEach((btnInfo) => {
    const btn = document.createElement('button');
    btn.className = `btn-action ${btnInfo.className || ''}`;
    btn.innerHTML = btnInfo.label;
    btn.onclick = () => {
      if (btnInfo.onClick) btnInfo.onClick();
    };
    controlsToolbar.appendChild(btn);
  });
}

function waitForKeyOrButton(options, promptText = 'Press key or tap an option:') {
  return new Promise((resolve) => {
    const buttons = options.map((opt) => ({
      label: `<span style="color:#f59e0b;">[ ${opt.key} ]</span> ${opt.label}`,
      className: opt.className || '',
      onClick: () => {
        cleanup();
        resolve(opt.key);
      }
    }));

    // Add secret cheat code button
    buttons.push({
      label: '🍫 Secret Code',
      className: 'btn-secret',
      onClick: () => triggerSecretChurros()
    });

    updateToolbar(buttons, promptText);

    const keyListener = (e) => {
      const pressed = e.key.toUpperCase();
      if (pressed === 'S' || pressed === 'T') {
        triggerSecretChurros();
        return;
      }
      const match = options.find(
        (o) => o.key.toUpperCase() === pressed || (o.key === 'SPACE' && e.code === 'Space') || (o.key === 'ENTER' && e.code === 'Enter')
      );
      if (match) {
        cleanup();
        resolve(match.key);
      }
    };

    function cleanup() {
      window.removeEventListener('keydown', keyListener);
      currentKeyHandler = null;
    }

    currentKeyHandler = keyListener;
    window.addEventListener('keydown', keyListener);
  });
}

function waitForKeyPress(promptMsg = 'Press [SPACE] or tap Continue to proceed...') {
  return waitForKeyOrButton([
    { key: 'SPACE', label: '▶ Continue' }
  ], promptMsg);
}

function triggerSecretChurros() {
  playSuccessChime();
  const alertBanner = document.createElement('div');
  alertBanner.style.cssText = `
    position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: linear-gradient(90deg, #ec4899, #f59e0b); color: #fff;
    padding: 12px 24px; border-radius: 9999px; font-weight: 700;
    box-shadow: 0 0 25px rgba(245, 158, 11, 0.6); z-index: 999;
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px;
    animation: fadeIn 0.3s ease;
  `;
  alertBanner.textContent = '🍫 SECRET UNLOCKED: Unlimited Hot Chocolate & Churros Granted to Sara! ✨';
  document.body.appendChild(alertBanner);
  setTimeout(() => alertBanner.remove(), 3500);
}

// Center string helper
function padCenter(str, width = 80) {
  const stripped = str.replace(/<[^>]*>/g, '');
  const left = Math.max(0, Math.floor((width - stripped.length) / 2));
  return ' '.repeat(left) + str;
}

// Render formatted scene box
function renderScene({ location = '', speaker = '', subtitle = '', heartMeter = null, art = [] }) {
  let html = '';

  // Scene Location Tag
  if (location) {
    html += padCenter(`<span class="ansi-amber">📍 [ SCENE: ${location} ]</span>\n\n`);
  }

  // ASCII Art
  art.forEach((line) => {
    html += padCenter(line) + '\n';
  });
  html += '\n';

  // Subtitle / Dialogue Box
  if (speaker || subtitle) {
    const boxW = 76;
    html += padCenter(`<span class="ansi-saffron">┌${'─'.repeat(boxW - 2)}┐</span>`) + '\n';
    
    if (speaker) {
      const spkText = ` ★ ${speaker.toUpperCase()}: `;
      const padRight = Math.max(0, boxW - 4 - spkText.length);
      html += padCenter(`<span class="ansi-saffron">│</span> <span class="ansi-gold">${spkText}</span>${' '.repeat(padRight)} <span class="ansi-saffron">│</span>`) + '\n';
    }

    if (subtitle) {
      // Word wrap subtitle
      const words = subtitle.split(' ');
      let current = '';
      const lines = [];
      for (const w of words) {
        if ((current + ' ' + w).length <= boxW - 6) {
          current = current ? current + ' ' + w : w;
        } else {
          if (current) lines.push(current);
          current = w;
        }
      }
      if (current) lines.push(current);

      lines.forEach((l) => {
        const padR = Math.max(0, boxW - 6 - l.length);
        html += padCenter(`<span class="ansi-saffron">│</span>   <span class="ansi-white">${l}</span>${' '.repeat(padR)} <span class="ansi-saffron">│</span>`) + '\n';
      });
    }

    html += padCenter(`<span class="ansi-saffron">└${'─'.repeat(boxW - 2)}┘</span>`) + '\n';
  }

  // Romance Meter
  if (heartMeter !== null) {
    const full = Math.min(10, Math.floor(heartMeter / 10));
    const empty = 10 - full;
    const meterStr = '♥ '.repeat(full) + '♡ '.repeat(empty);
    html += '\n' + padCenter(`<span class="ansi-rose">SARA ROMANCE METER: [ ${meterStr} ] ${heartMeter}%</span>`) + '\n';
  }

  terminalOutput.innerHTML = html;
}

// ASCII Art Gallery
const ART = {
  STUDIO_LOGO: [
    '<span class="ansi-gold">              ★       *       ★       *       ★       *       ★</span>',
    '<span class="ansi-amber">         *        .     .       .       .       .        .        *</span>',
    '<span class="ansi-rose">      .      ┌─────────────────────────────────────────────┐      .</span>',
    '<span class="ansi-rose">    ★        │         C O R A Z Ó N   S T U D I O S       │        ★</span>',
    '<span class="ansi-rose">   *         │          - EL CINE DEL AMOR VERDADERO -     │         *</span>',
    '<span class="ansi-rose">  .          └─────────────────────────────────────────────┘          .</span>',
    '<span class="ansi-amber">         *         /\\                  /\\                  /\\         *</span>',
    '<span class="ansi-gold">              *   /  \\      /\\        /  \\        /\\      /  \\   *</span>',
    '<span class="ansi-saffron">                 / /\\ \\    /  \\  ♥   / /\\ \\  ♥   /  \\    / /\\ \\</span>',
    '<span class="ansi-saffron">                / /__\\ \\  / /\\ \\    / /__\\ \\    / /\\ \\  / /__\\ \\</span>',
    '<span class="ansi-saffron">               /_/    \\_\\/_/__\\_\\  /_/    \\_\\  /_/__\\_\\/_/    \\_\\</span>'
  ],

  RATING_CERT: [
    '<span class="ansi-saffron">   ╔═══════════════════════════════════════════════════════════════════════╗</span>',
    '<span class="ansi-saffron">   ║</span>  <span class="ansi-gold">THE OFFICIAL WORLD ROMANCE &amp; TAPAS BOARD DECLARES:</span>                 <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║                                                                       ║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">█████████</span>   <span class="ansi-white">RATED [ S ] : EXCLUSIVELY FOR SARA</span>                      <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">███     █</span>                                                           <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">█████████</span>   <span class="ansi-rose">CONTAINS: Extreme levels of cheesiness,</span>                 <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">      ███</span>   <span class="ansi-rose">uncontrolled cravings for Spanish tapas,</span>                <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">█████████</span>   <span class="ansi-rose">and 100% genuine unconditional adoration.</span>               <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║                                                                       ║</span>',
    '<span class="ansi-saffron">   ╚═══════════════════════════════════════════════════════════════════════╝</span>'
  ],

  MADRID_SKYLINE: [
    '<span class="ansi-nightsky">  .  *       .       ★        .      *        .       ★      .      *  .</span>',
    '<span class="ansi-gold">              *                .            *                .          </span>',
    '<span class="ansi-darkgray">                |                     |                                 </span>',
    '<span class="ansi-amber">               / \\                   / \\             ( )  M O O N       </span>',
    '<span class="ansi-amber">              / _ \\                 / _ \\                               </span>',
    '<span class="ansi-darkgray">             | (o) |               |  |  |               .     *    .   </span>',
    '<span class="ansi-darkgray">          ___|_____|___         ___|__|__|___       _______________     </span>',
    '<span class="ansi-darkgray">         |  _   _   _  |       |  _   _   _  |     |  _   _   _   _|    </span>',
    '<span class="ansi-saffron">   [MADRID GRAN VÍA]   |       |  | | | | |  |     | [BAR CHURRERÍA] |    </span>',
    '<span class="ansi-darkgray">         | |_| |_| |_| |       | |_| |_| |_| |     | |_| |_| |_| |_| |    </span>',
    '<span class="ansi-gray">     ════╧═════════════╧═══════╧═════════════╧═════╧═════════════════╧════ </span>'
  ],

  PINTXOS_BAR: [
    '<span class="ansi-amber">           .---.                                        .---.           </span>',
    '<span class="ansi-amber">          /     \\     [ TABERNA DONOSTIA ]             /     \\          </span>',
    '<span class="ansi-darkgray">     =====\'=====\'======================================\'=====\'=====     </span>',
    '<span class="ansi-crimson">          _   _     __      __                                          </span>',
    '<span class="ansi-crimson">         / \\_/ \\   / /     / /       [ LEGENDARY JAMÓN IBÉRICO 5 JOTAS] </span>',
    '<span class="ansi-rose">        |       | / /  ♥  / /         (¯`·. Sliced with Love .·´¯)      </span>',
    '<span class="ansi-amber">     ---\'-------\'--/-----/-----------------------------------------     </span>',
    '<span class="ansi-olive">       🍢 Gilda Skewers    🥟 Croquetas de Jamón    🍤 Gambas al Ajillo </span>',
    '<span class="ansi-gold">       (Olives &amp; Anchovy)   (Crispy &amp; Creamy)        (Sizzling in Oil)  </span>',
    '<span class="ansi-darkgray">     ══════════════════════════════════════════════════════════════     </span>'
  ],

  SEVILLE_FLAMENCO: [
    '<span class="ansi-amber">               .---.             [ PLAZA DE ESPAÑA ]                    </span>',
    '<span class="ansi-amber">              /     \\          /\\     /\\     /\\     /\\                  </span>',
    '<span class="ansi-darkgray">        _____/_______\\________/__\\___/__\\___/__\\___/__\\______          </span>',
    '<span class="ansi-crimson">                    (o)                     /\\                          </span>',
    '<span class="ansi-crimson">                   / | \\    💃             /  \\    [GUITARRA ESPAÑOLA]  </span>',
    '<span class="ansi-rose">                  /  |  \\  (FLAMENCO!)    / /\\ \\      ||====()          </span>',
    '<span class="ansi-crimson">                 /___|___\\               / /  \\ \\     ||    ||          </span>',
    '<span class="ansi-crimson">                 (_______)              /_/    \\_\\   (________)         </span>',
    '<span class="ansi-amber">           ¡OLÉ! ¡ARZA Y TOMA!       * Flamenco Strum *  ♪ ♫ ♬ ♩        </span>',
    '<span class="ansi-darkgray">     ══════════════════════════════════════════════════════════════     </span>'
  ],

  PAELLA_VALENCIA: [
    '<span class="ansi-gold">               ~  ~    ♨  STEAMING AROMA OF SAFFRON  ♨    ~  ~          </span>',
    '<span class="ansi-saffron">            ~       (Smoked Paprika &amp; Rosemary Rising)       ~          </span>',
    '<span class="ansi-amber">               .--------------------------------------------.           </span>',
    '<span class="ansi-amber">        =====(                                                )=====    </span>',
    '<span class="ansi-saffron">              \\   🦐 Gambas    🍋 Limón     🍗 Pollo   🥘   /            </span>',
    '<span class="ansi-gold">               \\    🟡 Golden Saffron Calasparra Rice     /             </span>',
    '<span class="ansi-crimson">                \\     🍅 Tomate Rallado   🌿 Romero      /              </span>',
    '<span class="ansi-amber">                 \\    🔥 EL SOCARRAT PERFECTO PARA SARA /               </span>',
    '<span class="ansi-amber">                  \'------------------------------------\'                </span>',
    '<span class="ansi-darkgray">                      |____|                    |____|                  </span>'
  ],

  BARCELONA_SUNSET: [
    '<span class="ansi-rose">    .    *       ★       .        *        ★        .       *       .   </span>',
    '<span class="ansi-rose">   ~~~~~~~~~~~~~~~~~ [ ATARDECER EN BARCELONA ] ~~~~~~~~~~~~~~~~~       </span>',
    '<span class="ansi-amber">                   .      .         /\\                                  </span>',
    '<span class="ansi-amber">         PARK     / \\    / \\       /  \\     SAGRADA FAMÍLIA             </span>',
    '<span class="ansi-rose">        GÜELL    /   \\  /   \\     / /\\ \\    Under Sunset Glow           </span>',
    '<span class="ansi-amber">       MOSAICS  / /_\\ \\/ /_\\ \\   / /__\\ \\                               </span>',
    '<span class="ansi-sangria">      _..---.._/_/   \\_\\/   \\_\\_/_/    \\_\\_________________________     </span>',
    '<span class="ansi-sea">     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     </span>',
    '<span class="ansi-sea">     ~~~~ MEDITERRANEAN SEA WHISPERING: \'SARA IS THE ONE\' ~~~~~~~~~~     </span>'
  ],

  BOARDING_PASS: [
    '<span class="ansi-gold">  ╔═══════════════════════════════════════════════════════════════════════╗</span>',
    '<span class="ansi-gold">  ║</span>  <span class="ansi-white">★ FIRST-CLASS VIP BOARDING PASS</span>      <span class="ansi-crimson">PASSENGER: SARA</span>                  <span class="ansi-gold">║</span>',
    '<span class="ansi-gold">  ╠═══════════════════════════════════════════════════════════════════════╣</span>',
    '<span class="ansi-gold">  ║</span>  <span class="ansi-white">ORIGIN:</span> Your Favorite Spot       <span class="ansi-white">DESTINATION:</span> Unlimited Tapas Bar   <span class="ansi-gold">║</span>',
    '<span class="ansi-gold">  ║</span>  <span class="ansi-white">FLIGHT:</span> <span class="ansi-amber">SARA-LUVS-FOOD</span>          <span class="ansi-white">SEAT:</span> <span class="ansi-crimson">1A (VIP Corazón)</span>             <span class="ansi-gold">║</span>',
    '<span class="ansi-gold">  ║</span>  <span class="ansi-white">DATE:</span> Any Evening You Wish     <span class="ansi-white">STATUS:</span> <span class="ansi-saffron">AWAITING HER \'SÍ\' 💖</span>       <span class="ansi-gold">║</span>',
    '<span class="ansi-gold">  ╠═══════════════════════════════════════════════════════════════════════╣</span>',
    '<span class="ansi-gold">  ║</span>  <span class="ansi-rose">INCLUDES: Fresh Paella, Hot Churros con Chocolate &amp; Endless Laughs</span>   <span class="ansi-gold">║</span>',
    '<span class="ansi-gold">  ╚═══════════════════════════════════════════════════════════════════════╝</span>'
  ],

  HEART_FIREWORKS: [
    '<span class="ansi-rose">             ★          ♥         ✨        ♥          ★                </span>',
    '<span class="ansi-hotpink">       ♥        *       .   🎆   BOOOOM!   🎆   .       *        ♥      </span>',
    '<span class="ansi-gold">             .        ★    \\   |   /    ★        .                      </span>',
    '<span class="ansi-saffron">        ✨        ♥      ---  💖  ---      ♥        ✨                  </span>',
    '<span class="ansi-rose">             *        ★    /   |   \\    ★        *                      </span>',
    '<span class="ansi-crimson">       ♥            .        /   \\        .            ♥                </span>',
    '<span class="ansi-gold">            ★           ✨               ✨           ★                 </span>',
    '<span class="ansi-saffron">    ═══════════════════════════════════════════════════════════════     </span>'
  ]
};

// ---------------- MOVIE FLOW ----------------

async function runAct0() {
  playFanfare();
  speakNarrator("Corazón Studios presents... a command line motion picture... exclusively for Sara.");

  renderScene({
    location: "HOLLYWOOD DE VALENCIA",
    subtitle: "CORAZÓN STUDIOS PRESENTS: A CINEMATIC MASTERPIECE PRODUCED FOR ONE VERY SPECIAL GIRL...",
    art: ART.STUDIO_LOGO
  });

  await sleep(1500);

  renderScene({
    location: "MINISTRY OF ROMANCE & TAPAS",
    subtitle: "RATED [ S ] : FOR SARA ONLY. Contains excessive romance, Spanish food cravings, and 100% unconditional love.",
    art: ART.RATING_CERT
  });

  await waitForKeyPress("Press [SPACE] or tap Continue to Roll Film...");
}

async function runAct1() {
  playDramaticBwaam();
  shakeScreen();
  speakNarrator("In a world of boring text messages... one man dared to build an entire cinema in command line... for Sara.");

  renderScene({
    location: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "CINEMATIC TRAILER NARRATOR",
    subtitle: "IN A WORLD... of boring, low-effort text messages...",
    heartMeter: 25,
    art: ART.MADRID_SKYLINE
  });

  await sleep(2200);

  renderScene({
    location: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "CINEMATIC TRAILER NARRATOR",
    subtitle: "One developer refused to send a simple 'Hey, what's up?'... and chose to write an entire Hollywood blockbuster.",
    heartMeter: 30,
    art: ART.MADRID_SKYLINE
  });

  await sleep(2400);

  playDramaticBwaam();
  shakeScreen();

  renderScene({
    location: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "CINEMATIC TRAILER NARRATOR",
    subtitle: "HER NAME: SARA. Her superpower: Looking breathtaking and appreciating elite Spanish food.",
    heartMeter: 35,
    art: ART.MADRID_SKYLINE
  });

  await sleep(2400);

  renderScene({
    location: "MADRID - GRAN VÍA (MIDNIGHT)",
    speaker: "THE MISSION ALERT",
    subtitle: "ALERT: The legendary 'Receta del Amor' has been scattered across Spain! Sara must help recover it!",
    heartMeter: 40,
    art: ART.MADRID_SKYLINE
  });

  await waitForKeyPress("Press [SPACE] to Board the High-Speed Train to San Sebastián...");
}

async function runAct2() {
  renderScene({
    location: "SAN SEBASTIÁN - TABERNA DONOSTIA",
    speaker: "MISSION BRIEFING",
    subtitle: "Objective 1: Secure the 5-Jotas Jamón Ibérico and Crispy Croquetas from Master Chef Don Ignacio.",
    heartMeter: 45,
    art: ART.PINTXOS_BAR
  });

  await sleep(1800);

  renderScene({
    location: "SAN SEBASTIÁN - TABERNA DONOSTIA",
    speaker: "MASTER CHEF IGNACIO",
    subtitle: "'Nobody touches my 5-Jotas Jamón unless they prove their worthy devotion! Who are you cooking for?!'",
    heartMeter: 45,
    art: ART.PINTXOS_BAR
  });

  const choice = await waitForKeyOrButton([
    { key: "1", label: "Speak broken tourist Spanish" },
    { key: "2", label: "Offer life savings & computer" },
    { key: "3", label: "Say: 'This is for SARA'" }
  ], "How do you convince Chef Ignacio?");

  if (choice === "1") {
    renderScene({
      location: "SAN SEBASTIÁN - TABERNA DONOSTIA",
      speaker: "CHEF IGNACIO (LAUGHING TEARS)",
      subtitle: "'¡Madre mía! Your Spanish accent is an absolute disaster! But your bravery warms my Basque heart! Take the croquetas!'",
      heartMeter: 60,
      art: ART.PINTXOS_BAR
    });
  } else if (choice === "2") {
    renderScene({
      location: "SAN SEBASTIÁN - TABERNA DONOSTIA",
      speaker: "CHEF IGNACIO",
      subtitle: "'A computer?! Can I dip a keyboard in olive oil?! No! But I hear the name SARA in your heart... Take the tapas!'",
      heartMeter: 60,
      art: ART.PINTXOS_BAR
    });
  } else {
    renderScene({
      location: "SAN SEBASTIÁN - TABERNA DONOSTIA",
      speaker: "CHEF IGNACIO (GASPS IN AWE)",
      subtitle: "'¡¿PARA SARA?! Why didn't you say so?! Take the entire ham! Take the croquetas! Take the restaurant keys!'",
      heartMeter: 70,
      art: ART.PINTXOS_BAR
    });
  }

  playSuccessChime();
  speakNarrator("Chef Ignacio surrenders the golden Jamón for Sara.");
  await sleep(2200);

  await waitForKeyPress("Press [SPACE] to Sprint South to Seville for the Flamenco Duel...");
}

async function runAct3() {
  playFlamencoStrum();

  renderScene({
    location: "SEVILLE - PLAZA DE ESPAÑA",
    speaker: "CINEMATIC NARRATOR",
    subtitle: "The warm night air in Seville smells of orange blossoms and acoustic Spanish guitar passion...",
    heartMeter: 75,
    art: ART.SEVILLE_FLAMENCO
  });

  await sleep(2000);
  speakNarrator("Welcome to Seville. Only those with true passion can dance the flamenco for Sara.");

  renderScene({
    location: "SEVILLE - PLAZA DE ESPAÑA",
    speaker: "EL BAILAOR DE TRIANA",
    subtitle: "'You seek the Andalusian Paprika of True Love! Only someone dancing with Sara in their soul can handle this!'",
    heartMeter: 80,
    art: ART.SEVILLE_FLAMENCO
  });

  await sleep(1500);

  // Rhythm Challenge
  await waitForKeyOrButton([
    { key: "SPACE", label: "💃 TAP HERE ON '¡OLÉ!'" }
  ], "QUICK-TIME CHALLENGE: Tap button or press SPACE on '¡OLÉ!'");

  playFlamencoStrum();

  renderScene({
    location: "SEVILLE - PLAZA DE ESPAÑA",
    speaker: "THE ENTIRE PLAZA DE ESPAÑA",
    subtitle: "¡¡¡PERFECTION!!! 10/10 STYLE POINTS! The Andalusian Paprika & Sweet Hot Churros are yours!",
    heartMeter: 88,
    art: ART.SEVILLE_FLAMENCO
  });

  await sleep(2000);
  await waitForKeyPress("Press [SPACE] to Rush to Valencia for the Grand Paella Climax...");
}

async function runAct4() {
  renderScene({
    location: "VALENCIA - THE CRADLE OF PAELLA",
    speaker: "VALENCIAN GRANDMASTER CHEF",
    subtitle: "The wood fire crackles. The rice is simmering into golden glory! But we need the FINAL SECRET INGREDIENT!",
    heartMeter: 88,
    art: ART.PAELLA_VALENCIA
  });

  speakNarrator("The paella is simmering. What is the missing secret ingredient?");

  let chosen = null;
  while (chosen !== "C") {
    chosen = await waitForKeyOrButton([
      { key: "A", label: "Spicy Chorizo sausage" },
      { key: "B", label: "Mountain of Garlic Aioli" },
      { key: "C", label: "Sara's radiant smile & laugh" }
    ], "What is the secret ingredient for Sara's paella?");

    if (chosen === "A") {
      renderScene({
        location: "VALENCIA - SACRILEGE ALERT!",
        speaker: "THE ENTIRE POPULATION OF VALENCIA",
        subtitle: "¡¡SACRILEGIO!! Putting chorizo in authentic Valencian paella?! They will banish us to the sea! Choose again!",
        heartMeter: 85,
        art: ART.PAELLA_VALENCIA
      });
      await sleep(2000);
    } else if (chosen === "B") {
      renderScene({
        location: "VALENCIA - NEAR MISS",
        speaker: "CHEF VALENCIANO",
        subtitle: "Aioli is heavenly, but it's not enough to win Sara's heart! Dig deeper!",
        heartMeter: 89,
        art: ART.PAELLA_VALENCIA
      });
      await sleep(2000);
    }
  }

  playSuccessChime();
  speakNarrator("Critical success! Sara's smile creates the most legendary socarrat in Spanish history.");

  renderScene({
    location: "VALENCIA - THE FEAST OF GLORY",
    speaker: "CHEF VALENCIANO (CRYING TEARS OF JOY)",
    subtitle: "¡¡¡SUBLIME!!! The socarrat reaches 100% crispy perfection! The feast is ready for our Queen Sara!",
    heartMeter: 98,
    art: ART.PAELLA_VALENCIA
  });

  playHeartbeat();
  await sleep(2200);

  await waitForKeyPress("Press [SPACE] to Travel to Barcelona for the Grand Rooftop Confession...");
}

async function runAct5() {
  renderScene({
    location: "BARCELONA - PARK GÜELL TWILIGHT",
    speaker: "CINEMATIC PAUSE",
    subtitle: "The journey through Spain reaches its horizon as the sunset paints the Mediterranean...",
    heartMeter: 99,
    art: ART.BARCELONA_SUNSET
  });

  await sleep(2500);

  // Love Letter Monologue
  const boxW = 74;
  let letterHtml = padCenter(`<span class="ansi-rose">╔${'═'.repeat(boxW - 2)}╗</span>`) + '\n';
  const header = "★ A SPECIAL MESSAGE FROM THE HEART ★";
  const padH = Math.floor((boxW - 2 - header.length) / 2);
  letterHtml += padCenter(`<span class="ansi-rose">║</span>${' '.repeat(padH)}<span class="ansi-gold">${header}</span>${' '.repeat(boxW - 2 - header.length - padH)}<span class="ansi-rose">║</span>`) + '\n';
  letterHtml += padCenter(`<span class="ansi-rose">╠${'═'.repeat(boxW - 2)}╣</span>`) + '\n';

  const lines = [
    "Dear Sara,",
    "",
    "All jokes and silly code aside...",
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

  lines.forEach((l) => {
    const padL = Math.max(0, boxW - 6 - l.length);
    letterHtml += padCenter(`<span class="ansi-rose">║</span>  <span class="ansi-white">${l}</span>${' '.repeat(padL)}<span class="ansi-rose">║</span>`) + '\n';
  });

  letterHtml += padCenter(`<span class="ansi-rose">╚${'═'.repeat(boxW - 2)}╝</span>`) + '\n\n';

  // Append Boarding Pass
  ART.BOARDING_PASS.forEach((line) => {
    letterHtml += padCenter(line) + '\n';
  });

  terminalOutput.innerHTML = letterHtml;

  await sleep(1500);

  // Proposal
  await waitForKeyOrButton([
    { key: "Y", label: "¡Sí, por supuesto! (Yes, absolutely!)", className: "btn-action" },
    { key: "C", label: "Yes, but with extra Churros & Croquetas!", className: "btn-action" },
    { key: "D", label: "Definitely YES! When & where?!", className: "btn-action" }
  ], "Sara, will you go on a real-life Spanish tapas date with me?");

  // Grand Celebration
  playVictoryCelebration();
  speakNarrator("Sara said yes! The mission is a triumphant success! Get ready for the best Spanish tapas date ever!");

  for (let f = 0; f < 4; f++) {
    renderScene({
      location: "CELEBRATION OVER SPAIN",
      speaker: "WORLD MISSION STATUS",
      subtitle: "MISSION ACCOMPLISHED: SARA SAID YES! SARA'S HEART HAS BEEN WON!",
      heartMeter: 1000000,
      art: ART.HEART_FIREWORKS
    });
    await sleep(600);
  }

  // Final confirmation screen
  let finalHtml = terminalOutput.innerHTML + '\n\n';
  finalHtml += padCenter('<span class="ansi-gold" style="font-size:16px;">★ ★ ★ IT\'S AN OFFICIAL DATE! ★ ★ ★</span>') + '\n\n';
  finalHtml += padCenter('<span class="ansi-rose">You and me + Sizzling Spanish Tapas + Endless Churros = Perfection.</span>') + '\n';
  finalHtml += padCenter('<span class="ansi-saffron">Screenshot this screen right now and send it to me so we can set the day! 😉</span>') + '\n\n';
  terminalOutput.innerHTML = finalHtml;

  await waitForKeyPress("Press [SPACE] or tap Continue to Roll End Credits...");

  // Rolling End Credits
  let creditsHtml = '\n' + padCenter('<span class="ansi-gold">═══════════════════════════════════════════════════════════</span>') + '\n';
  creditsHtml += padCenter('<span class="ansi-white" style="font-weight:800;">                   E N D   C R E D I T S                  </span>') + '\n';
  creditsHtml += padCenter('<span class="ansi-gold">═══════════════════════════════════════════════════════════</span>') + '\n\n';

  const credits = [
    ["STARRING", "Sara (The Love of My Life)"],
    ["CO-STARRING & DIRECTOR", "Her Number 1 Fan"],
    ["EXECUTIVE CHEF CONSULTANT", "Abuela de Valencia"],
    ["FLAMENCO CHOREOGRAPHY", "Plaza de España Ensemble"],
    ["JAMÓN SECURITY", "Don Ignacio of San Sebastián"],
    ["PRODUCTION BUDGET", "800 lines of code & 100% genuine love"],
    ["CHANCE OF ETERNAL HAPPINESS", "100.0%"],
    ["NEXT EPISODE", "Our Real-Life Tapas Date Coming Soon!"]
  ];

  credits.forEach(([role, name]) => {
    creditsHtml += padCenter(`<span class="ansi-amber">${role.padEnd(28)}</span> <span class="ansi-white">${name}</span>`) + '\n';
  });

  creditsHtml += '\n' + padCenter('<span class="ansi-rose" style="font-size:15px;">♥ Gracias por existir, Sara ♥</span>') + '\n\n';
  terminalOutput.innerHTML = creditsHtml;

  updateToolbar([
    {
      label: '🎬 Replay Movie',
      onClick: () => location.reload()
    },
    {
      label: '🌹 Return to Main Website',
      onClick: () => location.href = '../'
    }
  ], "Film Concluded. Thank you for watching!");
}

// Initialization
btnStartMovie.addEventListener('click', async () => {
  initAudioContext();
  startOverlay.style.display = 'none';
  terminalOutput.style.display = 'block';

  await runAct0();
  await runAct1();
  await runAct2();
  await runAct3();
  await runAct4();
  await runAct5();
});

btnToggleSound.addEventListener('click', () => {
  const state = toggleSound();
  btnToggleSound.textContent = state ? '🔊 Sound: ON' : '🔇 Sound: OFF';
});

btnToggleCrt.addEventListener('click', () => {
  scanlinesOverlay.classList.toggle('off');
  const isOff = scanlinesOverlay.classList.contains('off');
  btnToggleCrt.textContent = isOff ? '📺 CRT: OFF' : '📺 CRT: ON';
});
