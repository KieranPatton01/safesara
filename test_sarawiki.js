// test_sarawiki.js - Automated Verification Test Suite for SaraWiki
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { saraConfig } from './src/config/sara.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('====================================================');
console.log('       SARAWIKI AUTOMATED TEST SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`✓ PASS: ${message}`);
    passedTests++;
  }
}

// -----------------------------------------------------------------------------
// 1. Config Integrity Checks
// -----------------------------------------------------------------------------
console.log('--- 1. Testing SaraWiki Config Schema ---');
assert(typeof saraConfig === 'object' && saraConfig !== null, 'saraConfig is an object');
assert(typeof saraConfig.site === 'object', 'saraConfig.site is present');
assert(saraConfig.site.name === 'SaraWiki', 'site.name is SaraWiki');
assert(typeof saraConfig.person === 'object', 'saraConfig.person is present');
assert(saraConfig.person.name === 'Sara', 'person.name is Sara');
assert(typeof saraConfig.person.occupation === 'string' && saraConfig.person.occupation.length > 0, 'person.occupation is non-empty');
assert(typeof saraConfig.infobox === 'object', 'saraConfig.infobox is present');
assert(Array.isArray(saraConfig.infobox.personalInfo) && saraConfig.infobox.personalInfo.length >= 5, 'infobox.personalInfo has >= 5 fields');
assert(Array.isArray(saraConfig.infobox.statistics) && saraConfig.infobox.statistics.length >= 3, 'infobox.statistics has >= 3 fields');
assert(Array.isArray(saraConfig.infobox.honours) && saraConfig.infobox.honours.length >= 2, 'infobox.honours has >= 2 records');

// -----------------------------------------------------------------------------
// 2. Article & Section Checks
// -----------------------------------------------------------------------------
console.log('\n--- 2. Testing Article Sections & Content ---');
assert(Array.isArray(saraConfig.article.lead) && saraConfig.article.lead.length >= 2, 'article.lead has >= 2 paragraphs');
assert(Array.isArray(saraConfig.article.sections) && saraConfig.article.sections.length >= 8, 'article.sections has >= 8 sections');

const sectionIds = new Set();
for (const sec of saraConfig.article.sections) {
  assert(!sectionIds.has(sec.id), `section id "${sec.id}" is unique`);
  sectionIds.add(sec.id);
  assert(typeof sec.title === 'string' && sec.title.length > 0, `section "${sec.id}" has title`);
  assert(typeof sec.number === 'string', `section "${sec.id}" has section number`);
}

// -----------------------------------------------------------------------------
// 3. Citation and Reference Cross-Check
// -----------------------------------------------------------------------------
console.log('\n--- 3. Cross-Referencing Citations vs References ---');
assert(Array.isArray(saraConfig.references) && saraConfig.references.length >= 5, 'references array has >= 5 entries');

const refIds = new Set(saraConfig.references.map(r => r.id));
let citationCount = 0;

// Scan text for [1], [2], etc.
function scanForCitations(text) {
  if (!text) return;
  const matches = text.matchAll(/\[(\d+)\]/g);
  for (const m of matches) {
    const id = parseInt(m[1], 10);
    assert(refIds.has(id), `Citation [${id}] in article text exists in references table`);
    citationCount++;
  }
}

saraConfig.article.lead.forEach(scanForCitations);
saraConfig.article.sections.forEach(sec => {
  if (sec.paragraphs) sec.paragraphs.forEach(scanForCitations);
  if (sec.list) sec.list.forEach(scanForCitations);
  if (sec.subsections) {
    sec.subsections.forEach(sub => sub.paragraphs.forEach(scanForCitations));
  }
});

assert(citationCount >= 6, `At least 6 citations found in article text (found: ${citationCount})`);

// -----------------------------------------------------------------------------
// 4. Talk Page & Revision History
// -----------------------------------------------------------------------------
console.log('\n--- 4. Testing Talk Page & History ---');
assert(Array.isArray(saraConfig.talkThreads) && saraConfig.talkThreads.length >= 3, 'talkThreads has >= 3 threads');
for (const thread of saraConfig.talkThreads) {
  assert(thread.posts && thread.posts.length >= 1, `thread "${thread.title}" has posts`);
}

assert(Array.isArray(saraConfig.history) && saraConfig.history.length >= 4, 'history has >= 4 revisions');

