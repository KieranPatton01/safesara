/**
 * src/components/Header.js - Vector 2022 Top Header & Search Bar
 */
export function renderHeader(config) {
  return `
    <header class="wiki-header" role="banner">
      <div class="wiki-header-left">
        <button id="sidebar-toggle-btn" class="wiki-sidebar-toggle" aria-label="Toggle navigation menu" title="Main menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 4.5h16v1.5H2zm0 5h16v1.5H2zm0 5h16v1.5H2z"/>
          </svg>
        </button>
        <a href="#top" class="wiki-brand" aria-label="${config.site.name} Homepage">
          <img src="assets/logo.svg" alt="${config.site.name} Logo" height="46" width="198" />
        </a>
      </div>

      <div class="wiki-search-container">
        <form id="wiki-search-form" class="wiki-search-bar" role="search" onsubmit="return false;">
          <span class="wiki-search-icon">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12.2 13.6a7 7 0 1 1 1.4-1.4l5.4 5.4-1.4 1.4-5.4-5.4zM8.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"/>
            </svg>
          </span>
          <input 
            type="search" 
            id="wiki-search-input" 
            class="wiki-search-input" 
            placeholder="Search ${config.site.name}" 
            aria-label="Search ${config.site.name}"
            autocomplete="off"
          />
          <button type="button" id="wiki-search-clear" class="wiki-search-clear" aria-label="Clear search">×</button>
          
          <!-- Dropdown suggestions -->
          <div id="wiki-search-dropdown" class="wiki-search-dropdown" role="listbox"></div>
        </form>
      </div>

      <div class="wiki-header-right">
        <button id="donate-snacks-btn" class="wiki-donate-btn" title="Contribute directly to subject's snack supplies">
          Donate snacks
        </button>
        <a href="#talk" class="wiki-user-action" title="Discussion regarding this encyclopedia">Talk</a>
        <a href="#history" class="wiki-user-action" title="Past edits and revisions">History</a>
        <a href="#" id="auth-status-btn" class="wiki-user-action essential" style="font-weight: 500;">
          User:AdmiringResearcher
        </a>
      </div>
    </header>
  `;
}
