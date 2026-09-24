// engine/keepsake.js - Generates digital keepsakes for Sara upon completing the movie
import fs from 'fs';
import path from 'path';
import { CONFIG } from '../config.js';

export function generateKeepsakes() {
  const rootDir = process.cwd();

  // 1. Text Version
  const textContent = `
================================================================================
           ★ ★ ★ FIRST-CLASS VIP SPANISH TAPAS BOARDING PASS ★ ★ ★
================================================================================

  PASSENGER:       ${CONFIG.herName.toUpperCase()} (The Love of My Life)
  FLIGHT CODE:     ${CONFIG.dateProposal.flightCode}
  SEAT:            ${CONFIG.dateProposal.seat}
  DESTINATION:     ${CONFIG.dateProposal.destination}
  STATUS:          100% CONFIRMED DATE! SHE SAID YES! 💖

--------------------------------------------------------------------------------
                         THE EXCLUSIVE SPANISH MENU
--------------------------------------------------------------------------------
${CONFIG.dateProposal.menuHighlights.map(item => `  • ${item}`).join('\n')}

--------------------------------------------------------------------------------
  "Sara, you are the socarrat of my life - the sweetest, most special part."
  Created with endless love, laughter & code by ${CONFIG.yourName}.
================================================================================
`;

  fs.writeFileSync(path.join(rootDir, 'SARA_VIP_DATE_TICKET.txt'), textContent.trim(), 'utf8');

  // 2. Interactive Glowing Web HTML Keepsake
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>★ VIP Spanish Tapas Boarding Pass - For Sara ★</title>
  <style>
    body {
      margin: 0;
      padding: 40px 20px;
      background: radial-gradient(circle at center, #1e1b4b 0%, #09090b 100%);
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
    }
    .ticket-card {
      background: linear-gradient(135deg, rgba(30, 27, 75, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
      border: 3px solid #f59e0b;
      box-shadow: 0 0 50px rgba(245, 158, 11, 0.4), 0 20px 40px rgba(0,0,0,0.8);
      border-radius: 24px;
      max-width: 680px;
      width: 100%;
      padding: 40px;
      position: relative;
      backdrop-filter: blur(10px);
    }
    .header-badge {
      display: inline-block;
      background: linear-gradient(90deg, #dc2626, #f59e0b);
      color: #fff;
      font-weight: 800;
      letter-spacing: 2px;
      padding: 8px 18px;
      border-radius: 9999px;
      font-size: 13px;
      text-transform: uppercase;
      box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
    }
    h1 {
      color: #fef08a;
      margin: 20px 0 10px 0;
      font-size: 32px;
      text-shadow: 0 0 20px rgba(254, 240, 138, 0.5);
    }
    .passenger-row {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px dashed #475569;
      padding: 20px 0;
      margin-bottom: 25px;
    }
    .field-label {
      font-size: 12px;
      text-transform: uppercase;
      color: #94a3b8;
      letter-spacing: 1px;
    }
    .field-val {
      font-size: 20px;
      font-weight: 700;
      color: #fb7185;
      margin-top: 4px;
    }
    .menu-box {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 20px 24px;
      margin: 20px 0;
    }
    .menu-title {
      color: #fbbf24;
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 16px;
    }
    ul {
      margin: 0;
      padding-left: 20px;
      color: #e2e8f0;
      line-height: 1.8;
    }
    .stamp {
      display: inline-block;
      border: 3px solid #22c55e;
      color: #4ade80;
      font-weight: 900;
      padding: 10px 24px;
      border-radius: 12px;
      text-transform: uppercase;
      transform: rotate(-4deg);
      font-size: 18px;
      letter-spacing: 2px;
      margin-top: 15px;
      box-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
    }
    .footer-quote {
      text-align: center;
      margin-top: 30px;
      color: #fda4af;
      font-style: italic;
      font-size: 16px;
    }
    .hearts {
      position: absolute;
      top: 15px;
      right: 25px;
      font-size: 28px;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
  </style>
</head>
<body>
  <div class="ticket-card">
    <div class="hearts">💖 🥘 ✨</div>
    <div class="header-badge">Official Boarding Pass</div>
    <h1>Misión Im-Paella-ble: Tapas for Sara</h1>
    <p style="color: #cbd5e1; font-size: 15px; margin: 0 0 20px 0;">This pass guarantees a 5-star Spanish culinary adventure filled with laughter, love, and food.</p>

    <div class="passenger-row">
      <div>
        <div class="field-label">Passenger</div>
        <div class="field-val">${CONFIG.herName}</div>
      </div>
      <div>
        <div class="field-label">Seat Class</div>
        <div class="field-val" style="color: #facc15;">1A (VIP Corazón)</div>
      </div>
      <div>
        <div class="field-label">Flight</div>
        <div class="field-val" style="color: #38bdf8;">${CONFIG.dateProposal.flightCode}</div>
      </div>
    </div>

    <div class="menu-box">
      <div class="menu-title">🥘 Guaranteed Culinary Highlights:</div>
      <ul>
        ${CONFIG.dateProposal.menuHighlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div style="text-align: center;">
      <div class="stamp">✓ DATE CONFIRMED: 100% SÍ!</div>
    </div>

    <div class="footer-quote">
      "Sara, you are the socarrat of my life - the absolute best part."<br>
      <span style="font-size: 13px; color: #94a3b8; font-style: normal;">Crafted with love by ${CONFIG.yourName}</span>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(rootDir, 'SARA_VIP_DATE_INVITATION.html'), htmlContent.trim(), 'utf8');
}
