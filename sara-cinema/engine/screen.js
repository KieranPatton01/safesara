// engine/screen.js - ANSI 24-bit TrueColor Cinematic Rendering Engine

export const COLORS = {
  reset: '\x1b[0m',
  bold: (text = '') => `\x1b[1m${text}\x1b[22m`,
  dim: (text = '') => `\x1b[2m${text}\x1b[22m`,
  italic: (text = '') => `\x1b[3m${text}\x1b[23m`,
  underline: (text = '') => `\x1b[4m${text}\x1b[24m`,

  // TrueColor Palettes (RGB)
  saffron: (text) => `\x1b[38;2;255;193;7m${text}\x1b[0m`,
  crimson: (text) => `\x1b[38;2;220;38;38m${text}\x1b[0m`,
  sangria: (text) => `\x1b[38;2;136;19;55m${text}\x1b[0m`,
  amber: (text) => `\x1b[38;2;245;158;11m${text}\x1b[0m`,
  gold: (text) => `\x1b[38;2;250;204;21m${text}\x1b[0m`,
  rose: (text) => `\x1b[38;2;244;114;182m${text}\x1b[0m`,
  hotPink: (text) => `\x1b[38;2;236;72;153m${text}\x1b[0m`,
  mediterranean: (text) => `\x1b[38;2;6;182;212m${text}\x1b[0m`,
  deepSea: (text) => `\x1b[38;2;14;116;144m${text}\x1b[0m`,
  olive: (text) => `\x1b[38;2;101;163;13m${text}\x1b[0m`,
  white: (text) => `\x1b[38;2;255;255;255m${text}\x1b[0m`,
  gray: (text) => `\x1b[38;2;156;163;175m${text}\x1b[0m`,
  darkGray: (text) => `\x1b[38;2;75;85;99m${text}\x1b[0m`,
  sunsetPurple: (text) => `\x1b[38;2;147;51;234m${text}\x1b[0m`,
  nightSky: (text) => `\x1b[38;2;30;41;59m${text}\x1b[0m`,

  // RGB custom
  rgb: (r, g, b, text) => `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`,
  bgRgb: (r, g, b, text) => `\x1b[48;2;${r};${g};${b}m${text}\x1b[0m`
};

export const SCREEN_WIDTH = 88;

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function hideCursor() {
  process.stdout.write('\x1b[?25l');
}

export function showCursor() {
  process.stdout.write('\x1b[?25h');
}

export function clear() {
  process.stdout.write('\x1b[2J\x1b[H');
}

export function center(text, width = SCREEN_WIDTH) {
  const visualLength = text.replace(/\x1b\[[0-9;]*m/g, '').length;
  const leftPad = Math.max(0, Math.floor((width - visualLength) / 2));
  return ' '.repeat(leftPad) + text;
}

export function drawFilmStrip(width = SCREEN_WIDTH) {
  const cell = '■ ■  ';
  const repeatCount = Math.floor(width / cell.length);
  const bar = cell.repeat(repeatCount);
  return COLORS.darkGray(`[${bar.slice(0, width - 2)}]`);
}

export function renderLetterboxScreen(contentLines, options = {}) {
  const {
    subtitle = '',
    locationTag = '',
    heartMeter = null,
    speaker = ''
  } = options;

  let buffer = '\x1b[H';

  buffer += drawFilmStrip() + '\n';
  if (locationTag) {
    buffer += center(COLORS.amber(`📍 [ SCENE: ${locationTag} ]`)) + '\n';
  } else {
    buffer += '\n';
  }

  for (const line of contentLines) {
    buffer += center(line) + '\n';
  }

  buffer += '\n';

  if (speaker || subtitle) {
    const boxWidth = Math.min(SCREEN_WIDTH - 4, 80);
    const borderTop = COLORS.saffron('┌' + '─'.repeat(boxWidth - 2) + '┐');
    const borderBot = COLORS.saffron('└' + '─'.repeat(boxWidth - 2) + '┘');
    
    buffer += center(borderTop) + '\n';
    if (speaker) {
      const rawSpk = ` ★ ${speaker.toUpperCase()}: `;
      const spkPad = Math.max(0, boxWidth - 4 - rawSpk.length);
      buffer += center(COLORS.saffron('│') + ' ' + COLORS.gold(rawSpk) + ' '.repeat(spkPad) + ' ' + COLORS.saffron('│')) + '\n';
    }
    
    const rawSub = subtitle;
    const maxSubLen = boxWidth - 6;
    const subWords = rawSub.split(' ');
    let currentLine = '';
    const subLines = [];

    for (const word of subWords) {
      if ((currentLine + ' ' + word).length <= maxSubLen) {
        currentLine = currentLine ? currentLine + ' ' + word : word;
      } else {
        if (currentLine) subLines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) subLines.push(currentLine);

    for (const sLine of subLines) {
      const lineLen = sLine.length;
      const rightPad = Math.max(0, boxWidth - 4 - lineLen);
      buffer += center(COLORS.saffron('│') + '  ' + COLORS.white(sLine) + ' '.repeat(rightPad) + COLORS.saffron('│')) + '\n';
    }

    buffer += center(borderBot) + '\n';
  }

  if (heartMeter !== null) {
    const fullHearts = Math.min(10, Math.floor(heartMeter / 10));
    const emptyHearts = 10 - fullHearts;
    const meterStr = '♥ '.repeat(fullHearts) + '♡ '.repeat(emptyHearts);
    const barText = COLORS.rose(`SARA ROMANCE METER: [ ${meterStr} ] ${heartMeter}%`);
    buffer += center(barText) + '\n';
  } else {
    buffer += '\n';
  }

  buffer += drawFilmStrip() + '\n';

  process.stdout.write(buffer);
}

export async function typewriter(text, speedMs = 25, colorFn = (s) => s) {
  for (let i = 0; i < text.length; i++) {
    process.stdout.write(colorFn(text[i]));
    await sleep(speedMs);
  }
}

export async function shakeScreen(intensity = 3, count = 4) {
  for (let i = 0; i < count; i++) {
    const offset = (i % 2 === 0 ? ' ' : '').repeat(intensity);
    process.stdout.write(`\x1b[H\n\n${offset}`);
    await sleep(40);
  }
  process.stdout.write('\x1b[H');
}
