/**
 * API Layer
 * Handles Firebase Firestore API calls
 */

const API = {
  /**
   * Fetch all videos from Firebase Firestore
   */
  async fetchAllVideos() {
    try {
      const url = `https://firestore.googleapis.com/v1/projects/${window.APP_CONFIG.FIREBASE_CONFIG.projectId}/databases/(default)/documents/videos`;

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.error('Failed to fetch videos from Firebase');
        return [];
      }

      const data = await response.json();
      const videos = [];

      if (data.documents) {
        data.documents.forEach(doc => {
          const fields = doc.fields;
          const video = {
            id: doc.name.split('/').pop(),
            match: fields.match?.stringValue || '',
            url: fields.url?.stringValue || '',
            currentPlayer: fields.currentPlayer?.stringValue || '',
            currentPlayerClub: fields.currentPlayerClub?.stringValue || '',
            currentPlayerId: fields.currentPlayerId?.stringValue || '',
            currentPlayerRanking: fields.currentPlayerRanking?.stringValue || '',
            opponentPlayer: fields.opponentPlayer?.stringValue || '',
            opponentClub: fields.opponentClub?.stringValue || '',
            opponentPlayerId: fields.opponentPlayerId?.stringValue || '',
            opponentRanking: fields.opponentRanking?.stringValue || '',
            score: fields.score?.stringValue || '',
            event: fields.event?.stringValue || 'ללא אירוע',
            createdAt: fields.createdAt?.timestampValue || '',
            updatedAt: fields.updatedAt?.timestampValue || ''
          };
          videos.push(video);
        });
      }

      console.log('Loaded', videos.length, 'videos from Firebase');
      return videos;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  }
};

// Export to window
window.API = API;
