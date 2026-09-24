/**
 * src/app.js - Master Application Orchestrator for SaraWiki
 */
import { saraConfig } from './config/sara.js';
import { renderHeader } from './components/Header.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderArticleContent } from './components/ArticleContent.js';
import { renderTalkPage } from './components/TalkPage.js';
import { renderHistoryPage } from './components/HistoryPage.js';
import { renderCinemaPage } from './components/CinemaPage.js';
import { setupReferences } from './components/References.js';
import { setupSearch } from './components/SearchModal.js';
import { setupEditModal } from './components/EditModal.js';
import { setupDiffModal } from './components/DiffModal.js';
import { setupDossierModal } from './components/DossierModal.js';
import { setupEasterEggs } from './components/EasterEggs.js';
import { setupPolicyModals } from './components/PolicyModals.js';

class SaraWikiApp {
  constructor(config) {
    this.config = config;
    this.currentView = 'article'; // 'article' | 'talk' | 'history' | 'cinema'
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.setupSubsystems();
    this.handleInitialRoute();
  }

  render() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      ${renderHeader(this.config)}

      <div class="wiki-page-container">
        ${renderSidebar(this.config)}

        <main class="wiki-main-column" id="top">
          <!-- Vector Tabs Row -->
          <div class="wiki-tabs-bar" role="navigation" aria-label="Page tools">
            <div class="wiki-tabs-left">
              <button class="wiki-tab active" id="tab-article" data-view="article">Article</button>
              <button class="wiki-tab" id="tab-talk" data-view="talk">Talk</button>
            </div>
            <div class="wiki-tabs-right">
              <button class="wiki-tab active" id="tab-read" data-view="article">Read</button>
              <button class="wiki-tab" id="tab-edit">Edit</button>
              <button class="wiki-tab" id="tab-history" data-view="history">View history</button>
              <button class="wiki-watch-star" id="tab-watch-star" title="Watch this article">★</button>
            </div>
          </div>

          <!-- Page Title & Language Bar -->
          <div class="wiki-title-row">
            <div>
              <h1 class="wiki-page-title" id="wiki-main-title">${this.config.person.name}</h1>
              <div class="wiki-subtitle">From ${this.config.site.name}, ${this.config.site.subtitle}</div>
            </div>
            <div class="wiki-page-indicators">
              <button class="wiki-lang-selector-btn" id="wiki-lang-btn" title="Language settings" aria-expanded="false" aria-haspopup="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -2px; margin-right: 4px;" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg><span id="wiki-lang-btn-text">37 languages ▾</span>
              </button>

              <!-- Wikipedia Vector 2022 Language Flyout -->
              <div class="wiki-lang-flyout" id="wiki-lang-flyout" style="display: none;" role="dialog" aria-label="Languages">
                <div class="wiki-lang-flyout-header">
                  <span class="wiki-lang-flyout-title">Languages / Idiomas</span>
                  <button type="button" class="wiki-lang-flyout-close" id="wiki-lang-flyout-close" aria-label="Close">×</button>
                </div>
                <div class="wiki-lang-flyout-search">
                  <input type="text" id="wiki-lang-search" placeholder="Search for a language..." autocomplete="off" />
                </div>
                <div class="wiki-lang-flyout-body">
                  <div class="wiki-lang-section-label">Suggested languages</div>
                  <ul class="wiki-lang-list">
                    <li class="wiki-lang-item" data-name="english original united kingdom" data-lang="en">
                      <button type="button" class="wiki-lang-option" data-lang="en" id="lang-opt-en">
                        <div class="wiki-lang-option-text">
                          <span class="wiki-lang-name">English</span>
                          <span class="wiki-lang-desc">Original article (United Kingdom)</span>
                        </div>
                        <span class="wiki-lang-badge active-badge" id="badge-en">Active</span>
                      </button>
                    </li>
                    <li class="wiki-lang-item" data-name="spanish espanol spanish translation" data-lang="es">
                      <button type="button" class="wiki-lang-option" data-lang="es" id="lang-opt-es">
                        <div class="wiki-lang-option-text">
                          <span class="wiki-lang-name">Español</span>
                          <span class="wiki-lang-desc">Spanish (Google Translate)</span>
                        </div>
                        <span class="wiki-lang-badge translate-badge" id="badge-es">Translate</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="wiki-lang-flyout-footer">
                  <span class="wiki-lang-powered">Powered by Google Translate</span>
                  <span id="wiki-lang-status-indicator" style="color: #00875a; font-weight: 500;">Connected</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Views Container -->
          <div id="article-view-container">
            ${renderArticleContent(this.config)}
          </div>
          ${renderTalkPage(this.config)}
          ${renderHistoryPage(this.config)}
          ${renderCinemaPage(this.config)}
        </main>
      </div>

