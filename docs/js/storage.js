/**
 * LocalStorage Management
 * Handles watched videos persistence
 */

const Storage = {
  WATCHED_VIDEOS_KEY: 'watchedVideos',

  /**
   * Get watched videos from localStorage
   */
  getWatchedVideos() {
    try {
      const data = localStorage.getItem(this.WATCHED_VIDEOS_KEY);
      return new Set(JSON.parse(data || '[]'));
    } catch (error) {
      console.error('Error reading watched videos:', error);
      return new Set();
    }
  },

  /**
   * Mark video as watched
   */
  markAsWatched(videoId) {
    const watched = this.getWatchedVideos();
    watched.add(videoId);
    this.saveWatchedVideos(watched);
  },

  /**
   * Check if video is watched
   */
  isWatched(videoId) {
    return this.getWatchedVideos().has(videoId);
  },

  /**
   * Save watched videos to localStorage
   */
  saveWatchedVideos(watchedSet) {
    try {
      localStorage.setItem(this.WATCHED_VIDEOS_KEY, JSON.stringify([...watchedSet]));
    } catch (error) {
      console.error('Error saving watched videos:', error);
    }
  }
};

// Export to window
window.Storage = Storage;