// -----------------------------------------------------------------------------
// 5. Search Index & Easter Eggs
// -----------------------------------------------------------------------------
console.log('\n--- 5. Testing Search Index & Easter Eggs ---');
assert(Array.isArray(saraConfig.searchIndex) && saraConfig.searchIndex.length >= 10, 'searchIndex has >= 10 terms');
assert(saraConfig.searchIndex.some(item => item.term === 'Sara Wiki'), 'searchIndex contains "Sara Wiki"');
assert(saraConfig.searchIndex.some(item => item.term.toLowerCase() === 'sarawiki'), 'searchIndex contains "SaraWiki"');
assert(saraConfig.easterEggs.imageClickCap === 5, 'easterEggs.imageClickCap is 5');
assert(Array.isArray(saraConfig.easterEggs.classifiedDossier.redactions), 'easterEggs.classifiedDossier.redactions is an array');

// -----------------------------------------------------------------------------
// 6. Infobox Fields & Cristiano Ronaldo Structure
// -----------------------------------------------------------------------------
console.log('\n--- 6. Testing Infobox Cristiano Ronaldo Structure ---');
assert(saraConfig.infobox.personalInfo.some(f => f.label === 'Born'), 'infobox.personalInfo contains "Born" field');
assert(saraConfig.infobox.personalInfo.some(f => f.label === 'Status'), 'infobox.personalInfo contains "Status" field');
assert(saraConfig.infobox.personalInfo.some(f => f.label === 'Occupation'), 'infobox.personalInfo contains "Occupation" field');

// -----------------------------------------------------------------------------
// 7. Sara Cinema Separation Verification
// -----------------------------------------------------------------------------
console.log('\n--- 7. Testing Sara Cinema Decoupling & Placeholder ---');
assert(typeof saraConfig.cinema === 'object', 'saraConfig.cinema exists');
assert(typeof saraConfig.cinema.showInNav === 'boolean', 'cinema.showInNav is a configurable boolean');
assert(saraConfig.cinema.showInNav === false, 'cinema.showInNav defaults to false (hidden from major nav)');
assert(fs.existsSync(path.join(__dirname, 'sara-cinema', 'index.js')), 'sara-cinema/index.js exists');
assert(fs.existsSync(path.join(__dirname, 'sara-cinema', 'start_movie.bat')), 'sara-cinema/start_movie.bat exists');
assert(fs.existsSync(path.join(__dirname, 'sara-cinema', 'README.md')), 'sara-cinema/README.md exists');
assert(fs.existsSync(path.join(__dirname, 'sara-cinema', 'scenes', 'art.js')), 'sara-cinema/scenes/art.js exists');

// -----------------------------------------------------------------------------
// 8. Static Assets & Root Files
// -----------------------------------------------------------------------------
console.log('\n--- 8. Testing Static File Integrity ---');
assert(fs.existsSync(path.join(__dirname, 'index.html')), 'root index.html exists');
assert(fs.existsSync(path.join(__dirname, 'src', 'styles', 'wikipedia.css')), 'src/styles/wikipedia.css exists');
assert(fs.existsSync(path.join(__dirname, 'src', 'app.js')), 'src/app.js exists');
assert(fs.existsSync(path.join(__dirname, 'src', 'config', 'sara.js')), 'src/config/sara.js exists');
assert(fs.existsSync(path.join(__dirname, 'src', 'data', 'sara.ts')), 'src/data/sara.ts exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'logo.svg')), 'assets/logo.svg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'sara-portrait.svg')), 'assets/sara-portrait.svg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'diagram-sofa.svg')), 'assets/diagram-sofa.svg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'sara-broken-vinyl.jpg')), 'assets/sara-broken-vinyl.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'sara-main.jpg')), 'assets/sara-main.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'rodriguez-run.jpg')), 'assets/rodriguez-run.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'sara-morning-shift-award.jpg')), 'assets/sara-morning-shift-award.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'sara-slime.jpg')), 'assets/sara-slime.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'sara-cinema-screenshot.svg')), 'assets/sara-cinema-screenshot.svg exists');

// -----------------------------------------------------------------------------
// 9. Zero Lorem Ipsum Verification
// -----------------------------------------------------------------------------
console.log('\n--- 9. Verifying Zero Placeholder Lorem Ipsum ---');
const filesToCheck = [
  'index.html',
  'src/config/sara.js',
  'src/data/sara.ts',
  'src/components/ArticleContent.js',
  'src/components/Sidebar.js',
  'src/components/Header.js',
  'src/components/TalkPage.js',
  'src/components/HistoryPage.js',
  'src/components/CinemaPage.js',
  'README.md'
];
for (const relPath of filesToCheck) {
  const content = fs.readFileSync(path.join(__dirname, relPath), 'utf8');
  assert(!content.toLowerCase().includes('lorem ipsum'), `No lorem ipsum found in ${relPath}`);
}

console.log('\n====================================================');
console.log(`★ ALL ${passedTests}/${totalTests} TESTS PASSED WITH 100% SUCCESS! ★`);
console.log('====================================================\n');
