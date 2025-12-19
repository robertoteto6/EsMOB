import React, { useState, useEffect } from 'react';
import UnifiedHeader from './components/UnifiedHeader';
import MatchList from './components/MatchList';
import { pandascoreAPI } from './services/pandascore';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch games on component mount
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await pandascoreAPI.getGames();
        setGames(gamesData);
      } catch (err) {
        console.error('Error fetching games:', err);
      }
    };

    fetchGames();
  }, []);

  // Fetch matches when tab or game changes
  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError(null);

      try {
        let matchesData;
        
        switch (activeTab) {
          case 'upcoming':
            matchesData = await pandascoreAPI.getUpcomingMatches(selectedGame);
            break;
          case 'past':
            matchesData = await pandascoreAPI.getPastMatches(selectedGame);
            break;
          case 'live':
            // For live matches, we'll filter from all matches
            const allMatches = await pandascoreAPI.getMatches(selectedGame);
            matchesData = allMatches.filter(match => match.status === 'running');
            break;
          default:
            matchesData = await pandascoreAPI.getMatches(selectedGame);
        }

        setMatches(matchesData);
      } catch (err) {
        setError(err.message || 'Error al cargar las partidas');
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [activeTab, selectedGame]);

  const handleGameChange = (gameId) => {
    setSelectedGame(gameId || null);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="app">
      <UnifiedHeader 
        selectedGame={selectedGame}
        onGameChange={handleGameChange}
        games={games}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <main className="main-content">
        <MatchList 
          matches={matches}
          loading={loading}
          error={error}
        />
      </main>
      <footer className="footer">
        <p>© 2024 EsMOB - Plataforma de Resultados de Esports</p>
        <p className="footer-note">Datos proporcionados por PandaScore</p>
      </footer>
    </div>
  );
}

export default App;