      <!-- Vector Footer -->
      <footer class="wiki-footer" role="contentinfo">
        <div class="wiki-footer-inner">
          <div id="footer-last-edited-time">This page was last edited on 9 September 2026, at 13:02 (UTC).</div>
          <div class="wiki-footer-disclaimer">
            ${this.config.site.disclaimer}
          </div>
          <div style="font-size: 0.72rem; color: var(--wiki-color-subtle);">
            ${this.config.site.licenseNotice}
          </div>
          <ul class="wiki-footer-links">
            <li><a href="#privacy" id="footer-privacy-link">Privacy policy</a></li>
            <li><a href="#removal" id="footer-removal-link" style="color: #b32424;">Content removal request</a></li>
            <li><a href="#about">About ${this.config.site.name}</a></li>
            <li><a href="#disclaimers">Disclaimers</a></li>
            <li><a href="#contact">Contact the Researcher</a></li>
            <li><a href="#mobile">Mobile view</a></li>
            ${this.config.cinema && this.config.cinema.showInNav ? `<li><a href="#cinema" style="color: #d97706;">Sara Cinema Portal</a></li>` : ''}
          </ul>
        </div>
      </footer>
    `;
  }

  bindEvents() {
    // 1. Tab switches - route through hash for back/forward support & bookmarking
    const tabArticle = document.getElementById('tab-article');
    const tabTalk = document.getElementById('tab-talk');
    const tabRead = document.getElementById('tab-read');
    const tabHistory = document.getElementById('tab-history');

    if (tabArticle) tabArticle.addEventListener('click', () => { window.location.hash = '#top'; });
    if (tabRead) tabRead.addEventListener('click', () => { window.location.hash = '#top'; });
    if (tabTalk) tabTalk.addEventListener('click', () => { window.location.hash = '#talk'; });
    if (tabHistory) tabHistory.addEventListener('click', () => { window.location.hash = '#history'; });

    // 2. Hash Change Routing
    window.addEventListener('hashchange', () => this.handleHashChange());

    // 3. Mobile Sidebar Toggle & auto-close
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.getElementById('wiki-sidebar');
    if (sidebarToggleBtn && sidebar) {
      sidebarToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('mobile-open');
      });

      // Close drawer when any link inside is clicked
      sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('mobile-open');
        });
      });

      // Close drawer on tap outside
      document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('mobile-open') && 
            !sidebar.contains(e.target) && 
            !sidebarToggleBtn.contains(e.target)) {
          sidebar.classList.remove('mobile-open');
        }
      });
    }

    // 4. TOC Collapse Toggle
    const tocToggleBtn = document.getElementById('toc-toggle-btn');
    const tocListContainer = document.getElementById('toc-list-container');
    if (tocToggleBtn && tocListContainer) {
      tocToggleBtn.addEventListener('click', () => {
        const isHidden = tocListContainer.style.display === 'none';
        tocListContainer.style.display = isHidden ? 'block' : 'none';
        tocToggleBtn.textContent = isHidden ? '[hide]' : '[show]';
      });
    }

    // 5. Wikipedia Vector 2022 Language Selector with Google Translate
    this.setupLanguageSelector();

    // 6. ScrollSpy for TOC links
    this.setupScrollSpy();

    // 7. Talk page "Add topic"
    const newTopicBtn = document.getElementById('talk-new-section-btn');
    if (newTopicBtn) {
      newTopicBtn.addEventListener('click', () => {
        alert("EDITING RESTRICTION ACTIVE:\nOnly users with level 9 domestic credentials may submit new disputes. Please consult with Sara directly over coffee.");
      });
    }

    // 8. Review Box language tab toggle (English / Spanish)
    document.addEventListener('click', (e) => {
      const tab = e.target.closest('.wiki-review-tab');
      if (tab) {
        const lang = tab.getAttribute('data-lang');
        const container = tab.closest('.wiki-review-container');
        if (container) {
          container.querySelectorAll('.wiki-review-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const en = container.querySelector('.wiki-review-en');
          const es = container.querySelector('.wiki-review-es');
          if (lang === 'es') {
            if (en) en.style.display = 'none';
            if (es) es.style.display = 'block';
          } else {
            if (en) en.style.display = 'block';
            if (es) es.style.display = 'none';
          }
        }
      }
    });
  }

  switchView(viewName) {
    this.currentView = viewName;
    const articleContainer = document.getElementById('article-view-container');
    const talkContainer = document.getElementById('talk-page-container');
    const historyContainer = document.getElementById('history-page-container');
    const cinemaContainer = document.getElementById('cinema-page-container');

    const tabArticle = document.getElementById('tab-article');
    const tabTalk = document.getElementById('tab-talk');
    const tabRead = document.getElementById('tab-read');
    const tabHistory = document.getElementById('tab-history');
    const mainTitle = document.getElementById('wiki-main-title');

    // Hide all
    if (articleContainer) articleContainer.style.display = 'none';
    if (talkContainer) talkContainer.style.display = 'none';
    if (historyContainer) historyContainer.style.display = 'none';
    if (cinemaContainer) cinemaContainer.style.display = 'none';

    // Reset tab active states
    [tabArticle, tabTalk, tabRead, tabHistory].forEach(t => t && t.classList.remove('active'));

    if (viewName === 'talk') {
      if (talkContainer) talkContainer.style.display = 'block';
      if (tabTalk) tabTalk.classList.add('active');
      if (mainTitle) mainTitle.textContent = `Talk: ${this.config.person.name}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'history') {
      if (historyContainer) historyContainer.style.display = 'block';
      if (tabHistory) tabHistory.classList.add('active');
      if (mainTitle) mainTitle.textContent = `Sara: Revision history`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'cinema') {
      if (cinemaContainer) cinemaContainer.style.display = 'block';
      if (mainTitle) mainTitle.textContent = `Portal: Sara Cinema`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Default: article view
      if (articleContainer) articleContainer.style.display = 'block';
      if (tabArticle) tabArticle.classList.add('active');
      if (tabRead) tabRead.classList.add('active');
      if (mainTitle) mainTitle.textContent = this.config.person.name;
    }
  }

  handleInitialRoute() {
    this.handleHashChange();
  }

  handleHashChange() {
    const hash = window.location.hash;
    if (hash === '#talk') {
      this.switchView('talk');
    } else if (hash === '#history') {
      this.switchView('history');
    } else if (hash === '#cinema') {
      this.switchView('cinema');
      const targetUrl = this.config.cinema?.url || 'https://sararodriguez.co.uk/cinema/index.html';
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 400);
    } else {
      this.switchView('article');
      if (hash && hash !== '#top') {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    }
  }

  setupScrollSpy() {
    const tocLinks = document.querySelectorAll('.wiki-toc-link');
    const sections = Array.from(document.querySelectorAll('section[id], #references'));

    window.addEventListener('scroll', () => {
      if (this.currentView !== 'article') return;
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          const id = sec.id;
          tocLinks.forEach(link => {
            if (link.getAttribute('data-target') === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          break;
        }
      }
    }, { passive: true });
  }

  setupLanguageSelector() {
    const langBtn = document.getElementById('wiki-lang-btn');
    const langFlyout = document.getElementById('wiki-lang-flyout');
    const closeBtn = document.getElementById('wiki-lang-flyout-close');
    const searchInput = document.getElementById('wiki-lang-search');
    const langItems = document.querySelectorAll('.wiki-lang-item');
    const langOptions = document.querySelectorAll('.wiki-lang-option');

    const getStoredLang = () => {
      const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
      if (match && match[1]) {
        const decoded = decodeURIComponent(match[1]);
        if (decoded.endsWith('/es')) return 'es';
      }
      return 'en';
    };

    const updateUIState = (currentLang) => {
      const btnText = document.getElementById('wiki-lang-btn-text');
      const optEn = document.getElementById('lang-opt-en');
      const optEs = document.getElementById('lang-opt-es');
      const badgeEn = document.getElementById('badge-en');
      const badgeEs = document.getElementById('badge-es');

      if (currentLang === 'es') {
        if (btnText) btnText.textContent = 'Español (ES) ▾';
        if (langBtn) langBtn.classList.add('active-lang');
        if (optEn) optEn.classList.remove('active');
        if (optEs) optEs.classList.add('active');
        if (badgeEn) {
          badgeEn.textContent = 'Original';
          badgeEn.className = 'wiki-lang-badge translate-badge';
        }
        if (badgeEs) {
          badgeEs.textContent = 'Active';
          badgeEs.className = 'wiki-lang-badge active-badge';
        }
      } else {
        if (btnText) btnText.textContent = '37 languages ▾';
        if (langBtn) langBtn.classList.remove('active-lang');
        if (optEn) optEn.classList.add('active');
        if (optEs) optEs.classList.remove('active');
        if (badgeEn) {
          badgeEn.textContent = 'Active';
          badgeEn.className = 'wiki-lang-badge active-badge';
        }
        if (badgeEs) {
          badgeEs.textContent = 'Translate';
          badgeEs.className = 'wiki-lang-badge translate-badge';
        }
      }
    };

    // Initialize UI on load
    const initialLang = getStoredLang();
    updateUIState(initialLang);

    // Toggle Flyout
    if (langBtn && langFlyout) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langFlyout.style.display !== 'none';
        langFlyout.style.display = isOpen ? 'none' : 'block';
        langBtn.setAttribute('aria-expanded', !isOpen);
        if (!isOpen && searchInput) {
          searchInput.value = '';
          langItems.forEach(item => item.style.display = '');
          setTimeout(() => searchInput.focus(), 60);
        }
      });
    }

    if (closeBtn && langFlyout) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langFlyout.style.display = 'none';
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (langFlyout && langFlyout.style.display !== 'none') {
        if (!langFlyout.contains(e.target) && !langBtn.contains(e.target)) {
          langFlyout.style.display = 'none';
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langFlyout && langFlyout.style.display !== 'none') {
        langFlyout.style.display = 'none';
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Language Search Filtering
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        langItems.forEach(item => {
          const matchData = (item.getAttribute('data-name') || '').toLowerCase();
          const langCode = (item.getAttribute('data-lang') || '').toLowerCase();
          if (!query || matchData.includes(query) || langCode.includes(query)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }

    // Google Translate Trigger for Language Options
    langOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetLang = opt.getAttribute('data-lang');
        const currentLang = getStoredLang();

        if (langFlyout) langFlyout.style.display = 'none';
        if (langBtn) langBtn.setAttribute('aria-expanded', 'false');

        if (targetLang === currentLang) {
          return;
        }

        const domain = window.location.hostname;

        if (targetLang === 'es') {
          // Set cookie for Google Translate
          document.cookie = `googtrans=/en/es; path=/;`;
          if (domain && domain !== 'localhost') {
            document.cookie = `googtrans=/en/es; domain=.${domain}; path=/;`;
            document.cookie = `googtrans=/en/es; domain=${domain}; path=/;`;
          }

          const teCombo = document.querySelector('.goog-te-combo');
          if (teCombo) {
            teCombo.value = 'es';
            teCombo.dispatchEvent(new Event('change'));
          } else {
            window.location.reload();
            return;
          }
          updateUIState('es');
        } else {
          // Restore English
          document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
          document.cookie = `googtrans=/en/en; path=/;`;
          if (domain && domain !== 'localhost') {
            document.cookie = `googtrans=; domain=.${domain}; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
            document.cookie = `googtrans=/en/en; domain=.${domain}; path=/;`;
          }

          const teCombo = document.querySelector('.goog-te-combo');
          if (teCombo) {
            teCombo.value = 'en';
            teCombo.dispatchEvent(new Event('change'));
            setTimeout(() => {
              window.location.reload();
            }, 300);
            return;
          } else {
            window.location.reload();
            return;
          }
        }
      });
    });
  }

  setupSubsystems() {
    setupReferences(this.config);
    setupSearch(this.config, (target) => {
      if (target.startsWith('http')) {
        window.location.href = target;
      } else if (target.startsWith('#')) {
        if (target === '#cinema') {
          const targetUrl = this.config.cinema?.url || 'https://sararodriguez.co.uk/cinema/index.html';
          window.location.href = targetUrl;
        } else if (window.location.hash === target) {
          this.handleHashChange();
        } else {
          window.location.hash = target;
        }
      }
    });
    setupEditModal(this.config);
    setupDiffModal(this.config);
    setupDossierModal(this.config);
    setupEasterEggs(this.config);
    setupPolicyModals(this.config);
  }
}

// Bootstrapping
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new SaraWikiApp(saraConfig));
} else {
  new SaraWikiApp(saraConfig);
}
