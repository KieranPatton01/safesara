/**
 * src/components/SearchModal.js - Local Autocomplete & Search Execution
 */
export function setupSearch(config, navigateTo) {
  const searchInput = document.getElementById('wiki-search-input');
  const searchDropdown = document.getElementById('wiki-search-dropdown');
  const searchClear = document.getElementById('wiki-search-clear');
  const searchIndex = config.searchIndex;

  if (!searchInput || !searchDropdown) return;

  function renderDropdown(matches) {
    if (matches.length === 0) {
      searchDropdown.innerHTML = `
        <div class="wiki-search-item" style="color: var(--wiki-color-secondary); font-style: italic;">
          No direct title matches. (Try searching "hoodies", "tapas", "secret", or "coffee")
        </div>
      `;
      searchDropdown.classList.add('open');
      return;
    }

    searchDropdown.innerHTML = matches.map(item => `
      <div class="wiki-search-item" data-target="${item.target}">
        <span class="wiki-search-item-term">${item.term}</span>
        <span class="wiki-search-item-desc">${item.description}</span>
      </div>
    `).join('');

    searchDropdown.classList.add('open');

    // Attach clicks to dropdown items
    searchDropdown.querySelectorAll('.wiki-search-item').forEach(el => {
      el.addEventListener('click', () => {
        const target = el.getAttribute('data-target');
        handleSearchSelection(target);
      });
    });
  }

  function handleSearchSelection(target) {
    searchDropdown.classList.remove('open');
    searchInput.value = '';
    searchClear.classList.remove('visible');

    if (target === 'easter-egg-dossier') {
      const dossierModal = document.getElementById('classified-dossier-modal');
      if (dossierModal) dossierModal.classList.add('open');
      return;
    }

    navigateTo(target);
  }

  let selectedIndex = -1;

  function updateSelectedDropdownItem(items) {
    items.forEach((el, idx) => {
      if (idx === selectedIndex) {
        el.classList.add('selected');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
      }
    });
  }

  // Input event
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    selectedIndex = -1;

    if (val.length > 0) {
      searchClear.classList.add('visible');
    } else {
      searchClear.classList.remove('visible');
      searchDropdown.classList.remove('open');
      return;
    }

    const matches = searchIndex.filter(item => 
      item.term.toLowerCase().includes(val) || 
      item.description.toLowerCase().includes(val)
    );

    renderDropdown(matches);
  });

  // Keyboard navigation & enter handling
  searchInput.addEventListener('keydown', (e) => {
    const items = searchDropdown.querySelectorAll('.wiki-search-item[data-target]');

    if (e.key === 'ArrowDown') {
      if (items.length > 0 && searchDropdown.classList.contains('open')) {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelectedDropdownItem(items);
      }
    } else if (e.key === 'ArrowUp') {
      if (items.length > 0 && searchDropdown.classList.contains('open')) {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelectedDropdownItem(items);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        const target = items[selectedIndex].getAttribute('data-target');
        handleSearchSelection(target);
        return;
      }

      const val = searchInput.value.trim().toLowerCase();
      
      // Check for exact or best match
      const exactMatch = searchIndex.find(item => item.term.toLowerCase() === val);
      if (exactMatch) {
        handleSearchSelection(exactMatch.target);
        return;
      }

      const partialMatch = searchIndex.find(item => 
        item.term.toLowerCase().includes(val) || 
        item.description.toLowerCase().includes(val)
      );

      if (partialMatch) {
        handleSearchSelection(partialMatch.target);
      } else {
        alert(`Search results for "${searchInput.value}": Subject has been reviewed and deemed unmatched.`);
      }
    } else if (e.key === 'Escape') {
      searchDropdown.classList.remove('open');
      selectedIndex = -1;
    }
  });

  // Clear button
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    searchDropdown.classList.remove('open');
    searchInput.focus();
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.wiki-search-container')) {
      searchDropdown.classList.remove('open');
    }
  });
}
