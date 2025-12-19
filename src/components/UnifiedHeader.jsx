import React, { useState } from 'react';
import './UnifiedHeader.css';

const UnifiedHeader = ({ selectedGame, onGameChange, games, activeTab, onTabChange }) => {
  const [isGameSelectorOpen, setIsGameSelectorOpen] = useState(false);

  const tabs = [
    { id: 'all', label: 'Todas las partidas', icon: '🎮' },
    { id: 'live', label: 'En vivo', icon: '🔴' },
    { id: 'upcoming', label: 'Próximas', icon: '📅' },
    { id: 'past', label: 'Resultados', icon: '🏆' },
  ];

  const handleGameSelect = (gameId) => {
    onGameChange(gameId);
    setIsGameSelectorOpen(false);
  };

  const selectedGameData = selectedGame ? games.find(g => g.id.toString() === selectedGame) : null;

  return (
    <header className="unified-header">
      <div className="header-top">
        <div className="header-container">
          <div className="logo-section">
            <h1 className="logo">🎮 EsMOB</h1>
            <p className="tagline">Resultados de Esports en Tiempo Real</p>
          </div>
          
          <div className="game-selector-wrapper">
            <button 
              className="game-selector-toggle"
              onClick={() => setIsGameSelectorOpen(!isGameSelectorOpen)}
            >
              {selectedGameData ? (
                <>
                  {selectedGameData.logo_url && (
                    <img 
                      src={selectedGameData.logo_url} 
                      alt={selectedGameData.name}
                      className="selected-game-logo"
                    />
                  )}
                  <span>{selectedGameData.name}</span>
                </>
              ) : (
                <>
                  <span className="all-games-icon">🎯</span>
                  <span>Todos los juegos</span>
                </>
              )}
              <span className={`dropdown-arrow ${isGameSelectorOpen ? 'open' : ''}`}>▼</span>
            </button>
            
            {isGameSelectorOpen && (
              <div className="game-selector-dropdown">
                <div className="game-grid">
                  <button
                    className={`game-card ${!selectedGame ? 'active' : ''}`}
                    onClick={() => handleGameSelect(null)}
                  >
                    <div className="game-card-icon">🎯</div>
                    <span className="game-card-name">Todos</span>
                  </button>
                  
                  {games.map((game) => (
                    <button
                      key={game.id}
                      className={`game-card ${selectedGame === game.id.toString() ? 'active' : ''}`}
                      onClick={() => handleGameSelect(game.id.toString())}
                    >
                      {game.logo_url ? (
                        <img 
                          src={game.logo_url} 
                          alt={game.name}
                          className="game-card-logo"
                        />
                      ) : (
                        <div className="game-card-icon">🎮</div>
                      )}
                      <span className="game-card-name">{game.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isGameSelectorOpen && (
              <div 
                className="game-selector-overlay"
                onClick={() => setIsGameSelectorOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
      
      <div className="header-bottom">
        <div className="header-container">
          <div className="filter-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UnifiedHeader;
