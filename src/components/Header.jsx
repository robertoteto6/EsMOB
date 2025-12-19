import React from 'react';
import './Header.css';

const Header = ({ selectedGame, onGameChange, games }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">🎮 EsMOB</h1>
          <p className="tagline">Resultados de Esports en Tiempo Real</p>
        </div>
        
        <nav className="nav">
          <select 
            className="game-selector"
            value={selectedGame || ''}
            onChange={(e) => onGameChange(e.target.value || null)}
          >
            <option value="">Todos los juegos</option>
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
