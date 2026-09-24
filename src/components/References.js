/**
 * src/components/References.js - Footnote Hover Tooltips & Smooth Anchor Scrolling
 */
export function setupReferences(config) {
  // 1. Create Floating Popover Element
  let popover = document.getElementById('wiki-ref-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.id = 'wiki-ref-popover';
    popover.className = 'wiki-reference-popover';
    document.body.appendChild(popover);
  }

  // 2. Track occurrences of each citation across the DOM
  const refOccurrences = new Map();
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  // 3. Attach listeners to citations [1], [2], etc.
  const sups = document.querySelectorAll('sup');
  sups.forEach(sup => {
    // Check if it's a numeric citation like [1], [2]
    const match = sup.textContent.match(/\[(\d+)\]/);
    if (match) {
      const refId = parseInt(match[1], 10);
      const currentCount = refOccurrences.get(refId) || 0;
      const occIdx = currentCount;
      refOccurrences.set(refId, currentCount + 1);

      const refData = config.references.find(r => r.id === refId);
      const anchorId = `cite_ref-${refId}-${occIdx}`;

      // Set unique ID and classes
      sup.classList.add('reference');
      sup.id = anchorId;
      sup.innerHTML = `<a href="#cite_note-${refId}" class="wiki-ref-link" data-ref-id="${refId}" data-occ="${occIdx}">[${refId}]</a>`;

      // Hover events for popover preview
      sup.addEventListener('mouseenter', () => {
        if (refData) {
          popover.innerHTML = `<strong>[${refId}]</strong> ${refData.text}`;
          popover.style.display = 'block';

          const rect = sup.getBoundingClientRect();
          const popRect = popover.getBoundingClientRect();

          let top = rect.top - popRect.height - 8;
          if (top < 10) top = rect.bottom + 8; // flip below if offscreen

          let left = rect.left + (rect.width / 2) - (popRect.width / 2);
          if (left < 10) left = 10;
          if (left + popRect.width > window.innerWidth - 10) {
            left = window.innerWidth - popRect.width - 10;
          }

          popover.style.top = `${top}px`;
          popover.style.left = `${left}px`;
        }
      });

      sup.addEventListener('mouseleave', () => {
        popover.style.display = 'none';
      });

      // Click to jump and highlight target reference
      const link = sup.querySelector('a');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          popover.style.display = 'none';
          const targetLi = document.getElementById(`cite_note-${refId}`);
          if (targetLi) {
            targetLi.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetLi.classList.add('highlighted');
            setTimeout(() => {
              targetLi.classList.remove('highlighted');
            }, 2500);
          }
        });
      }
    }

    // Check if it's a [citation needed]
    if (sup.textContent.includes('citation needed')) {
      sup.classList.add('citation-needed');
      sup.title = config.easterEggs.citationNeededTooltip || "The researcher refuses to elaborate.";
      sup.style.cursor = "help";

      sup.addEventListener('mouseenter', () => {
        popover.innerHTML = `<em>[citation needed]</em>: ${config.easterEggs.citationNeededTooltip || "The researcher refuses to elaborate."}`;
        popover.style.display = 'block';

        const rect = sup.getBoundingClientRect();
        popover.style.top = `${rect.bottom + 6}px`;
        popover.style.left = `${Math.max(10, rect.left - 40)}px`;
      });

      sup.addEventListener('mouseleave', () => {
        popover.style.display = 'none';
      });
    }
  });

  // 4. Update References list with Wikipedia-standard multi-backlinks (^ a b c)
  config.references.forEach(ref => {
    const total = refOccurrences.get(ref.id) || 0;
    const holder = document.querySelector(`.mw-cite-backlink-holder[data-ref-id="${ref.id}"]`);
    if (!holder) return;

    if (total <= 1) {
      holder.innerHTML = `<a href="#cite_ref-${ref.id}-0" class="mw-cite-backlink" data-target="cite_ref-${ref.id}-0" title="Jump back to footnote">^</a>`;
    } else {
      const subLinks = [];
      for (let i = 0; i < total; i++) {
        const letter = letters[i] || `${i + 1}`;
        subLinks.push(`<a href="#cite_ref-${ref.id}-${i}" class="mw-cite-backlink-sub" data-target="cite_ref-${ref.id}-${i}" title="Jump to footnote ${ref.id}.${i + 1}"><sup><em>${letter}</em></sup></a>`);
      }
      holder.innerHTML = `<span class="mw-cite-backlink" title="Jump back to footnote">^</span> ${subLinks.join(' ')}`;
    }
  });

  // 5. Attach click handlers for all footnote backlinks
  document.querySelectorAll('.mw-cite-backlink[data-target], .mw-cite-backlink-sub').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target') || link.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlighted-citation');
        setTimeout(() => {
          targetEl.classList.remove('highlighted-citation');
        }, 2000);
      }
    });
  });

  // Close popover on scroll
  window.addEventListener('scroll', () => {
    if (popover.style.display === 'block') {
      popover.style.display = 'none';
    }
  }, { passive: true });
}
