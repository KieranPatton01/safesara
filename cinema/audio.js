// cinema/audio.js - Web Audio Synthesizer & Web Speech API Engine
let audioCtx = null;
export let soundEnabled = true;

export function toggleSound(forceState) {
  if (forceState !== undefined) {
    soundEnabled = forceState;
  } else {
    soundEnabled = !soundEnabled;
  }
  if (!soundEnabled && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  return soundEnabled;
}

export function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Low-level tone generator with ADSR envelope
function playTone(freq, type = 'sawtooth', durationMs = 200, delayMs = 0, gainLevel = 0.2) {
  if (!soundEnabled || !audioCtx) return;

  const startTime = audioCtx.currentTime + (delayMs / 1000);
  const stopTime = startTime + (durationMs / 1000);

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);

  // Gentle low-pass filter for warmer, analog sound
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(type === 'sawtooth' ? 1800 : 3500, startTime);

  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, stopTime);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(startTime);
  osc.stop(stopTime);
}

// 1. Hollywood 20th Century Fox Fanfare
export function playFanfare() {
  initAudioContext();
  if (!soundEnabled || !audioCtx) return;

  const notes = [
    { freq: 440, dur: 140, delay: 0 },
    { freq: 440, dur: 90, delay: 180 },
    { freq: 440, dur: 90, delay: 290 },
    { freq: 440, dur: 380, delay: 400 },
    { freq: 349.2, dur: 220, delay: 850 },
    { freq: 392.0, dur: 220, delay: 1100 },
    { freq: 440, dur: 450, delay: 1350 },
    { freq: 523.2, dur: 220, delay: 1850 },
    { freq: 587.3, dur: 650, delay: 2100 }
  ];

  notes.forEach(n => {
    playTone(n.freq, 'sawtooth', n.dur, n.delay, 0.22);
    playTone(n.freq / 2, 'triangle', n.dur, n.delay, 0.18); // Warm sub-octave
  });
}

// 2. Hans Zimmer Deep Dramatic Brass Rumble (BWAAAAM)
export function playDramaticBwaam() {
  initAudioContext();
  if (!soundEnabled || !audioCtx) return;

  const startTime = audioCtx.currentTime;
  const duration = 1.4;

  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc1.type = 'sawtooth';
  osc2.type = 'triangle';

  // Low brass frequency with slight drop
  osc1.frequency.setValueAtTime(110, startTime);
  osc1.frequency.exponentialRampToValueAtTime(65, startTime + duration);

  osc2.frequency.setValueAtTime(55, startTime);
  osc2.frequency.exponentialRampToValueAtTime(45, startTime + duration);

  // Filter sweep
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, startTime);
  filter.frequency.exponentialRampToValueAtTime(180, startTime + duration);

  gain.gain.setValueAtTime(0.01, startTime);
  gain.gain.linearRampToValueAtTime(0.4, startTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc1.start(startTime);
  osc2.start(startTime);
  osc1.stop(startTime + duration);
  osc2.stop(startTime + duration);
}

// 3. Spanish Flamenco Guitar Strum (Andalusian Phrygian Cadence)
export function playFlamencoStrum() {
  initAudioContext();
  if (!soundEnabled || !audioCtx) return;

  // Fast nylon-string guitar pluck simulation
  const chords = [
    { freq: 329.6, dur: 90, delay: 0 },    // E4
    { freq: 392.0, dur: 90, delay: 60 },   // G4
    { freq: 493.8, dur: 90, delay: 120 },  // B4
    { freq: 523.2, dur: 100, delay: 180 }, // C5
    { freq: 659.2, dur: 160, delay: 240 }, // E5
    { freq: 659.2, dur: 100, delay: 420 }, // Pluck down
    { freq: 523.2, dur: 100, delay: 480 },
    { freq: 493.8, dur: 100, delay: 540 },
    { freq: 440.0, dur: 250, delay: 600 }  // A4
  ];

  chords.forEach(c => {
    playTone(c.freq, 'triangle', c.dur, c.delay, 0.28);
    playTone(c.freq * 2, 'sine', c.dur * 0.8, c.delay, 0.12);
  });
}

// 4. Success Chime
export function playSuccessChime() {
  initAudioContext();
  if (!soundEnabled || !audioCtx) return;

  const notes = [
    { freq: 523.25, dur: 100, delay: 0 },
    { freq: 659.25, dur: 100, delay: 80 },
    { freq: 783.99, dur: 120, delay: 160 },
    { freq: 1046.5, dur: 320, delay: 240 }
  ];

  notes.forEach(n => playTone(n.freq, 'sine', n.dur, n.delay, 0.25));
}

// 5. Heartbeat
export function playHeartbeat() {
  initAudioContext();
  if (!soundEnabled || !audioCtx) return;

  playTone(85, 'sine', 120, 0, 0.35);
  playTone(70, 'sine', 160, 140, 0.3);
}

// 6. Victory Celebration
export function playVictoryCelebration() {
  initAudioContext();
  if (!soundEnabled || !audioCtx) return;

  const fanfare = [
    { freq: 523.25, dur: 140, delay: 0 },
    { freq: 587.33, dur: 140, delay: 120 },
    { freq: 659.25, dur: 160, delay: 240 },
    { freq: 783.99, dur: 260, delay: 380 },
    { freq: 783.99, dur: 120, delay: 680 },
    { freq: 880.00, dur: 120, delay: 800 },
    { freq: 987.77, dur: 160, delay: 920 },
    { freq: 1046.5, dur: 600, delay: 1060 }
  ];

  fanfare.forEach(n => {
    playTone(n.freq, 'sawtooth', n.dur, n.delay, 0.2);
    playTone(n.freq, 'sine', n.dur, n.delay, 0.25);
  });
}

// 7. Web Speech API - Movie Trailer Narrator Voice
export function speakNarrator(text) {
  if (!soundEnabled || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel(); // Stop prior speech
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Try to pick a deep English voice
  const voices = window.speechSynthesis.getVoices();
  const deepVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('David') || v.name.includes('Guy') || v.name.includes('Natural') || v.name.includes('Male')));
  if (deepVoice) {
    utterance.voice = deepVoice;
  }
  
  utterance.pitch = 0.85; // Lower pitch for dramatic movie trailer tone
  utterance.rate = 0.92;  // Slightly measured pace
  window.speechSynthesis.speak(utterance);
}
