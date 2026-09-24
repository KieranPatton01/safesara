/**
 * src/components/ArticleContent.js - Main Encyclopedic Article Body
 */
import { renderInfobox } from './Infobox.js';

function renderReviewBox(box) {
  if (!box) return '';
  const isPositive = box.type === 'positive' || (box.rating && (box.rating.startsWith('5') || box.rating.includes('5/5') || box.rating.includes('5.0')));
  const starsClass = isPositive ? 'wiki-review-stars-positive' : 'wiki-review-stars';
  const containerClass = isPositive ? 'wiki-review-container wiki-review-positive' : 'wiki-review-container';
  const defaultStars = isPositive ? '★★★★★' : '★☆☆☆☆';
  const defaultRating = isPositive ? '5.0 / 5.0 (Verified 5-Star Review)' : '1.0 / 5.0 (Verified Negative Review)';

  let langToggleHtml = '';
  if (box.textEs) {
    langToggleHtml = `
      <div class="wiki-review-lang-toggle">
        <button type="button" class="wiki-review-tab active" data-lang="en">English Translation</button>
        <button type="button" class="wiki-review-tab" data-lang="es">Texto Original (Español)</button>
      </div>
    `;
  }

  let textHtml = '';
  if (box.textEs) {
    textHtml = `
      <div class="wiki-review-text wiki-review-en">
        <p><em>"${box.textEn || box.text}"</em></p>
      </div>
      <div class="wiki-review-text wiki-review-es" style="display: none;">
        <p><em>"${box.textEs}"</em></p>
      </div>
    `;
  } else {
    textHtml = `
      <div class="wiki-review-text">
        <p><em>"${box.text}"</em></p>
      </div>
    `;
  }

  let scoresHtml = '';
  if (box.scores && box.scores.length > 0) {
    scoresHtml = `
      <div class="wiki-review-scores" style="margin-top: 0.5rem; font-size: 0.8rem; color: #54595d;">
        ${box.scores.map(s => `<span class="wiki-review-pill"><strong>${s.label}:</strong> ${s.value}</span>`).join(' ')}
      </div>
    `;
  }

  let responseHtml = '';
  if (box.response) {
    responseHtml = `
      <div class="wiki-review-owner-response">
        <strong>${box.response.author}:</strong>
        <p style="margin: 0.25rem 0 0 0; font-style: italic;">"${box.response.text}"</p>
      </div>
    `;
  }

  return `
    <div class="${containerClass}">
      <div class="wiki-review-header">
        <div class="${starsClass}">${box.stars || defaultStars} <span class="wiki-review-rating">${box.rating || defaultRating}</span></div>
        <div class="wiki-review-title"><strong>${box.title}</strong></div>
        <div class="wiki-review-meta">${box.meta}</div>
        ${scoresHtml}
      </div>
      ${langToggleHtml}
      ${textHtml}
      ${responseHtml}
    </div>
  `;
}

function renderTable(table) {
  if (!table) return '';
  const captionHtml = table.caption ? `<caption><strong>${table.caption}</strong></caption>` : '';
  const headersHtml = table.headers ? `<thead><tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>` : '';
  const rowsHtml = table.rows ? `<tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>` : '';

  return `
    <div style="overflow-x: auto; margin: 1.25rem 0;">
      <table class="wikitable" style="width: 100%;">
        ${captionHtml}
        ${headersHtml}
        ${rowsHtml}
      </table>
    </div>
  `;
}

function renderCodeSnippets(snippets) {
  if (!snippets || snippets.length === 0) return '';
  return snippets.map(cs => `
    <div class="wiki-code-container" style="margin: 1.25rem 0;">
      <div style="font-size: 0.75rem; font-weight: bold; color: var(--wiki-color-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.25rem;">
        ${cs.title}
      </div>
      <pre class="wiki-code-block"><code>${cs.code}</code></pre>
      ${cs.caption ? `<div style="font-size: 0.75rem; color: #72777d; font-style: italic; margin-top: 0.25rem;">${cs.caption}</div>` : ''}
    </div>
  `).join('');
}

function renderPoem(poem) {
  if (!poem) return '';
  const titleHtml = poem.title ? `<div style="font-size: 0.8125rem; font-weight: bold; color: #202122; margin-bottom: 0.75rem; font-style: normal;">${poem.title}</div>` : '';
  const stanzasHtml = (poem.stanzas || []).map(st => `
    <div class="wiki-poem-stanza">
      ${st.map(line => `${line}<br>`).join('')}
    </div>
  `).join('');
  const authorHtml = poem.author ? `<div class="wiki-poem-author">— ${poem.author}${poem.citation ? `, <em>${poem.citation}</em>` : ''}</div>` : '';

  return `
    <blockquote class="wiki-poem">
      ${titleHtml}
      ${stanzasHtml}
      ${authorHtml}
    </blockquote>
  `;
}

