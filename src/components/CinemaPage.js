/**
 * src/components/CinemaPage.js - Sara Cinema Live Portal & Instant Redirect
 */
export function renderCinemaPage(config) {
  const c = config.cinema;
  const targetUrl = c.url || 'https://sararodriguez.co.uk/cinema/index.html';

  return `
    <div class="cinema-page-view" id="cinema-page-container">
      <div class="cinema-banner-card">
        <div class="cinema-badge" style="background: #15803d; color: #ffffff;">LIVE & STREAMING ONLINE</div>
        <h1 class="cinema-title">${c.title}</h1>
        <p style="color: #cbd5e1; font-size: 1.1rem; margin-top: 0.25rem;">
          <em>${c.tagline}</em>
        </p>

        <div style="margin: 1.5rem 0; border-top: 1px solid #334155; padding-top: 1.25rem;">
          <p style="color: #f1f5f9; line-height: 1.6; font-size: 1.05rem;">
            Sara Cinema is currently live and hosted at <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: underline; font-weight: 500;">sararodriguez.co.uk/cinema</a> (source repository in <code>sarasuprise</code>).
            Experience the interactive cinematic journey across Madrid, San Sebastián, Seville, Valencia, and Barcelona, featuring live animated scenes, soundtrack, dialogue choices, and date reservation protocols.
          </p>
        </div>

        <div class="cinema-terminal-box">
          <div style="color: #facc15; margin-bottom: 0.5rem;">$ curl -I ${targetUrl}</div>
          <div style="color: #4ade80;">HTTP/2 200 OK — Production Server Connected</div>
          <div>[HOLLYWOOD DE VALENCIA] Corazón Studios presents...</div>
          <div>[STATUS: 100% LIVE ON THE WEB]</div>
          <div style="color: #fb7185; margin-top: 0.5rem;">Redirecting to the live cinematic experience...</div>
        </div>

        <div style="margin-top: 1.75rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
          <a href="${targetUrl}" class="wiki-btn" style="background: #e11d48; color: #ffffff; padding: 0.85rem 1.8rem; border-radius: 4px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.05rem; box-shadow: 0 4px 14px rgba(225, 29, 72, 0.45);">
            Launch Sara Cinema (Live Online)
          </a>
          <a href="#top" class="wiki-btn wiki-btn-secondary" style="background: #ffffff; color: #000; text-decoration: none; padding: 0.85rem 1.25rem; border-radius: 4px; font-weight: 500; display: inline-flex; align-items: center; gap: 0.4rem;">
            ← Return to SaraWiki
          </a>
        </div>

        <div style="margin-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
          If you are not automatically redirected within a moment, please click the red button above.
        </div>
      </div>
    </div>
  `;
}
