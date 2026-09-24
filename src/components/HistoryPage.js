/**
 * src/components/HistoryPage.js - Revision History & Diffs
 */
export function renderHistoryPage(config) {
  const revisionsHtml = config.history.map((rev, index) => {
    const isPos = rev.diffBytes.startsWith('+');
    const byteClass = isPos ? 'history-bytes-pos' : 'history-bytes-neg';

    return `
      <li class="history-item">
        <input 
          type="radio" 
          name="diff-old" 
          value="${rev.id}" 
          ${index === 1 ? 'checked' : ''} 
          title="Select older version" 
        />
        <input 
          type="radio" 
          name="diff-cur" 
          value="${rev.id}" 
          ${index === 0 ? 'checked' : ''} 
          title="Select newer version" 
        />
        <span style="font-family: var(--wiki-font-mono); color: var(--wiki-link-blue);">${rev.timestamp}</span>
        <span>•</span>
        <span style="font-weight: 600; color: var(--wiki-link-blue);">${rev.user}</span>
        <span>•</span>
        <span class="${byteClass}">(${rev.diffBytes})</span>
        <span class="history-comment">(${rev.summary})</span>
      </li>
    `;
  }).join('');

  return `
    <div class="history-page-view" id="history-page-container">
      <h2 style="font-family: var(--wiki-font-serif); border-bottom: 1px solid var(--wiki-border-base); padding-bottom: 0.25rem;">
        Revision history of "Sara"
      </h2>

      <p class="history-instructions">
        Select two revisions and click the button below to compare differences.
      </p>

      <button id="compare-revisions-btn" class="history-compare-btn">
        Compare selected revisions
      </button>

      <ul class="history-list">
        ${revisionsHtml}
      </ul>
    </div>
  `;
}
