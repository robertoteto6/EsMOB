import { mockMatches, mockGames } from './mockData';

const API_KEY = import.meta.env.VITE_PANDASCORE_API_KEY || '';
const BASE_URL = 'https://api.pandascore.co';
const USE_MOCK_DATA = false; // Set to true to use mock data

// Helper function to filter mock matches by game
const filterMatchesByGame = (matches, gameId) => {
  if (!gameId) return matches;
  
  const gameName = mockGames.find(g => g.id === parseInt(gameId))?.name;
  if (!gameName) return matches;
  
  return matches.filter(m => m.videogame.name === gameName);
};

export const pandascoreAPI = {
  async getMatches(game = null, page = 1, perPage = 20) {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filtered = filterMatchesByGame([...mockMatches], game);
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
      const filtered = filterMatchesByGame([...mockMatches], game);
      return filtered;
    }
  },

  async getUpcomingMatches(game = null, page = 1, perPage = 20) {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const upcoming = mockMatches.filter(m => m.status === 'not_started');
          const filtered = filterMatchesByGame(upcoming, game);
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
      const upcoming = mockMatches.filter(m => m.status === 'not_started');
      const filtered = filterMatchesByGame(upcoming, game);
      return filtered;
    }
  },

  async getPastMatches(game = null, page = 1, perPage = 20) {
    if (USE_MOCK_DATA) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const past = mockMatches.filter(m => m.status === 'finished');
          const filtered = filterMatchesByGame(past, game);
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
      const past = mockMatches.filter(m => m.status === 'finished');
      const filtered = filterMatchesByGame(past, game);
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
