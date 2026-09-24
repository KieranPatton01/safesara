/**
 * src/components/Sidebar.js - Left Sticky Table of Contents & Navigation Toolbox
 */
export function renderSidebar(config) {
  const sections = config.article.sections;

  const tocItemsHtml = sections.map((sec) => {
    let sublistHtml = '';
    if (sec.subsections && sec.subsections.length > 0) {
      sublistHtml = `
        <ul class="wiki-toc-sublist">
          ${sec.subsections.map(sub => `
            <li class="wiki-toc-item">
              <a href="#${sub.id}" class="wiki-toc-link" data-target="${sub.id}">
                <span class="wiki-toc-num">${sub.number}</span>
                <span class="wiki-toc-text">${sub.title}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      `;
    }

    return `
      <li class="wiki-toc-item">
        <a href="#${sec.id}" class="wiki-toc-link" data-target="${sec.id}">
          <span class="wiki-toc-num">${sec.number}</span>
          <span class="wiki-toc-text">${sec.title}</span>
        </a>
        ${sublistHtml}
      </li>
    `;
  }).join('');

  const refNum = sections.length + 1;
  const cinemaNavHtml = config.cinema && config.cinema.showInNav ? `
          <li class="wiki-toc-item"><a href="${config.cinema.url || 'https://sararodriguez.co.uk/cinema/index.html'}" target="_blank" rel="noopener noreferrer" class="wiki-toc-link" style="color:#d97706; font-weight: 500;">Sara Cinema</a></li>
  ` : '';

  return `
    <nav class="wiki-sidebar-left" id="wiki-sidebar" aria-label="Table of Contents">
      <div class="wiki-toc-title-row">
        <span>Contents</span>
        <button id="toc-toggle-btn" class="wiki-toc-toggle-btn">[hide]</button>
      </div>
      
      <div id="toc-list-container">
        <ul class="wiki-toc-list">
          <li class="wiki-toc-item">
            <a href="#top" class="wiki-toc-link active" data-target="top">
              <span class="wiki-toc-text">(Top)</span>
            </a>
          </li>
          ${tocItemsHtml}
          <li class="wiki-toc-item">
            <a href="#references" class="wiki-toc-link" data-target="references">
              <span class="wiki-toc-num">${refNum}</span>
              <span class="wiki-toc-text">Notes and references</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="wiki-sidebar-nav-group">
        <div class="wiki-sidebar-nav-heading">Contribute</div>
        <ul class="wiki-toc-list">
          <li class="wiki-toc-item"><a href="#" id="sidebar-edit-link" class="wiki-toc-link">Edit SaraWiki</a></li>
          <li class="wiki-toc-item"><a href="#talk" class="wiki-toc-link">Community portal</a></li>
          <li class="wiki-toc-item"><a href="#" id="sidebar-donate-link" class="wiki-toc-link">Donate chocolate</a></li>
        </ul>
      </div>

      <div class="wiki-sidebar-nav-group">
        <div class="wiki-sidebar-nav-heading">Tools</div>
        <ul class="wiki-toc-list">
          <li class="wiki-toc-item"><a href="#" id="sidebar-whatlinkshere" class="wiki-toc-link">What links here</a></li>
          <li class="wiki-toc-item"><a href="#" id="sidebar-specialpages" class="wiki-toc-link">Special pages</a></li>
          <li class="wiki-toc-item"><a href="#" id="sidebar-removal-link" class="wiki-toc-link" style="color: #b32424;">Content removal request</a></li>
          <li class="wiki-toc-item"><a href="javascript:window.print()" class="wiki-toc-link">Printable version</a></li>
          ${cinemaNavHtml}
        </ul>
      </div>
    </nav>
  `;
}
