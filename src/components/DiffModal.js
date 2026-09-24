/**
 * src/components/DiffModal.js - Side-by-Side Wikipedia Diff Viewer
 */
export function setupDiffModal(config) {
  if (!document.getElementById('diff-viewer-modal')) {
    const diffModalHtml = `
      <div id="diff-viewer-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true">
        <div class="wiki-modal-box" style="max-width: 800px;">
          <div class="wiki-modal-header">
            <h3>Differences between revisions of "Sara"</h3>
            <button class="wiki-modal-close-btn" id="diff-viewer-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body">
            <table class="diff-table">
              <thead>
                <tr style="background-color: #f8f9fa;">
                  <th style="width: 50%; text-align: left; padding: 0.5rem;">← Older revision (12:51, 9 Sep 2026)</th>
                  <th style="width: 50%; text-align: left; padding: 0.5rem;">Newer revision (13:02, 9 Sep 2026) →</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="diff-deletedline">
                    <span style="color: #dc2626; font-weight: bold; margin-right: 0.5rem;">−</span>
                    Sara is an individual of significant interest, best known for being Sara.
                  </td>
                  <td class="diff-addedline">
                    <span style="color: #16a34a; font-weight: bold; margin-right: 0.5rem;">+</span>
                    Sara is an individual of significant interest, best known for being <span class="diffchange-inline-add">extremely funny</span> and being Sara.
                  </td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-style: italic;" colspan="2">
                    (Line 42: Section 'Controversies - Unauthorized Hoodies')
                  </td>
                </tr>
                <tr>
                  <td class="diff-deletedline">
                    <span style="color: #dc2626; font-weight: bold; margin-right: 0.5rem;">−</span>
                    Status: <span class="diffchange-inline-del">6 hoodies unaccounted for</span>
                  </td>
                  <td class="diff-addedline">
                    <span style="color: #16a34a; font-weight: bold; margin-right: 0.5rem;">+</span>
                    Status: <span class="diffchange-inline-add">7 hoodies officially claimed by adverse possession</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="wiki-modal-footer">
            <button id="diff-viewer-close-btn" class="wiki-btn wiki-btn-primary">Close Diff</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', diffModalHtml);
  }

  const modal = document.getElementById('diff-viewer-modal');
  const compareBtn = document.getElementById('compare-revisions-btn');

  function renderDiffContent(oldRev, curRev) {
    const container = modal.querySelector('.wiki-modal-body');
    if (!container) return;

    if (oldRev.id === curRev.id) {
      container.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--wiki-color-secondary);">
          <p style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem;">No differences to display</p>
          <p>Both selected versions point to the exact same revision: <strong>${oldRev.id}</strong> (${oldRev.timestamp}).</p>
          <p style="font-size: 0.8rem;">Please select two different revisions in the history list to view a comparison.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <table class="diff-table">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="width: 50%; text-align: left; padding: 0.5rem;">
              ← Older revision (${oldRev.timestamp})<br>
              <span style="font-weight: normal; font-size: 0.75rem; color: var(--wiki-link-blue);">${oldRev.user}</span>
              <span style="font-weight: normal; font-size: 0.72rem; color: var(--wiki-color-subtle);">(${oldRev.diffBytes})</span>
              <div style="font-weight: normal; font-style: italic; font-size: 0.75rem; color: var(--wiki-color-secondary); margin-top: 0.2rem;">
                ${oldRev.summary}
              </div>
            </th>
            <th style="width: 50%; text-align: left; padding: 0.5rem;">
              Newer revision (${curRev.timestamp}) →<br>
              <span style="font-weight: normal; font-size: 0.75rem; color: var(--wiki-link-blue);">${curRev.user}</span>
              <span style="font-weight: normal; font-size: 0.72rem; color: var(--wiki-color-subtle);">(${curRev.diffBytes})</span>
              <div style="font-weight: normal; font-style: italic; font-size: 0.75rem; color: var(--wiki-color-secondary); margin-top: 0.2rem;">
                ${curRev.summary}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="diff-deletedline">
              <span style="color: #dc2626; font-weight: bold; margin-right: 0.5rem;">−</span>
              ${oldRev.contentSnippet}
            </td>
            <td class="diff-addedline">
              <span style="color: #16a34a; font-weight: bold; margin-right: 0.5rem;">+</span>
              ${curRev.contentSnippet}
            </td>
          </tr>
          <tr>
            <td style="color: #64748b; font-style: italic;" colspan="2">
              (Automated comparison: Revisions ${oldRev.id} vs ${curRev.id})
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }

  if (compareBtn) {
    compareBtn.onclick = () => {
      const oldRadio = document.querySelector('input[name="diff-old"]:checked');
      const curRadio = document.querySelector('input[name="diff-cur"]:checked');
      const oldRev = config.history.find(r => r.id === (oldRadio ? oldRadio.value : 'rev-5')) || config.history[1] || config.history[0];
      const curRev = config.history.find(r => r.id === (curRadio ? curRadio.value : 'rev-6')) || config.history[0];

      renderDiffContent(oldRev, curRev);
      modal.classList.add('open');
    };
  }

  // Dismiss listeners
  const closeDiff = () => modal.classList.remove('open');
  document.getElementById('diff-viewer-close-x').onclick = closeDiff;
  document.getElementById('diff-viewer-close-btn').onclick = closeDiff;

  // Backdrop click dismissal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDiff();
  });

  // Escape key dismissal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeDiff();
    }
  });
}
