import { mockMatches, mockGames } from './mockData';

const API_KEY = import.meta.env.VITE_PANDASCORE_API_KEY || '';
const BASE_URL = 'https://api.pandascore.co';
const USE_MOCK_DATA = false; // Set to true to use mock data

export const pandascoreAPI = {
  async getMatches(game = null, page = 1, perPage = 20) {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let filtered = [...mockMatches];
          if (game) {
            // Find game name from mockGames by ID
            const gameName = mockGames.find(g => g.id === parseInt(game))?.name;
            if (gameName) {
              filtered = filtered.filter(m => m.videogame.name === gameName);
            }
          }
          resolve(filtered);
        }, 500);
      });
    }

    try {
      const params = new URLSearchParams({
        token: API_KEY,
        page: page,
        per_page: perPage,
        sort: '-begin_at',
      });

      if (game) {
        params.append('filter[videogame]', game);
      }

      const response = await fetch(`${BASE_URL}/matches?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching matches, falling back to mock data:', error);
      // Fallback to mock data on error
      let filtered = [...mockMatches];
      if (game) {
        // Find game name from mockGames by ID
        const gameName = mockGames.find(g => g.id === parseInt(game))?.name;
        if (gameName) {
          filtered = filtered.filter(m => m.videogame.name === gameName);
        }
      }
      return filtered;
    }
  },

  async getUpcomingMatches(game = null, page = 1, perPage = 20) {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let filtered = mockMatches.filter(m => m.status === 'not_started');
          if (game) {
            const gameName = mockGames.find(g => g.id === parseInt(game))?.name;
            if (gameName) {
              filtered = filtered.filter(m => m.videogame.name === gameName);
            }
          }
          resolve(filtered);
        }, 500);
      });
    }

    try {
      const params = new URLSearchParams({
        token: API_KEY,
        page: page,
        per_page: perPage,
        sort: 'begin_at',
        'filter[status]': 'not_started',
      });

      if (game) {
        params.append('filter[videogame]', game);
      }

      const response = await fetch(`${BASE_URL}/matches/upcoming?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching upcoming matches, falling back to mock data:', error);
      // Fallback to mock data
      let filtered = mockMatches.filter(m => m.status === 'not_started');
      if (game) {
        const gameName = mockGames.find(g => g.id === parseInt(game))?.name;
        if (gameName) {
          filtered = filtered.filter(m => m.videogame.name === gameName);
        }
      }
      return filtered;
    }
  },

  async getPastMatches(game = null, page = 1, perPage = 20) {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let filtered = mockMatches.filter(m => m.status === 'finished');
          if (game) {
            const gameName = mockGames.find(g => g.id === parseInt(game))?.name;
            if (gameName) {
              filtered = filtered.filter(m => m.videogame.name === gameName);
            }
          }
          resolve(filtered);
        }, 500);
      });
    }

    try {
      const params = new URLSearchParams({
        token: API_KEY,
        page: page,
        per_page: perPage,
        sort: '-begin_at',
        'filter[status]': 'finished',
      });

      if (game) {
        params.append('filter[videogame]', game);
      }

      const response = await fetch(`${BASE_URL}/matches/past?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching past matches, falling back to mock data:', error);
      // Fallback to mock data
      let filtered = mockMatches.filter(m => m.status === 'finished');
      if (game) {
        const gameName = mockGames.find(g => g.id === parseInt(game))?.name;
        if (gameName) {
          filtered = filtered.filter(m => m.videogame.name === gameName);
        }
      }
      return filtered;
    }
  },

  async getGames() {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockGames), 300);
      });
    }

    try {
      const params = new URLSearchParams({
        token: API_KEY,
      });

      const response = await fetch(`${BASE_URL}/videogames?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching games, falling back to mock data:', error);
      // Fallback to mock data
      return mockGames;
    }
  },
};
