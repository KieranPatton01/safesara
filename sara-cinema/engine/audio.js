// engine/audio.js - Native Windows Audio & Speech Synthesizer Engine
import { spawn } from 'child_process';
import { CONFIG } from '../config.js';

let audioAvailable = true;

function runPsCommand(psCode) {
  if (!CONFIG.settings.soundEnabled || !audioAvailable) return;
  try {
    const child = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', psCode], {
      windowsHide: true,
      stdio: 'ignore'
    });
    child.on('error', () => {
      audioAvailable = false;
    });
  } catch (err) {
    audioAvailable = false;
  }
}

export function speakAsync(text) {
  if (!CONFIG.settings.speechEnabled || !CONFIG.settings.soundEnabled || !audioAvailable) return;
  const safeText = text.replace(/'/g, "''").replace(/[\r\n]+/g, ' ');
  const ps = `Add-Type -AssemblyName System.Speech; $s = New-Object System.Speech.Synthesis.SpeechSynthesizer; $s.Rate = -1; $s.Speak('${safeText}')`;
  runPsCommand(ps);
}

export function playDramaticBwaam() {
  const ps = `
    [Console]::Beep(110, 250);
    [Console]::Beep(98, 400);
    [Console]::Beep(82, 600);
  `;
  runPsCommand(ps);
}

export function playFanfare() {
  const ps = `
    [Console]::Beep(440, 150);
    [Console]::Beep(440, 100);
    [Console]::Beep(440, 100);
    [Console]::Beep(440, 350);
    Start-Sleep -Milliseconds 80;
    [Console]::Beep(349, 250);
    [Console]::Beep(392, 250);
    [Console]::Beep(440, 450);
    [Console]::Beep(523, 200);
    [Console]::Beep(587, 600);
  `;
  runPsCommand(ps);
}

export function playFlamencoStrum() {
  const ps = `
    [Console]::Beep(330, 70);
    [Console]::Beep(392, 70);
    [Console]::Beep(494, 70);
    [Console]::Beep(523, 80);
    [Console]::Beep(659, 120);
    Start-Sleep -Milliseconds 40;
    [Console]::Beep(659, 80);
    [Console]::Beep(523, 80);
    [Console]::Beep(494, 80);
    [Console]::Beep(440, 180);
  `;
  runPsCommand(ps);
}

export function playSuccessChime() {
  const ps = `
    [Console]::Beep(523, 100);
    [Console]::Beep(659, 100);
    [Console]::Beep(784, 150);
    [Console]::Beep(1046, 300);
  `;
  runPsCommand(ps);
}

export function playHeartbeat() {
  const ps = `
    [Console]::Beep(130, 80);
    Start-Sleep -Milliseconds 100;
    [Console]::Beep(115, 120);
  `;
  runPsCommand(ps);
}

export function playVictoryCelebration() {
  const ps = `
    [Console]::Beep(523, 120);
    [Console]::Beep(587, 120);
    [Console]::Beep(659, 150);
    [Console]::Beep(784, 250);
    Start-Sleep -Milliseconds 50;
    [Console]::Beep(784, 120);
    [Console]::Beep(880, 120);
    [Console]::Beep(988, 150);
    [Console]::Beep(1046, 500);
  `;
  runPsCommand(ps);
}
