/**
 * src/components/TalkPage.js - Humorous Wikipedia Talk / Discussion Page
 */
export function renderTalkPage(config) {
  const threadsHtml = config.talkThreads.map(thread => `
    <div class="talk-thread-box" id="${thread.id}">
      <div class="talk-thread-header">
        <h3 class="talk-thread-title">${thread.title}</h3>
        <span class="talk-thread-status">${thread.status}</span>
      </div>
      <div class="talk-thread-body">
        ${thread.posts.map(post => `
          <div class="talk-post">
            <span class="talk-post-author">${post.author}</span>
            <span class="talk-post-timestamp">${post.timestamp}</span>
            <div class="talk-post-content">${post.content}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <div class="talk-page-view" id="talk-page-container">
      <div class="talk-header-banner">
        <strong>This is the talk page for discussing improvements to the Sara article.</strong><br>
        This is not a forum for general discussion of the article's subject (unless discussing how awesome she is, in which case citations are still strongly recommended).
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2 style="margin: 0; font-family: var(--wiki-font-serif); border: none;">Discussion Threads</h2>
        <button id="talk-new-section-btn" class="talk-new-section-btn">
          <span style="font-weight: bold; margin-right: 2px;">+</span> Add topic / New dispute
        </button>
      </div>

      ${threadsHtml}
    </div>
  `;
}
