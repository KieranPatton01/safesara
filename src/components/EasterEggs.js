/**
 * src/components/EasterEggs.js - Konami Code, Image Click Tracker & Special Triggers
 */
export function setupEasterEggs(config) {
  // 1. Konami Code Listener
  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let konamiIndex = 0;

  window.addEventListener('keydown', (e) => {
    // If user is currently typing in an input or textarea, don't hijack keys
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

    const expectedKey = konamiSequence[konamiIndex];
    if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        triggerKonamiEasterEgg(config);
      }
    } else {
      // If current key matches start of sequence (ArrowUp), keep index at 1
      konamiIndex = (e.key.toLowerCase() === konamiSequence[0].toLowerCase()) ? 1 : 0;
    }
  });

  function triggerKonamiEasterEgg(cfg) {
    const dossierModal = document.getElementById('classified-dossier-modal');
    if (dossierModal) {
      dossierModal.classList.add('open');
    }
    // Confetti or celebratory alert
    console.log("★ KONAMI CODE ENTERED: DECLASSIFYING ARCHIVES ★");
  }

  // 2. Profile Image Click Tracker (5 clicks)
  const profileImg = document.getElementById('sara-profile-image');
  let clickCount = 0;
  if (profileImg) {
    profileImg.addEventListener('click', () => {
      clickCount++;
      if (clickCount === config.easterEggs.imageClickCap) {
        alert(config.easterEggs.imageClickAlert);
        clickCount = 0;
      }
    });
  }

  // 3. Donate Snacks Button
  const donateBtn = document.getElementById('donate-snacks-btn');
  const sidebarDonate = document.getElementById('sidebar-donate-link');
  function handleDonate() {
    alert("DONATION ACCEPTED!\n\n1x Sizzling Spanish Tapas Platter, 1x Warm Pain au Chocolat, and 1x Cup of Hot Chocolate have been expedited to Sara's coordinates.\n\nThank you for supporting critical domestic snack infrastructure.");
  }
  if (donateBtn) donateBtn.onclick = handleDonate;
  if (sidebarDonate) sidebarDonate.onclick = (e) => { e.preventDefault(); handleDonate(); };

  // 4. Admin and Special Tools Mock
  const authBtn = document.getElementById('auth-status-btn');
  if (authBtn) {
    authBtn.onclick = (e) => {
      e.preventDefault();
      alert("Security Clearance Status: Level 5 (Researcher / Chief Admirer).\nYou are logged in with maximum domestic edit privileges.");
    };
  }

  const whatLinksHere = document.getElementById('sidebar-whatlinkshere');
  if (whatLinksHere) {
    whatLinksHere.onclick = (e) => {
      e.preventDefault();
      alert("Pages linking to 'Sara':\n• The Center of the Universe\n• The Definition of Perfection\n• Sara Cinema: Misión Im-Paella-ble\n• Kieran's Favorite Person Archive\n• All 7 Missing Hoodies");
    };
  }

  const specialPages = document.getElementById('sidebar-specialpages');
  if (specialPages) {
    specialPages.onclick = (e) => {
      e.preventDefault();
      alert("Special Pages Directory:\n• Special:SnackAudit\n• Special:HoodieRecovery (404 Not Found)\n• Special:DeclassifyDossier\n• Special:ComplimentGenerator");
    };
  }

  // 5. Watch Star Button Toggle
  const watchStar = document.getElementById('tab-watch-star');
  if (watchStar) {
    watchStar.addEventListener('click', () => {
      watchStar.classList.toggle('active');
      const isWatched = watchStar.classList.contains('active');
      watchStar.title = isWatched ? "You are watching Sara (article added to watchlist)" : "Watch this article";
      alert(isWatched ? "Added 'Sara' to your domestic watchlist! You will be alerted whenever snacks are consumed." : "Unwatched article.");
    });
  }

  // 6. Dynamic Realistic Footer Timestamp
  const lastEditedSpan = document.getElementById('footer-last-edited-time');
  if (lastEditedSpan) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    lastEditedSpan.textContent = `This page was last edited on ${dateStr}, at ${timeStr} (UTC).`;
  }
}
