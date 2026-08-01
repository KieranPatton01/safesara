/* ==========================================================================
   Interactive Application Logic - Sara F. Rodriguez
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initPetalCanvas();
  initAudioSynth();
  initPoemGrid();
  initVerseGenerator();
  initRoseGarden();
  initFlipCards();
});

/* ==========================================================================
   1. Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const phrases = [
    "Where Spanish warmth meets infinite tenderness...",
    "Every ordinary day with Sara is a masterpiece.",
    "A digital sanctuary of love for Sara F. Rodriguez.",
    "My best friend, my soulmate, my future wife."
  ];
  
  const el = document.getElementById('typewriterText');
  if (!el) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const current = phrases[phraseIdx];
    
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 40;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      typeSpeed = 2200; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   2. Floating Petals & Sparkle Canvas Animation
   ========================================================================== */
function initPetalCanvas() {
  const canvas = document.getElementById('petalCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = 45;
  const particles = [];

  class Petal {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.size = Math.random() * 10 + 6;
      this.speedY = Math.random() * 1.2 + 0.5;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 1.5;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.isSparkle = Math.random() > 0.6;
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.01) * 0.5 + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > height + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;

      if (this.isSparkle) {
        // Golden Sparkle Star
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Soft Rose Petal
        ctx.fillStyle = '#E63946';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(this.size, -this.size, this.size * 0.5, this.size * 1.5);
        ctx.quadraticCurveTo(-this.size * 0.5, this.size, 0, 0);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Petal());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. Ambient Web Audio Synthesizer (No external MP3 files needed)
   ========================================================================== */
function initAudioSynth() {
  const btn = document.getElementById('soundToggleBtn');
  const label = document.getElementById('soundLabel');
  if (!btn) return;

  let audioCtx = null;
  let isPlaying = false;
  let intervalId = null;

  const chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 349.23], // Fmaj7
    [196.00, 246.94, 293.66, 392.00]  // G
  ];

  function playTone(freq, duration) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch(e) {
      console.log('Audio error:', e);
    }
  }

  function startAmbientChords() {
    let chordIdx = 0;
    intervalId = setInterval(() => {
      const currentChord = chords[chordIdx];
      currentChord.forEach((note, i) => {
        setTimeout(() => {
          playTone(note, 6.0);
        }, i * 400);
      });
      chordIdx = (chordIdx + 1) % chords.length;
    }, 4500);
  }

  btn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (!isPlaying) {
      audioCtx.resume();
      startAmbientChords();
      isPlaying = true;
      label.textContent = "Pause Soundscape";
      btn.style.background = "var(--primary-rose)";
      btn.style.color = "#fff";
      showToast("🌸 Playing soft romantic soundscape");
    } else {
      clearInterval(intervalId);
      isPlaying = false;
      label.textContent = "Play Soundscape";
      btn.style.background = "";
      btn.style.color = "";
      showToast("Soundscape paused");
    }
  });
}

/* ==========================================================================
   4. Poem Anthology & Grid Filtering
   ========================================================================== */
const POEMS = [
  {
    id: 1,
    title: "El Alma de Sara (Sara's Soul)",
    category: "spanish",
    date: "Dedicated Verse",
    text: `Hay una luz en tus ojos, Sara,
que ilumina cada mañana sin cesar.
No necesitas corona ni reino,
tu sonrisa es mi único hogar.

Con el calor de tu tierra y la gracia de tu ser,
eres el mayor regalo que pude conocer.`
  },
  {
    id: 2,
    title: "Everyday Magic",
    category: "everyday",
    date: "Morning Reflection",
    text: `They look for poetry in distant skies,
In grand declarations and complex art.
I find it in the way you laugh at dawn,
And the quiet warmth of your Spanish heart.

Simple coffee, holding hands,
Sara turns normal into wonderland.`
  },
  {
    id: 3,
    title: "The Extraordinary Sara",
    category: "devotion",
    date: "Eternal Vow",
    text: `Some call the world predictable and plain,
Until Sara steps into the room.
 Her gentle voice dispels the heavy rain,
Her honest spirit makes the shadows bloom.

She is my home, my anchor, and my light,
My future wife, my morning and my night.`
  },
  {
    id: 4,
    title: "Promesa de Amor",
    category: "spanish",
    date: "Verso de Amor",
    text: `Te elijo a ti, Sara F. Rodríguez,
en cada amanecer que nos traiga el sol.
Tu sencillez es la más pura belleza,
tu amor es mi único y verdadero horizonte.

Caminar a tu lado es mi mayor dicha.`
  },
  {
    id: 5,
    title: "Unfiltered Grace",
    category: "everyday",
    date: "Quiet Moments",
    text: `No stage lights needed, no disguise,
Truth shines brightly in Sara's eyes.
Real love needs no grand design—
Just knowing Sara F. Rodriguez is mine.`
  },
  {
    id: 6,
    title: "To My Future Wife",
    category: "devotion",
    date: "Forever & Always",
    text: `I used to wonder what forever meant,
Until I met the girl with eyes so kind.
Now all my prayers and quiet dreams are spent
Praising the sweetest soul I'll ever find.

Here's to Sara, today and for all time.`
  }
];

