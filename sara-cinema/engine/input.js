// engine/input.js - Keyboard input & interactive choice handler
import { COLORS, center, SCREEN_WIDTH } from './screen.js';
import { playSuccessChime } from './audio.js';

export function waitForKeyPress(promptMsg = 'Press [SPACE] or [ENTER] to continue...') {
  return new Promise((resolve) => {
    const formattedPrompt = center(COLORS.gold(`▶ ${promptMsg} ◀`));
    process.stdout.write(`\n${formattedPrompt}\n`);

    if (!process.stdin.isTTY) {
      setTimeout(resolve, 1500);
      return;
    }

    const wasRaw = process.stdin.isRaw;
    process.stdin.setRawMode(true);
    process.stdin.resume();

    const onData = (chunk) => {
      const str = chunk.toString();
      if (str === '\u0003') {
        process.stdout.write('\x1b[?25h\n');
        process.exit(0);
      }
      process.stdin.removeListener('data', onData);
      process.stdin.setRawMode(wasRaw);
      process.stdin.pause();
      resolve(str);
    };

    process.stdin.on('data', onData);
  });
}

export function askChoice(promptTitle, options) {
  return new Promise((resolve) => {
    const boxWidth = Math.min(SCREEN_WIDTH - 6, 78);
    let box = '\n' + center(COLORS.saffron('╔' + '═'.repeat(boxWidth - 2) + '╗')) + '\n';
    
    const titleVisual = `  ★ ${promptTitle} `;
    const titlePadding = Math.max(0, boxWidth - 2 - titleVisual.length);
    box += center(COLORS.saffron('║') + COLORS.gold(titleVisual) + ' '.repeat(titlePadding) + COLORS.saffron('║')) + '\n';
    box += center(COLORS.saffron('╠' + '═'.repeat(boxWidth - 2) + '╣')) + '\n';

    for (const opt of options) {
      const optText = `   [ ${opt.key} ]  ${opt.label}`;
      const optPadding = Math.max(0, boxWidth - 2 - optText.length);
      box += center(COLORS.saffron('║') + COLORS.white(optText) + ' '.repeat(optPadding) + COLORS.saffron('║')) + '\n';
    }

    box += center(COLORS.saffron('╚' + '═'.repeat(boxWidth - 2) + '╝')) + '\n';
    process.stdout.write(box);

    if (!process.stdin.isTTY) {
      resolve(options[0].key);
      return;
    }

    const wasRaw = process.stdin.isRaw;
    process.stdin.setRawMode(true);
    process.stdin.resume();

    const onData = (chunk) => {
      const keyStr = chunk.toString().trim();
      if (keyStr === '\u0003') {
        process.stdout.write('\x1b[?25h\n');
        process.exit(0);
      }

      if (keyStr.toUpperCase() === 'S' || keyStr.toUpperCase() === 'T') {
        playSuccessChime();
        const secretMsg = center(COLORS.bold(COLORS.rose('   ★ SECRET UNLOCKED: Unlimited Extra Chocolate Churros Granted to Sara! 🍫✨   ')));
        process.stdout.write('\n' + secretMsg + '\n');
      }

      const match = options.find((o) => o.key.toLowerCase() === keyStr.toLowerCase());
      if (match) {
        process.stdin.removeListener('data', onData);
        process.stdin.setRawMode(wasRaw);
        process.stdin.pause();
        resolve(match.key);
      }
    };

    process.stdin.on('data', onData);
  });
}
