# 🌐 SaraWiki — The Free Encyclopedia of Sara-Related Knowledge

> *"Why does this look like Wikipedia?"*  
> *"Oh my god, this entire website is about Sara."*

Welcome to **SaraWiki**, an authentic, lightweight, and humorous personal encyclopedia website built as a gift for **Sara**. Designed to meticulously replicate the visual design, typography, layout, and UX of an official online encyclopedia (modeled directly on [Cristiano Ronaldo's Wikipedia entry](https://en.wikipedia.org/wiki/Cristiano_Ronaldo)), SaraWiki presents Sara with absurdly deadpan academic seriousness.

---

## 📸 Key Features

- **Pixel-Perfect Encyclopedic Aesthetic:** Classic Vector 2022 layout with serif article typography (`Linux Libertine`, `Georgia`), compact sans-serif UI, thin borders, Wikipedia link blue (`#3366cc`), and zero proprietary Wikipedia assets or trademarks.
- **Cristiano Ronaldo - Style Infobox:** Right-hand biographical table with personal attributes, recorded domestic statistics (blankets hoarded, meme reply speed), and a prestigious honours table.
- **Interactive Encyclopedia Functions:**
  - **Live Search Bar:** Instant local autocomplete dropdown matching sections, inside jokes, and keywords.
  - **Article / Talk Tabs:** Seamless switching to an authentic Wikipedia Talk page featuring hilarious neutrality disputes between editors.
  - **Read / Edit Controls:** Clicking "Edit" or `[edit]` prompts a high-importance article warning, switches to a simulated wikitext editor, and humorously rejects edits via `SaraBot-v4.0` because *"Subject is already deemed perfect"*.
  - **Revision History & Visual Diffs:** Full revision log with side-by-side Wikipedia green/red diff viewer.
  - **Interactive Citations:** Hovering over `[1]`, `[2]`, or `[citation needed]` displays Wikipedia reference popover tooltips. Clicking jumps and smoothly highlights the citation.
- **Easter Eggs:**
  - **Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`):** Unlocks the *Classified Level 5 Dossier* with interactive black redacted bars that reveal on click.
  - **Profile Photo Inspection:** Clicking Sara's portrait 5 times triggers a high-frequency observation alert.
  - **Snack Donation:** Top bar button dispenses urgent pastries and Spanish tapas.
  - **Dynamic Last-Edited Timestamp:** Generates realistic Wikipedia update dates in the footer.
- **Sara Cinema Decoupling:** Clean module architecture reserving `/sara-cinema` (`#cinema`) while keeping the terminal movie completely self-contained in `/sara-cinema`.
- **Zero-Dependency Architecture:** Pure modern ES modules that run instantly on GitHub Pages or any static host with zero build step required.

---

## 🚀 Quick Start (Local Preview)

Simply open [`index.html`](index.html) directly in any web browser!

Or, run a local web server with:

```bash
npm start
```

Then visit: `http://localhost:3000`

---

## 🛠️ How to Customize Sara's Information

**You do NOT need to touch HTML, CSS, or JavaScript.**  
All content is centralized in a single configuration file:

📁 **[`src/config/sara.js`](src/config/sara.js)** *(or typed mirror in [`src/data/sara.ts`](src/data/sara.ts))*

### 1. Changing Sara's Basic Info & Infobox
Open `src/config/sara.js` and edit the `person` and `infobox` objects:

```javascript
person: {
  name: "Sara",
  fullName: "Sara",
  occupation: "Safestay Superstar & High-Stakes Snack Negotiator",
  knownFor: "Unmatched aesthetic sense and strategic hoodie acquisition",
  threatLevel: "Moderate (escalates rapidly when hungry)",
  // ...
}
```

### 2. Changing the Profile Image
1. Place your photo of Sara into the `assets/` folder (e.g. `assets/sara.jpg` or `assets/sara.png`).
2. In `src/config/sara.js`, change the `image.src`:

```javascript
image: {
  src: "assets/sara.jpg",
  alt: "Sara looking thoughtful",
  caption: "Sara observing surrounding domestic events with moderate skepticism (2025)"
}
```

### 3. Adding or Editing Article Sections
In `src/config/sara.js`, the `article.sections` array contains all sections. You can edit existing text or add new sections:

```javascript
{
  id: "holiday-trips",
  number: "13",
  title: "Notable Spanish Vacations",
  paragraphs: [
    "Sara's landmark trip across Madrid, San Sebastián, and Barcelona set new culinary records..."
  ]
}
```

### 4. Adding Citations & References
- In your section paragraphs, include `<sup>[7]</sup>`.
- In the `references` array, add the matching reference:

```javascript
references: [
  // ...
  {
    id: 7,
    text: "Eyewitness testimony from the Madrid Tapas Expedition (2025)."
  }
]
```

### 5. Editing Talk Page Discussions & Revision History
Add your own inside jokes to the `talkThreads` and `history` arrays in `src/config/sara.js`.

---

## 🌐 Deploying to GitHub Pages

SaraWiki is specifically optimized for instant GitHub Pages static hosting:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Deploy SaraWiki"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/sarawiki.git
   git push -u origin main
   ```
2. Go to your repository on GitHub.
3. Click **Settings** → **Pages** (in the left menu).
4. Under **Build and deployment** / **Branch**:
   - Select `main`
   - Select `/ (root)` folder
   - Click **Save**.
5. Your SaraWiki website will be live in ~60 seconds at:  
   `https://<YOUR-USERNAME>.github.io/sarawiki/`

---

## 🎬 Sara Cinema: Sara the Spicy Señorita

Sara Cinema is documented in dedicated **Section 11** of the encyclopedia and hosted live at:

🌐 **[https://sararodriguez.co.uk/cinema/index.html](https://sararodriguez.co.uk/cinema/index.html)**

Source code is maintained in `sarasuprise` and the decoupled CLI terminal version is preserved in:

📁 **[`/sara-cinema`](sara-cinema/)**

### To run the CLI version locally:
- On Windows: Double-click [`sara-cinema/start_movie.bat`](sara-cinema/start_movie.bat).
- Or run: `node sara-cinema/index.js`.

### Connecting Sara Cinema to SaraWiki:
SaraWiki includes a reserved `#cinema` route that redirects directly to the live production web app, as well as a dedicated article section (Section 11) with CRT screenshot analysis and narrative breakdown.
To make Sara Cinema visible in the main navigation sidebar:
1. Open `src/config/sara.js`.
2. Under `cinema`, set `showInNav: true`:
   ```javascript
   cinema: {
     showInNav: true,
     // ...
   }
   ```

---

## 🧪 Automated Testing

Run the automated test suite to verify configuration schemas, reference consistency, and asset integrity:

```bash
npm test
```

---

## 📄 License & Attribution

This is a personal, unofficial comedic fan project created with genuine adoration.  
Text is available under the **Sara Creative Commons Attribution-SnackAlike License**.  
All disputed hoodies remain permanently in Sara's sovereign possession.