function initPoemGrid() {
  const grid = document.getElementById('poemGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  function render(poems) {
    grid.innerHTML = poems.map(poem => `
      <div class="poem-card glass-panel" data-id="${poem.id}">
        <span class="poem-card-tag">${poem.category}</span>
        <h3 class="poem-card-title">${poem.title}</h3>
        <p class="poem-card-body">${poem.text}</p>
        <div class="poem-card-footer">
          <span class="poem-date">${poem.date}</span>
          <button class="copy-btn" onclick="copyText('${escapeQuotes(poem.text)}')" title="Copy Verse">
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  render(POEMS);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      if (cat === 'all') {
        render(POEMS);
      } else {
        render(POEMS.filter(p => p.category === cat));
      }
    });
  });
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/\n/g, "\\n");
}

/* ==========================================================================
   5. Interactive Custom Verse Generator
   ========================================================================== */
const GENERATOR_STANZAS = {
  warm: [
    `In Sara's gentle smile I find my peace,\nWhere all the restless worries softly cease.\nHer Spanish warmth is sun upon my face,\nMy heart's forever favorite resting place.`,
    `A cup of tea, a quiet afternoon,\nWith Sara near, December feels like June.\nNo golden palace holds a brighter ray\nThan Sara bringing sweetness to my day.`
  ],
  passionate: [
    `Sara F. Rodriguez, name of song and fire,\nThe single answer to my heart's desire.\nThrough every ocean, past the farthest star,\nMy soul will always linger where you are.`,
    `Te amo con el alma, Sara de mi vida,\nTu ternura cura cualquier herida.\nEres la reina de mi corazón,\nMi dulce refugio, mi única razón.`
  ],
  sweet: [
    `Her messy hair, her adorable smile,\nShe makes every moment thoroughly worth while.\nNo fancy tricks, no silly pretense,\nSara makes perfect, beautiful sense.`,
    `A little laugh, a crinkle near her eyes,\nSara is my favorite sweet surprise.\nI'd choose her once, I'd choose her twice,\nShe makes this ordinary world paradise.`
  ],
  poetic: [
    `When stars align and quiet rivers flow,\nThere is a grace that only lovers know.\nIt walks with Sara everywhere she goes,\nAs gentle as the opening of a rose.`,
    `Before the dawn, when sleepy shadows part,\nI count the blessings anchored in my heart.\nAnd first of all, in glowing golden light,\nIs Sara Rodriguez, my guide through night.`
  ]
};

function initVerseGenerator() {
  const btn = document.getElementById('generateVerseBtn');
  const moodSelect = document.getElementById('poemMood');
  const stanzaEl = document.getElementById('generatedStanza');
  const copyBtn = document.getElementById('copyPoemBtn');

  if (!btn || !stanzaEl) return;

  btn.addEventListener('click', () => {
    const mood = moodSelect.value || 'warm';
    const list = GENERATOR_STANZAS[mood] || GENERATOR_STANZAS.warm;
    const randomVerse = list[Math.floor(Math.random() * list.length)];

    stanzaEl.style.opacity = '0';
    setTimeout(() => {
      stanzaEl.textContent = randomVerse;
      stanzaEl.style.opacity = '1';
      showToast("✨ Fresh verse generated for Sara!");
    }, 200);
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyText(stanzaEl.textContent);
    });
  }
}

/* ==========================================================================
   6. Secret Rose Garden
   ========================================================================== */
const SECRET_MESSAGES = [
  "🌹 Sara, you make ordinary moments feel like poetry.",
  "🌹 Your smile is my absolute favorite sight in the world.",
  "🌹 Te quiero con toda mi alma, Sara F. Rodríguez.",
  "🌹 Lucky doesn't even begin to describe how I feel having you.",
  "🌹 You're not just my future wife—you're my best friend.",
  "🌹 Every morning is better because I get to love you.",
  "🌹 Spanish charm, golden heart, unmatched sweetness."
];

function initRoseGarden() {
  const row = document.getElementById('rosesRow');
  const msgBox = document.getElementById('gardenMessageText');
  if (!row || !msgBox) return;

  row.innerHTML = SECRET_MESSAGES.map((msg, i) => `
    <div class="rose-item" data-index="${i}" title="Click to pick rose #${i+1}">
      🌹
    </div>
  `).join('');

  row.querySelectorAll('.rose-item').forEach(rose => {
    rose.addEventListener('click', () => {
      row.querySelectorAll('.rose-item').forEach(r => r.classList.remove('picked'));
      rose.classList.add('picked');
      
      const idx = rose.getAttribute('data-index');
      msgBox.style.opacity = '0';
      setTimeout(() => {
        msgBox.textContent = SECRET_MESSAGES[idx];
        msgBox.style.opacity = '1';
      }, 150);
    });
  });
}

/* ==========================================================================
   7. Flip Card Touch & Click Helpers
   ========================================================================== */
function initFlipCards() {
  const cards = document.querySelectorAll('.flip-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

/* Helper Utilities */
function copyText(text) {
  const formatted = text.replace(/\\n/g, '\n').replace(/\\'/g, "'");
  navigator.clipboard.writeText(formatted).then(() => {
    showToast("📋 Verse copied to clipboard!");
  }).catch(() => {
    showToast("Selected text ready to copy");
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}
