/**
 * src/components/DossierModal.js - Top Secret Classified Dossier Easter Egg
 */
export function setupDossierModal(config) {
  const dossier = config.easterEggs.classifiedDossier;

  if (!document.getElementById('classified-dossier-modal')) {
    const redactionsHtml = dossier.redactions.map((r, i) => `
      <div style="margin-bottom: 0.85rem;">
        <strong style="color: #991b1b; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.15rem;">
          ${r.label}:
        </strong>
        <span class="dossier-redacted" data-index="${i}" title="Click to declassify">
          ${r.text}
        </span>
      </div>
    `).join('');

    const modalHtml = `
      <div id="classified-dossier-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true">
        <div class="wiki-modal-box" style="max-width: 620px; background-color: #fafaf9;">
          <div class="wiki-modal-header" style="background-color: #f5f5f4; border-bottom: 2px solid #dc2626;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#991b1b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <h3 style="color: #991b1b; font-family: var(--wiki-font-mono); font-size: 0.95rem; margin: 0;">
                ${dossier.title}
              </h3>
            </div>
            <button class="wiki-modal-close-btn" id="dossier-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body">
            <div style="text-align: center;">
              <div class="dossier-stamp">TOP SECRET // LEVEL 5</div>
            </div>
            <p style="font-family: var(--wiki-font-mono); font-size: 0.8rem; color: #44403c; border-bottom: 1px dashed #d6d3d1; padding-bottom: 0.75rem;">
              <strong>FILE:</strong> ${dossier.codename}<br>
              <strong>STATUS:</strong> HIGH PRIORITY ADORATION PROTOCOL ACTIVE<br>
              <em style="color: #78716c;">(Tip: Click any black redacted bar below to decrypt the intelligence report.)</em>
            </p>

            <div style="margin: 1.25rem 0;">
              ${redactionsHtml}
            </div>

            <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 4px; padding: 0.75rem; font-size: 0.8rem; color: #991b1b;">
              ★ <strong>Special Clearance Note:</strong> This dossier was authorized under Presidential Executive Order #SARA-100. Unauthorized withholding of tapas or hoodies will result in immediate domestic prosecution.
            </div>
          </div>
          <div class="wiki-modal-footer">
            <button id="dossier-declassify-all-btn" class="wiki-btn wiki-btn-secondary">Declassify All</button>
            <button id="dossier-close-btn" class="wiki-btn wiki-btn-primary">Acknowledge & Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  const modal = document.getElementById('classified-dossier-modal');

  // Interactive redactions
  modal.querySelectorAll('.dossier-redacted').forEach(span => {
    span.addEventListener('click', () => {
      span.classList.toggle('revealed');
    });
  });

  // Declassify all
  const declassifyBtn = document.getElementById('dossier-declassify-all-btn');
  if (declassifyBtn) {
    declassifyBtn.addEventListener('click', () => {
      modal.querySelectorAll('.dossier-redacted').forEach(span => span.classList.add('revealed'));
    });
  }

  // Open triggers
  const viewDossierBtn = document.getElementById('view-dossier-btn');
  if (viewDossierBtn) {
    viewDossierBtn.addEventListener('click', () => modal.classList.add('open'));
  }

  const closeModal = () => modal.classList.remove('open');
  document.getElementById('dossier-close-x').onclick = closeModal;
  document.getElementById('dossier-close-btn').onclick = closeModal;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
