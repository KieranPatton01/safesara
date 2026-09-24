/**
 * src/components/EditModal.js - Humorous Edit Confirmation & Simulated Wikitext Editor
 */
export function setupEditModal(config) {
  // 1. Inject Edit Confirmation Modal HTML if not present
  if (!document.getElementById('edit-warning-modal')) {
    const warningModalHtml = `
      <div id="edit-warning-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="edit-warning-title">
        <div class="wiki-modal-box">
          <div class="wiki-modal-header">
            <h3 id="edit-warning-title">Article Modification Warning</h3>
            <button class="wiki-modal-close-btn" id="edit-warning-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body">
            <p style="font-size: 1.05rem; line-height: 1.5; color: #202122;">
              You are attempting to edit an article of <strong>considerable domestic and international importance</strong>.
            </p>
            <p style="color: var(--wiki-color-secondary);">
              Unverified edits regarding snack allocations, hoodie possession, or dispute win-rates will trigger immediate automated anti-vandalism algorithms.
            </p>
            <p style="font-weight: bold; margin-top: 1rem;">
              Are you absolutely certain you wish to proceed?
            </p>
          </div>
          <div class="wiki-modal-footer">
            <button id="edit-warning-cancel-btn" class="wiki-btn wiki-btn-secondary">Cancel</button>
            <button id="edit-warning-accept-btn" class="wiki-btn wiki-btn-primary">I accept the responsibility</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', warningModalHtml);
  }

  // 2. Inject Simulated Wikitext Editor Modal HTML if not present
  if (!document.getElementById('wikitext-editor-modal')) {
    const defaultWikitext = `{{Infobox person
| name = ${config.person.name}
| pronunciation = ${config.person.pronunciation}
| occupation = ${config.person.occupation}
| known_for = ${config.person.knownFor}
| status = ${config.person.status}
| threat_level = Moderate (elevates without caffeine)
| favourite_tapas = Gambas al ajillo, Jamón croquetas, Paella
}}

'''${config.person.name}''' is a person of significant interest, best known for being Sara and maintaining an uncontested 99.8% win-rate in household debates.<ref>Empirical Studies (2024)</ref>

== Early life ==
Records confirm that Sara displayed exceptional aesthetic intuition and an innate ability to acquire confectionery from an early age...

== Personality ==
Sara exhibits high emotional intelligence balanced by an acute aversion to cold weather and uninspired restaurant suggestions...

== Controversies ==
=== Allegations of unauthorized hoodie acquisition ===
Investigators report that at least seven oversized sweatshirts belonging to Kieran have migrated across sovereign borders into Sara's wardrobe...`;

    const editorModalHtml = `
      <div id="wikitext-editor-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="editor-title">
        <div class="wiki-modal-box" style="max-width: 750px;">
          <div class="wiki-modal-header">
            <h3 id="editor-title">Editing Sara (wikitext source)</h3>
            <button class="wiki-modal-close-btn" id="editor-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body">
            <div class="wiki-editor-toolbar">
              <button class="wiki-editor-btn" title="Bold"><strong>B</strong></button>
              <button class="wiki-editor-btn" title="Italic"><em>I</em></button>
              <button class="wiki-editor-btn" title="Link">Link</button>
              <button class="wiki-editor-btn" title="Citation">Cite</button>
              <button class="wiki-editor-btn" title="Advanced">Advanced</button>
            </div>
            <textarea id="wikitext-input" class="wiki-editor-textarea" spellcheck="false">${defaultWikitext}</textarea>
            
            <div style="margin-top: 1rem;">
              <label for="edit-summary-input" style="font-size: 0.75rem; font-weight: bold; color: var(--wiki-color-secondary); display: block; margin-bottom: 0.25rem;">
                Edit summary (Briefly describe your proposed changes):
              </label>
              <input 
                type="text" 
                id="edit-summary-input" 
                class="wiki-search-input" 
                placeholder="e.g. Added additional evidence regarding Sara's supreme cuteness" 
                style="height: 32px;"
              />
            </div>
          </div>
          <div class="wiki-modal-footer">
            <button id="editor-cancel-btn" class="wiki-btn wiki-btn-secondary">Cancel</button>
            <button id="editor-preview-btn" class="wiki-btn wiki-btn-secondary">Show preview</button>
            <button id="editor-save-btn" class="wiki-btn wiki-btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', editorModalHtml);
  }

  // 3. Inject Bot Rejection Modal HTML if not present
  if (!document.getElementById('edit-rejected-modal')) {
    const rejectedModalHtml = `
      <div id="edit-rejected-modal" class="wiki-modal-overlay" role="dialog" aria-modal="true">
        <div class="wiki-modal-box">
          <div class="wiki-modal-header" style="background-color: #fef2f2; border-bottom-color: #fecaca;">
            <h3 style="color: #b91c1c;">Edit Rejected by SaraBot-v4.0</h3>
            <button class="wiki-modal-close-btn" id="edit-rejected-close-x">&times;</button>
          </div>
          <div class="wiki-modal-body">
            <p style="font-weight: bold; color: #991b1b;">
              Automated anti-vandalism filter #404 (PROTECT_PERFECTION) was tripped!
            </p>
            <div style="background-color: #f8fafc; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; font-family: var(--wiki-font-mono); font-size: 0.8rem; margin: 1rem 0;">
              <strong>Trigger Rule:</strong> SARA_PERFECTION_LOCK<br>
              <strong>Reason:</strong> Subject is already deemed 100% perfect. No further revisions permitted.
            </div>
            <p style="color: var(--wiki-color-secondary); font-size: 0.8125rem;">
              Your proposed edit has been permanently archived in the Department of Compliments.
            </p>
          </div>
          <div class="wiki-modal-footer">
            <button id="edit-rejected-ok-btn" class="wiki-btn wiki-btn-primary">Understood, Sara is indeed perfect</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', rejectedModalHtml);
  }

  // Helper bindings
  const warningModal = document.getElementById('edit-warning-modal');
  const editorModal = document.getElementById('wikitext-editor-modal');
  const rejectedModal = document.getElementById('edit-rejected-modal');
  const editorTitle = document.getElementById('editor-title');
  const wikitextInput = document.getElementById('wikitext-input');

  let currentTargetSection = null;

  // Open warning modal
  function promptEdit(sectionTitle) {
    currentTargetSection = sectionTitle || null;
    if (editorTitle) {
      editorTitle.textContent = sectionTitle 
        ? `Editing Sara: ${sectionTitle} (wikitext source)` 
        : `Editing Sara (wikitext source)`;
    }
    warningModal.classList.add('open');
  }

  // Attach to all edit triggers
  document.querySelectorAll('#tab-edit, #sidebar-edit-link, .edit-section-link').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const secTitle = el.getAttribute('data-title');
      promptEdit(secTitle);
    });
  });

  // Wikitext toolbar helpers
  function insertWikitextMarkup(openTag, closeTag, defaultPlaceholder) {
    if (!wikitextInput) return;
    const start = wikitextInput.selectionStart;
    const end = wikitextInput.selectionEnd;
    const selected = wikitextInput.value.substring(start, end) || defaultPlaceholder;
    const replacement = `${openTag}${selected}${closeTag}`;
    wikitextInput.setRangeText(replacement, start, end, 'select');
    wikitextInput.focus();
  }

  const toolbarButtons = editorModal.querySelectorAll('.wiki-editor-btn');
  toolbarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('title');
      if (title === 'Bold') insertWikitextMarkup("'''", "'''", 'bold text');
      else if (title === 'Italic') insertWikitextMarkup("''", "''", 'italic text');
      else if (title === 'Link') insertWikitextMarkup("[[", "]]", 'Article link');
      else if (title === 'Citation') insertWikitextMarkup("<ref>", "</ref>", 'Citation source');
      else if (title === 'Advanced') alert("Advanced tools: Template wizard and domestic dispute syntax parser are online.");
    });
  });

  // Close helper
  function closeAllEditModals() {
    warningModal.classList.remove('open');
    editorModal.classList.remove('open');
    rejectedModal.classList.remove('open');
  }

  // Warning modal buttons
  document.getElementById('edit-warning-close-x').onclick = () => warningModal.classList.remove('open');
  document.getElementById('edit-warning-cancel-btn').onclick = () => warningModal.classList.remove('open');
  document.getElementById('edit-warning-accept-btn').onclick = () => {
    warningModal.classList.remove('open');
    editorModal.classList.add('open');
  };

  // Editor modal buttons
  document.getElementById('editor-close-x').onclick = () => editorModal.classList.remove('open');
  document.getElementById('editor-cancel-btn').onclick = () => editorModal.classList.remove('open');
  document.getElementById('editor-preview-btn').onclick = () => {
    alert("Preview rendering: Content matches established facts: Sara remains exceptional.");
  };
  document.getElementById('editor-save-btn').onclick = () => {
    editorModal.classList.remove('open');
    rejectedModal.classList.add('open');
  };

  // Rejection modal buttons
  document.getElementById('edit-rejected-close-x').onclick = () => rejectedModal.classList.remove('open');
  document.getElementById('edit-rejected-ok-btn').onclick = () => rejectedModal.classList.remove('open');

  // Backdrop click dismissals
  [warningModal, editorModal, rejectedModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  // Escape key dismissal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllEditModals();
    }
  });
}
