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

    updateToolbar(buttons, promptText);

    const keyListener = (e) => {
      const pressed = e.key.toUpperCase();
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
    html += '\n' + padCenter(`<span class="ansi-rose">SARA SEÑORITA ROMANCE METER: [ ${meterStr} ] ${heartMeter}%</span>`) + '\n';
  }

  terminalOutput.innerHTML = html;
}

// ASCII Art Gallery
const ART = {
  STUDIO_LOGO: [
    '<span class="ansi-gold">              ★       *       ★       *       ★       *       ★</span>',
    '<span class="ansi-amber">         *        .     .       .       .       .        .        *</span>',
    '<span class="ansi-rose">      .      ┌─────────────────────────────────────────────┐      .</span>',
    '<span class="ansi-rose">    ★        │              S A R A   S T U D I O S        │        ★</span>',
    '<span class="ansi-rose">   *         │     - A MOTION PICTURE EXCLUSIVELY FOR -    │         *</span>',
    '<span class="ansi-rose">  .          │           SARA THE SPICY SEÑORITA           │          .</span>',
    '<span class="ansi-rose">             └─────────────────────────────────────────────┘</span>',
    '<span class="ansi-amber">         *         /\\                  /\\                  /\\         *</span>',
    '<span class="ansi-gold">              *   /  \\      /\\        /  \\        /\\      /  \\   *</span>',
    '<span class="ansi-saffron">                 / /\\ \\    /  \\  ♥   / /\\ \\  ♥   /  \\    / /\\ \\</span>',
    '<span class="ansi-saffron">                / /__\\ \\  / /\\ \\    / /__\\ \\    / /\\ \\  / /__\\ \\</span>',
    '<span class="ansi-saffron">               /_/    \\_\\/_/__\\_\\  /_/    \\_\\  /_/__\\_\\/_/    \\_\\</span>'
  ],

  RATING_CERT: [
    '<span class="ansi-saffron">   ╔═══════════════════════════════════════════════════════════════════════╗</span>',
    '<span class="ansi-saffron">   ║</span>  <span class="ansi-gold">THE OFFICIAL WORLD ROMANCE &amp; DRAMA BOARD DECLARES:</span>                 <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║                                                                       ║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">█████████</span>   <span class="ansi-white">RATED [ S ] : EXCLUSIVELY FOR SARA SEÑORITA</span>             <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">███     █</span>                                                           <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">█████████</span>   <span class="ansi-rose">CONTAINS: Extreme levels of cheesiness,</span>                 <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">      ███</span>   <span class="ansi-rose">uncontrolled cravings for Sara Señorita,</span>                <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║</span>   <span class="ansi-crimson">█████████</span>   <span class="ansi-rose">and 100% genuine unconditional adoration.</span>               <span class="ansi-saffron">║</span>',
    '<span class="ansi-saffron">   ║                                                                       ║</span>',
    '<span class="ansi-saffron">   ╚═══════════════════════════════════════════════════════════════════════╝</span>'
  ],

  SAFESTAY_HOSTEL: [
    '<span class="ansi-amber">       .-------------------------------------------------------------.     </span>',
    '<span class="ansi-gold">       |     [★]  S A F E S T A Y   H O S T E L S   L O U N G E  [★]  |     </span>',
    '<span class="ansi-amber">       \'-------------------------------------------------------------\'     </span>',
    '<span class="ansi-darkgray">        |   [FRONT DESK]                     [KEYCARDS] [RECEPTION BELL] | </span>',
    '<span class="ansi-saffron">        |   ┌───────────────┐                  ┌──┐       (o)           | </span>',
    '<span class="ansi-rose">        |   │ SARA (On Duty)│                  │░░│      / | \\          | </span>',
    '<span class="ansi-saffron">        |   │ Looking Spicy │   KIERAN (6ft 3))  └──┘     /  |  \\  KIERAN | </span>',
    '<span class="ansi-gold">        |   └───────────────┘   ────────────&gt;          (_______) SMILES | </span>',
    '<span class="ansi-darkgray">     ═══╧═══════════════════════════════════════════════════════════════╧══ </span>'
  ],

  SPIDERMAN_CINEMA: [
    '<span class="ansi-nightsky">    .   *      ★       .       [ ODEON VIP CINEMA ]      .       *      .   </span>',
    '<span class="ansi-crimson">                 /\\                                /\\                       </span>',
    '<span class="ansi-crimson">                /  \\                              /  \\                      </span>',
    '<span class="ansi-white">               / /\\ \\      [ SPIDER-MAN: ]       / /\\ \\                     </span>',
    '<span class="ansi-white">              / /__\\ \\     [ NO WAY HOME ]      / /__\\ \\                    </span>',
    '<span class="ansi-sea">             / /====\\ \\    ===============     / /====\\ \\                   </span>',
    '<span class="ansi-crimson">            /_/      \\_\\   (PETER 1, 2 &amp; 3)   /_/      \\_\\                  </span>',
    '<span class="ansi-gold">       🍿 POPCORN SHARED   🕷️ WEB SLINGING    🥤 SARA &amp; KIERAN SIDE BY SIDE </span>',
    '<span class="ansi-darkgray">     ══════════════════════════════════════════════════════════════════════ </span>'
  ],

  DINNER_DATE: [
    '<span class="ansi-amber">                .--------------------------------------------.              </span>',
    '<span class="ansi-gold">                |      C A N D L E L I T   D I N N E R       |              </span>',
    '<span class="ansi-amber">                \'--------------------------------------------\'              </span>',
    '<span class="ansi-rose">                       (i)  CANDLE LIGHT        🍷 WINE GLASS               </span>',
    '<span class="ansi-saffron">                 🍕 SAFESTAY PIZZA    🥐 PAIN AU CHOCOLAT                   </span>',
    '<span class="ansi-crimson">                 🥘 SIZZLING SPANISH TAPAS FOR SARA SEÑORITA                </span>',
    '<span class="ansi-gold">                 "Best safestay food with the hottest girl in the hostel"         </span>',
    '<span class="ansi-darkgray">     ══════════════════════════════════════════════════════════════════════ </span>'
  ],

  ROOFTOP_FINALE: [
    '<span class="ansi-nightsky">    .    *       ★       .        *        ★        .       *       .   </span>',
    '<span class="ansi-rose">   ~~~~~~~~~~~~~~~~~ [ SAFESTAY ROOFTOP UNDER THE STARS ] ~~~~~~~~~~~~~~ </span>',
    '<span class="ansi-amber">                   .      .         /\\                                  </span>',
    '<span class="ansi-gold">                 KIERAN &amp; SARA    /  \\     THE MULTIVERSE               </span>',
    '<span class="ansi-rose">                HAND IN HAND     / /\\ \\    OF TRUE LOVE                 </span>',
    '<span class="ansi-amber">                UNDER THE MOON  / /__\\ \\                                </span>',
    '<span class="ansi-rose">                ♥ "Sara Señorita, you are the one" ♥                    </span>',
    '<span class="ansi-darkgray">     ══════════════════════════════════════════════════════════════════════ </span>'
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
  speakNarrator("Sara Studios presents a motion picture exclusively for Sara the spicy Señorita");

  renderScene({
    location: "SARA STUDIOS HEADQUARTERS",
    subtitle: "SARA STUDIOS PRESENTS: A MOTION PICTURE EXCLUSIVELY FOR SARA THE SPICY SEÑORITA",
    art: ART.STUDIO_LOGO
  });

  await sleep(1800);

  renderScene({
    location: "94-116 Cowgate, Edinburgh, EH1 1ST",
    subtitle: "RATED [ S ] : EXCLUSIVELY FOR SARA SEÑORITA. Contains excessive Yearn and 100% unconditional love.",
    art: ART.RATING_CERT
  });

  await waitForKeyPress("Press [SPACE] or tap Continue to Roll Film...");
}

async function runAct1() {
  playDramaticBwaam();
  shakeScreen();
  speakNarrator("Sara is on shift at Safestay Hostels. Kieran walks in and instantly falls in love.");

  renderScene({
    location: "SAFESTAY HOSTELS - RECEPTION",
    speaker: "SARA'S PERSPECTIVE",
    subtitle: "You (Sara) are working another busy shift at Safestay Hostels... looking radiant and effortlessly spicy as always.",
    heartMeter: 30,
    art: ART.SAFESTAY_HOSTEL
  });

  await sleep(2200);

  renderScene({
    location: "SAFESTAY HOSTELS - RECEPTION",
    speaker: "KIERANS EYES DILATE LOOKING AT SARA",
    subtitle: "'Hey Sara Stop texting your mid bf for a sec and look at me. You look stunning today, Señorita.'",
    heartMeter: 40,
    art: ART.SAFESTAY_HOSTEL
  });

  await sleep(2000);

  // The Big Decision: Kieran vs Current Boyfriend
  let picked = null;
  while (picked !== "1") {
    picked = await waitForKeyOrButton([
      { key: "1", label: "Choose Kieran (6ft 3)" },
      { key: "2", label: "Stick with current boyfriend (Mid)" }
    ], "SARA'S CHOICE: Who do you pick?");

    if (picked === "2") {
      playDramaticBwaam();
      shakeScreen();
      renderScene({
        location: "SAFESTAY HOSTELS - REALITY CHECK",
        speaker: "KIERAN (Laughing)",
        subtitle: "'Nice try Sara, why don't your try ther other answer?'",
        heartMeter: 38,
        art: ART.SAFESTAY_HOSTEL
      });
      await sleep(2200);
    }
  }

  playSuccessChime();
  speakNarrator("Sara chooses Kieran! The spark is undeniable.");

  renderScene({
    location: "SAFESTAY HOSTELS - CRITICAL HIT",
    speaker: "KIERAN (BEAMING WITH JOY)",
    subtitle: "'I knew you had elite taste, Sara Señorita! Grab your coat, clock out early—we are going on our first date!'",
    heartMeter: 55,
    art: ART.SAFESTAY_HOSTEL
  });

  await sleep(2200);
  await waitForKeyPress("Press [SPACE] to Head to the Cinema with Kieran...");
}

async function runAct2() {
  playDramaticBwaam();
  shakeScreen();

  renderScene({
    location: "VIP CINEMA - WITH KIERAN",
    speaker: "SARA'S PERSPECTIVE",
    subtitle: "You and Kieran arrive at the cinema with giant buckets of popcorn to watch SPIDER-MAN: NO WAY HOME! (he stalked your socials to see what you liked)",
    heartMeter: 60,
    art: ART.SPIDERMAN_CINEMA
  });

  await sleep(2000);

  renderScene({
    location: "ODEON VIP CINEMA - WITH KIERAN",
    speaker: "KIERAN (PASSING THE POPCORN TO HIS PRINCESS)",
    subtitle: "'Alright Sara, we're in the cinema! Scene are we watching first i'LL be watching you the entire time?'",
    heartMeter: 69,
    art: ART.SPIDERMAN_CINEMA
  });

  const sceneChoice = await waitForKeyOrButton([
    { key: "1", label: "The Rooftop Introduction (Peter 1, 2 & 3 meet)" },
    { key: "2", label: "The Science Lab Bonding Moment" },
    { key: "3", label: "The Final Battle at Statue of Liberty" }
  ], "Which Spider-Man scene do you choose babe?");

  playSuccessChime();

  if (sceneChoice === "1") {
    renderScene({
      location: "ODEON VIP CINEMA - THE ROOFTOP",
      speaker: "KIERAN & SARA QUOTING IN UNISON",
      subtitle: "'Ned opens the portal! Andrew Garfield leaps in, Tobey appears, and the Peters point at each other! Kieran whispers: You're my MJ, Sara.'",
      heartMeter: 75,
      art: ART.SPIDERMAN_CINEMA
    });
  } else if (sceneChoice === "2") {
    renderScene({
      location: "ODEON VIP CINEMA - SCIENCE LAB",
      speaker: "KIERAN (LAUGHING WITH SARA)",
      subtitle: "'I\\'m something of a scientist myself!' Peter 2 cracks Peter 3's back. Kieran whispers: 'Our chemistry is 100x stronger than this whole lab, Sara!'",
      heartMeter: 75,
      art: ART.SPIDERMAN_CINEMA
    });
  } else {
    renderScene({
      location: "ODEON VIP CINEMA - THE FINAL BATTLE",
      speaker: "KIERAN & SARA CHEERING",
      subtitle: "'All three Spider-Men swing together over the Statue of Liberty! Epic multiverse teamwork! Kieran holds your hand during the climax.'",
      heartMeter: 80,
      art: ART.SPIDERMAN_CINEMA
    });
  }

  await sleep(2400);
  await waitForKeyPress("Press [SPACE] to go on the Dinner Date with Kieran...");
}

async function runAct3() {
  playFlamencoStrum();

  renderScene({
    location: "SAFESTAY CANDLELIT LOUNGE",
    speaker: "SARA'S PERSPECTIVE",
    subtitle: "After yearning at teh cinema, Kieran takes you to a romantic safestay table set with glowing candles and soft spanish music.",
    heartMeter: 80,
    art: ART.DINNER_DATE
  });

  await sleep(2000);

  renderScene({
    location: "SAFESTAY CANDLELIT LOUNGE",
    speaker: "KIERAN (LOOKING AT SARA HUNGRY)",
    subtitle: "'Spider-Man was cool, but staring at the LOML works up an appetite! What is Sara the spicy Señorita craving tonight?'",
    heartMeter: 85,
    art: ART.DINNER_DATE
  });

  const foodChoice = await waitForKeyOrButton([
    { key: "1", label: "Safestay Pizza (With extra love)" },
    { key: "2", label: "Safestay Pain au Chocolat (Stale and Crusty)" },
    { key: "3", label: "Authentic Spanish Tapas (Spicy Señorita Special)" }
  ], "What do you want to eat for dinner?");

  playSuccessChime();

  if (foodChoice === "1") {
    renderScene({
      location: "SAFESTAY CANDLELIT LOUNGE",
      speaker: "KIERAN (GRINNING WITH A SLICE)",
      subtitle: "'Fuck the pizza, can i eat you instead?'",
      heartMeter: 90,
      art: ART.DINNER_DATE
    });
  } else if (foodChoice === "2") {
    renderScene({
      location: "SAFESTAY CANDLELIT LOUNGE",
      speaker: "KIERAN (SERVING THE BAKERY BASKET)",
      subtitle: "'Warm and yummy, just like her'",
      heartMeter: 90,
      art: ART.DINNER_DATE
    });
  } else {
    renderScene({
      location: "SAFESTAY CANDLELIT LOUNGE",
      speaker: "KIERAN (RAISING A GLASS OF SANGRIA)",
      subtitle: "'I love the taste of Spain and I'm not talking about the food '",
      heartMeter: 95,
      art: ART.DINNER_DATE
    });
  }

  await sleep(2400);
  await waitForKeyPress("Press [SPACE] to Head to the Rooftop for the Grand Finale...");
}

async function runAct4() {
  playHeartbeat();

  renderScene({
    location: "SAFESTAY ROOFTOP - UNDER THE STARS",
    speaker: "SARA'S PERSPECTIVE",
    subtitle: "You and Kieran stand on the Safestay rooftop under a canopy of stars. The screams from 3 sisters are in the distance",
    heartMeter: 96,
    art: ART.ROOFTOP_FINALE
  });

  await sleep(2000);

  renderScene({
    location: "SAFESTAY ROOFTOP - UNDER THE STARS",
    speaker: "KIERAN (LONGING FOR SARA)",
    subtitle: "'Sara, tonight has been unforgettable. I've been in love with you for a year, I've just been too nervous to tell you..'",
    heartMeter: 98,
    art: ART.ROOFTOP_FINALE
  });

  await sleep(1800);

  // The Final Choice
  const finalChoice = await waitForKeyOrButton([
    { key: "1", label: "Break up with current boyfriend officially (are you genuinely close? I'll wait)" },
    { key: "2", label: "Confess your undying love to Kieran (this might be dangerous!)" },
    { key: "3", label: "Propose to Kieran on the spot! (he's gonna love this)" }
  ], "SARA'S FINAL CHOICE:");

  // Celebration
  playVictoryCelebration();
  speakNarrator("Sara made her choice! Kieran and Sara the spicy Señorita are officially together forever!");

  if (finalChoice === "1") {
    renderScene({
      location: "SAFESTAY ROOFTOP - THE BREAKUP TEXT SENT",
      speaker: "KIERAN (PUMPING HIS FIST IN THE AIR)",
      subtitle: "'HE IS HISTORY! The text is sent and you are officially free! Kieran has been dreaming of this for a year, but he was too nervous to tell you.. Sara Señorita!'",
      heartMeter: 1000000,
      art: ART.HEART_FIREWORKS
    });
  } else if (finalChoice === "2") {
    renderScene({
      location: "SAFESTAY ROOFTOP - LOVE CONFESSION",
      speaker: "KIERAN (MELTING IN SARA'S EYES)",
      subtitle: "'You love me?! Sara, I've been in love with you since I saw your name for the interview and I looked your name up?''",
      heartMeter: 1000000,
      art: ART.HEART_FIREWORKS
    });
  } else {
    renderScene({
      location: "SAFESTAY ROOFTOP - THE PROPOSAL!",
      speaker: "KIERAN (CRYING TEARS OF PURE JOY)",
      subtitle: "'¡¡¡SÍ!!! A MILLION TIMES YES!! SARA PLEASE BE MY GIRLFRIEND?'",
      heartMeter: 1000000,
      art: ART.HEART_FIREWORKS
    });
  }

  await sleep(2400);

  // Final confirmation screen
  let finalHtml = terminalOutput.innerHTML + '\n\n';
  finalHtml += padCenter('<span class="ansi-gold" style="font-size:16px;">★ ★ ★ MISSION ACCOMPLISHED: SARA CHOSE KIERAN! ★ ★ ★</span>') + '\n\n';
  finalHtml += padCenter('<span class="ansi-rose">Kieran + Sara the Spicy Señorita = Match Made in Heaven.</span>') + '\n';
  finalHtml += padCenter('<span class="ansi-saffron">Every shift I yearn for you! 😉</span>') + '\n\n';
  terminalOutput.innerHTML = finalHtml;

  await waitForKeyPress("Press [SPACE] or tap Continue to Roll End Credits...");

  // Rolling End Credits
  let creditsHtml = '\n' + padCenter('<span class="ansi-gold">═══════════════════════════════════════════════════════════</span>') + '\n';
  creditsHtml += padCenter('<span class="ansi-white" style="font-weight:800;">                   E N D   C R E D I T S                  </span>') + '\n';
  creditsHtml += padCenter('<span class="ansi-gold">═══════════════════════════════════════════════════════════</span>') + '\n\n';

  const credits = [
    ["STARRING", "Sara (She is so fucking sexy)"],
    ["CO-STARRING & DIRECTOR", "Kieran (Tall dark and handsome)"],
    ["HEADQUARTERS", "Safestay Hostels"],
    ["FEATURE PRESENTATION", "Spider-Man: No Way Home"],
    ["CULINARY MENU", "Safestay Pizza, Pain au Chocolat & Tapas"],
    ["PRODUCTION BUDGET", "3 shifts this week"],
    ["CHANCE OF ETERNAL HAPPINESS", "100.0%"],
    ["NEXT EPISODE", "Released when you break up with your boyfriend"]
  ];

  credits.forEach(([role, name]) => {
    creditsHtml += padCenter(`<span class="ansi-amber">${role.padEnd(28)}</span> <span class="ansi-white">${name}</span>`) + '\n';
  });

  creditsHtml += '\n' + padCenter('<span class="ansi-rose" style="font-size:15px;">♥ Te quiero, Sara Señorita ♥</span>') + '\n\n';
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
  ], "Film Concluded. Kieran and Sara forever!");
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
