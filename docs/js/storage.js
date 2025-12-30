/**
 * LocalStorage Management
 * Handles watched videos persistence
 */

const Storage = {
  WATCHED_VIDEOS_KEY: 'watchedVideos',
  REVEALED_SCORES_KEY: 'revealedScores',

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
  },

  /**
   * Get revealed scores from localStorage
   */
  getRevealedScores() {
    try {
      const data = localStorage.getItem(this.REVEALED_SCORES_KEY);
      return new Set(JSON.parse(data || '[]'));
    } catch (error) {
      console.error('Error reading revealed scores:', error);
      return new Set();
    }
  },

  /**
   * Mark score as revealed
   */
  markScoreRevealed(videoId) {
    const revealed = this.getRevealedScores();
    revealed.add(videoId);
    this.saveRevealedScores(revealed);
  },

  /**
   * Check if score is revealed
   */
  isScoreRevealed(videoId) {
    return this.getRevealedScores().has(videoId);
  },

  /**
   * Save revealed scores to localStorage
   */
  saveRevealedScores(revealedSet) {
    try {
      localStorage.setItem(this.REVEALED_SCORES_KEY, JSON.stringify([...revealedSet]));
    } catch (error) {
      console.error('Error saving revealed scores:', error);
    }
  }
};

// Export to window
window.Storage = Storage;