export function renderArticleContent(config) {
  const p = config.person;
  const art = config.article;

  const leadHtml = art.lead.map(paragraph => `<p>${paragraph}</p>`).join('');

  const sectionsHtml = art.sections.map(sec => {
    let paragraphsHtml = '';
    if (sec.paragraphs && sec.paragraphs.length > 0) {
      paragraphsHtml = sec.paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    let secReviewBoxHtml = '';
    if (sec.reviewBox) {
      secReviewBoxHtml = renderReviewBox(sec.reviewBox);
    }

    let quoteHtml = '';
    if (sec.quote) {
      quoteHtml = `
        <blockquote class="wiki-quote">
          "${sec.quote.text}"
          <cite>— ${sec.quote.author}, <em>${sec.quote.citation}</em></cite>
        </blockquote>
      `;
    }

    let figureHtml = '';
    if (sec.figure) {
      figureHtml = `
        <div class="thumb tright">
          <div class="thumbinner">
            <img src="${sec.figure.src}" alt="${sec.figure.alt}" width="300" />
            <div class="thumbcaption">${sec.figure.caption}</div>
          </div>
        </div>
      `;
    }

    let listHtml = '';
    if (sec.list && sec.list.length > 0) {
      listHtml = `
        <ul style="padding-left: 1.5rem; margin: 0.5rem 0;">
          ${sec.list.map(item => `<li style="margin-bottom: 0.35rem;">${item}</li>`).join('')}
        </ul>
      `;
    }

    let tableHtml = renderTable(sec.table);
    let codeSnippetsHtml = renderCodeSnippets(sec.codeSnippets);

    let subsectionsHtml = '';
    if (sec.subsections && sec.subsections.length > 0) {
      subsectionsHtml = sec.subsections.map(sub => {
        let subFigureHtml = '';
        if (sub.figure) {
          subFigureHtml = `
            <div class="thumb tright">
              <div class="thumbinner" style="max-width: 320px;">
                <img src="${sub.figure.src}" alt="${sub.figure.alt}" style="width: 100%; height: auto; display: block; border-radius: 1px;" />
                <div class="thumbcaption">${sub.figure.caption}</div>
              </div>
            </div>
          `;
        }

        let subReviewBoxHtml = '';
        if (sub.reviewBox) {
          subReviewBoxHtml = renderReviewBox(sub.reviewBox);
        }

        let subTableHtml = renderTable(sub.table);
        let subCodeSnippetsHtml = renderCodeSnippets(sub.codeSnippets);
        let subPoemHtml = renderPoem(sub.poem);

        let subParagraphsAfterHtml = sub.paragraphsAfter && sub.paragraphsAfter.length > 0 
          ? sub.paragraphsAfter.map(sp => `<p>${sp}</p>`).join('') 
          : '';

        return `
          <section id="${sub.id}">
            <h3>
              <span class="mw-headline">${sub.number} ${sub.title}</span>
              <span class="mw-editsection">[<a href="#" class="edit-section-link" data-title="${sub.title}">edit</a>]</span>
            </h3>
            ${subFigureHtml}
            ${sub.paragraphs ? sub.paragraphs.map(sp => `<p>${sp}</p>`).join('') : ''}
            ${subPoemHtml}
            ${subParagraphsAfterHtml}
            ${subTableHtml}
            ${subCodeSnippetsHtml}
            ${subReviewBoxHtml}
          </section>
        `;
      }).join('');
    }

    let poemHtml = renderPoem(sec.poem);
    let paragraphsAfterHtml = sec.paragraphsAfter && sec.paragraphsAfter.length > 0 
      ? sec.paragraphsAfter.map(p => `<p>${p}</p>`).join('') 
      : '';

    return `
      <section id="${sec.id}">
        <h2>
          <span class="mw-headline">${sec.number} ${sec.title}</span>
          <span class="mw-editsection">[<a href="#" class="edit-section-link" data-title="${sec.title}">edit</a>]</span>
        </h2>
        ${figureHtml}
        ${paragraphsHtml}
        ${poemHtml}
        ${paragraphsAfterHtml}
        ${tableHtml}
        ${codeSnippetsHtml}
        ${secReviewBoxHtml}
        ${quoteHtml}
        ${listHtml}
        ${subsectionsHtml}
      </section>
    `;
  }).join('');

  const catlinksHtml = `
    <div id="catlinks" class="catlinks" data-mw="interface">
      <div id="mw-normal-catlinks" class="mw-normal-catlinks">
        <a href="#categories" title="Special:Categories">Categories</a>:
        ${config.categories.map(cat => `<a href="#" class="wiki-cat-link">${cat}</a>`).join(' | ')}
      </div>
    </div>
  `;

  return `
    <article class="wiki-article-content" role="main">
      <!-- Maintenance Banner (Ambox) -->
      <div class="wiki-ambox" role="note" aria-label="Maintenance notice">
        <div class="wiki-ambox-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f28500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
        </div>
        <div class="wiki-ambox-text">
          <strong>${config.maintenanceBanner.title}</strong>
          <p>${config.maintenanceBanner.description}</p>
        </div>
      </div>

      <!-- Right-side Infobox -->
      ${renderInfobox(config)}

      <!-- Lead Section -->
      <div class="wiki-lead-section">
        ${leadHtml}
      </div>

      <!-- Dynamic Sections -->
      ${sectionsHtml}

      <!-- References Section -->
      <section id="references">
        <h2>
          <span class="mw-headline">${art.sections.length + 1} Notes and references</span>
          <span class="mw-editsection">[<a href="#" class="edit-section-link" data-title="Notes and references">edit</a>]</span>
        </h2>
        <ol class="references" id="wiki-references-list">
          ${config.references.map(ref => `
            <li id="cite_note-${ref.id}">
              <span class="mw-cite-backlink-holder" data-ref-id="${ref.id}">
                <a href="#cite_ref-${ref.id}-0" class="mw-cite-backlink" title="Jump back to footnote">^</a>
              </span>
              <span class="reference-text">${ref.text}</span>
            </li>
          `).join('')}
        </ol>
      </section>

      <!-- Categories Box -->
      ${catlinksHtml}
    </article>
  `;
}
