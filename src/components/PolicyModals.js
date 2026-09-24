/**
 * src/components/PolicyModals.js - Simple Serious Privacy Policy & Deadpan Content Removal Dialog
 */

export function setupPolicyModals(config) {
  // 1. Inject Privacy Policy Modal if not already present
  if (!document.getElementById('privacy-policy-modal')) {
    const privacyModalHtml = `
      <div id="privacy-policy-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
        <div class="wiki-modal-box">
          <div class="wiki-modal-header">
            <h3 id="privacy-policy-title">Privacy Policy — SaraWiki</h3>
            <button class="wiki-modal-close-btn" id="privacy-policy-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body" style="line-height: 1.6; color: #202122;">
            <p style="margin-top: 0;">
              <strong>Effective Date:</strong> 1 January 2026<br />
              <strong>Scope:</strong> Public web access to SaraWiki (the free encyclopedia of Sara-related knowledge).
            </p>

            <h4 style="margin: 1rem 0 0.4rem; font-size: 0.95rem; border-bottom: 1px solid var(--wiki-border-light); padding-bottom: 0.2rem;">1. Data Collection and Processing</h4>
            <p>
              SaraWiki does not collect, record, process, store, sell, or monetize any personal data, user credentials, or telemetry. No registration, user accounts, or tracking profiles exist on this system.
            </p>

            <h4 style="margin: 1rem 0 0.4rem; font-size: 0.95rem; border-bottom: 1px solid var(--wiki-border-light); padding-bottom: 0.2rem;">2. Cookies and Tracking Technologies</h4>
            <p>
              This website uses <strong>0 non-essential tracking cookies</strong>, 0 advertising beacons, and 0 third-party analytics pixels. All local interface operations—including wikitext search, easter eggs, language switching, and section navigation—are executed strictly client-side in your local browser memory.
            </p>

            <h4 style="margin: 1rem 0 0.4rem; font-size: 0.95rem; border-bottom: 1px solid var(--wiki-border-light); padding-bottom: 0.2rem;">3. Server Logs</h4>
            <p>
              Standard, anonymous HTTP web request logs (such as IP address, user-agent, and request timestamp) are maintained by the static hosting infrastructure solely for security auditing, DDoS mitigation, and legitimate routing purposes.
            </p>

            <h4 style="margin: 1rem 0 0.4rem; font-size: 0.95rem; border-bottom: 1px solid var(--wiki-border-light); padding-bottom: 0.2rem;">4. Subject Rights and Inquiries</h4>
            <p>
              Because this website retains no personal visitor databases, there is no personal data record to inspect, modify, or erase. For inquiries regarding article content, refer to the researcher liaison team.
            </p>
          </div>
          <div class="wiki-modal-footer">
            <button id="privacy-policy-close-btn" class="wiki-btn wiki-btn-primary">Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', privacyModalHtml);
  }

  // 2. Inject Content Removal Request Modal if not already present
  if (!document.getElementById('content-removal-modal')) {
    const removalModalHtml = `
      <div id="content-removal-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="content-removal-title">
        <div class="wiki-modal-box">
          <div class="wiki-modal-header" style="background-color: #fdf2f2; border-bottom: 1px solid #fecaca;">
            <h3 id="content-removal-title" style="color: #991b1b;">Formal Content Removal Request</h3>
            <button class="wiki-modal-close-btn" id="content-removal-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body" style="line-height: 1.6; color: #202122;">
            <div style="background-color: #fef2f2; border: 1px solid #f87171; border-radius: 4px; padding: 0.85rem; margin-bottom: 1rem;">
              <strong style="color: #991b1b; display: block; font-size: 0.95rem; margin-bottom: 0.35rem;">Official Notice from the Editorial Board:</strong>
              <p style="margin: 0; font-size: 1.15rem; font-family: var(--wiki-font-serif); font-weight: bold; color: #7f1d1d;">
                go fuck yourself
              </p>
            </div>
            <p style="color: #4b5563; font-size: 0.95rem; margin: 0; font-weight: 500;">
              loser
            </p>
          </div>
          <div class="wiki-modal-footer">
            <button id="content-removal-close-btn" class="wiki-btn wiki-btn-secondary">Understood</button>
            <button id="content-removal-reject-btn" class="wiki-btn wiki-btn-danger">Acknowledge Rejection</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', removalModalHtml);
  }

  // --- Handlers for Privacy Policy Modal ---
  const privacyModal = document.getElementById('privacy-policy-modal');
  const privacyCloseX = document.getElementById('privacy-policy-close-x');
  const privacyCloseBtn = document.getElementById('privacy-policy-close-btn');

  function openPrivacyModal() {
    if (privacyModal) privacyModal.classList.add('open');
  }

  function closePrivacyModal() {
    if (privacyModal) privacyModal.classList.remove('open');
  }

  if (privacyCloseX) privacyCloseX.onclick = closePrivacyModal;
  if (privacyCloseBtn) privacyCloseBtn.onclick = closePrivacyModal;
  if (privacyModal) {
    privacyModal.onclick = (e) => {
      if (e.target === privacyModal) closePrivacyModal();
    };
  }

  // --- Handlers for Content Removal Modal ---
  const removalModal = document.getElementById('content-removal-modal');
  const removalCloseX = document.getElementById('content-removal-close-x');
  const removalCloseBtn = document.getElementById('content-removal-close-btn');
  const removalRejectBtn = document.getElementById('content-removal-reject-btn');

  function openRemovalModal() {
    if (removalModal) removalModal.classList.add('open');
  }

  function closeRemovalModal() {
    if (removalModal) removalModal.classList.remove('open');
  }

  if (removalCloseX) removalCloseX.onclick = closeRemovalModal;
  if (removalCloseBtn) removalCloseBtn.onclick = closeRemovalModal;
  if (removalRejectBtn) removalRejectBtn.onclick = closeRemovalModal;
  if (removalModal) {
    removalModal.onclick = (e) => {
      if (e.target === removalModal) closeRemovalModal();
    };
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePrivacyModal();
      closeRemovalModal();
    }
  });

  // Attach triggers to footer and sidebar links
  const footerPrivacyLink = document.getElementById('footer-privacy-link');
  if (footerPrivacyLink) {
    footerPrivacyLink.onclick = (e) => {
      e.preventDefault();
      openPrivacyModal();
    };
  }

  const footerRemovalLink = document.getElementById('footer-removal-link');
  if (footerRemovalLink) {
    footerRemovalLink.onclick = (e) => {
      e.preventDefault();
      openRemovalModal();
    };
  }

  const sidebarRemovalLink = document.getElementById('sidebar-removal-link');
  if (sidebarRemovalLink) {
    sidebarRemovalLink.onclick = (e) => {
      e.preventDefault();
      openRemovalModal();
    };
  }

  // Support #privacy or #removal in url hash if triggered
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#privacy') {
      openPrivacyModal();
    } else if (window.location.hash === '#removal') {
      openRemovalModal();
    }
  });

  if (window.location.hash === '#privacy') openPrivacyModal();
  if (window.location.hash === '#removal') openRemovalModal();
}
