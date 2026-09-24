/**
 * src/components/Infobox.js - Modeled directly after Cristiano Ronaldo's Wikipedia Infobox
 */
export function renderInfobox(config) {
  const box = config.infobox;

  const personalRows = box.personalInfo.map(row => `
    <tr>
      <th scope="row" class="infobox-label">${row.label}</th>
      <td class="infobox-data">${row.value}</td>
    </tr>
  `).join('');

  let statSectionHtml = '';
  if (box.showStatistics && box.statistics && box.statistics.length > 0) {
    const statRows = box.statistics.map(row => `
      <tr>
        <th scope="row" class="infobox-label">${row.label}</th>
        <td class="infobox-data">${row.value}</td>
      </tr>
    `).join('');

    statSectionHtml = `
      <tr>
        <th colspan="2" class="infobox-section-header">Recorded Statistics</th>
      </tr>
      ${statRows}
    `;
  }

  const honoursRows = box.honours.map(h => `
    <li><strong>${h.year}:</strong> ${h.title}</li>
  `).join('');

  return `
    <aside aria-label="Biographical infobox">
      <table class="infobox vcard">
        <tbody>
          <tr>
            <th colspan="2" class="infobox-title">
              <div class="fn">${box.title}</div>
            </th>
          </tr>
          ${box.subtitle ? `
            <tr>
              <td colspan="2" class="infobox-subtitle">${box.subtitle}</td>
            </tr>
          ` : ''}
          <tr>
            <td colspan="2" class="infobox-image-wrapper">
              <img 
                id="sara-profile-image" 
                src="${box.image.src}" 
                alt="${box.image.alt}" 
                class="infobox-image" 
                title="Click photo to inspect (5x for Easter Egg)"
              />
              <div class="infobox-caption">${box.image.caption}</div>
            </td>
          </tr>

          <tr>
            <th colspan="2" class="infobox-section-header">Personal information</th>
          </tr>
          ${personalRows}

${statSectionHtml}

          <tr>
            <th colspan="2" class="infobox-section-header">Honours & Distinctions</th>
          </tr>
          <tr>
            <td colspan="2">
              <ul class="infobox-honours-list">
                ${honoursRows}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  `;
}
