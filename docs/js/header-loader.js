/**
 * Header Loader - Dynamically loads the shared header component
 * This allows maintaining a single header across all pages
 */

// Configuration for page-specific header content
const PAGE_CONFIGS = {
  'index.html': {
    title: 'טנ"ש ישראלי - סרטונים',
    subtitle: 'כל הסרטונים שהועלו, ממוינים לפי אירוע ותאריך'
  },
  'players.html': {
    title: 'טנ"ש ישראלי - סרטונים',
    subtitle: 'כל הסרטונים שהועלו, ממוינים לפי אירוע ותאריך'
  },
  'player-stats.html': {
    title: 'טנ"ש ישראלי - סרטונים',
    subtitle: 'כל הסרטונים שהועלו, ממוינים לפי אירוע ותאריך'
  }
};

/**
 * Loads the shared header into the page
 */
async function loadHeader() {
  try {
    // Fetch the header HTML
    const response = await fetch('header.html');
    if (!response.ok) {
      throw new Error(`Failed to load header: ${response.status}`);
    }

    const headerHTML = await response.text();

    // Insert the header into the page
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
      headerContainer.innerHTML = headerHTML;

      // Customize header based on current page
      customizeHeader();
    } else {
      console.error('Header container not found. Make sure you have a <div id="header-container"></div> in your page.');
    }
  } catch (error) {
    console.error('Error loading header:', error);
    // Fallback: show a basic header
    showFallbackHeader();
  }
}

/**
 * Customizes the header title and subtitle based on the current page
 */
function customizeHeader() {
  // Get the current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Get configuration for this page
  const config = PAGE_CONFIGS[currentPage] || PAGE_CONFIGS['index.html'];

  // Update title and subtitle
  const titleElement = document.getElementById('header-title');
  const subtitleElement = document.getElementById('header-subtitle');

  if (titleElement) {
    titleElement.textContent = config.title;
  }

  if (subtitleElement) {
    subtitleElement.textContent = config.subtitle;
  }
}

/**
 * Shows a fallback header if the main header fails to load
 */
function showFallbackHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <div class="header">
        <div class="header-content">
          <h1>טנ"ש ישראלי - סרטונים</h1>
          <p class="subtitle">כל הסרטונים שהועלו, ממוינים לפי אירוע ותאריך</p>
        </div>
      </div>
    `;
  }
}

/**
 * Opens the favorites modal
 */
function addToFavorites() {
  const modal = document.getElementById('favoritesModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

/**
 * Closes the favorites modal
 */
function closeFavoritesModal() {
  const modal = document.getElementById('favoritesModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Load the header when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHeader);
} else {
  // DOM is already ready
  loadHeader();
}

// Make functions globally available for onclick handlers
window.addToFavorites = addToFavorites;
window.closeFavoritesModal = closeFavoritesModal;
