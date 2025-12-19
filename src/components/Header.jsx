import React from 'react';
import FilterTabs from './FilterTabs';
import './Header.css';

const logoMap = {
  'league of legends': 'https://upload.wikimedia.org/wikipedia/en/7/7f/League_of_Legends_logo.svg',
  'cs:go': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Counter-Strike_Global_Offensive.svg',
  'counter-strike': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Counter-Strike_Global_Offensive.svg',
  'dota 2': 'https://upload.wikimedia.org/wikipedia/en/0/05/Dota_2_logo.svg',
  'valorant': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Valorant_logo_-_pink_color_version.svg',
  'overwatch': 'https://upload.wikimedia.org/wikipedia/en/5/55/Overwatch_2_logo.svg',
  'rainbow six': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Rainbow_Six_Siege.png',
  'rocket league': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_logo.svg',
};

const getGameLogo = (game) => {
  if (game?.image_url) return game.image_url;
  const key = (game?.slug || game?.name || '').toLowerCase();
  const match = Object.entries(logoMap).find(([name]) => key.includes(name));
  return match ? match[1] : null;
};

const Header = ({ selectedGame, onGameChange, games, activeTab, onTabChange }) => {
  return (
    <header className="header">
      <div className="header-surface">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-pill">✨ Nueva versión</div>
            <div className="brand-row">
              <h1 className="logo">EsMOB</h1>
              <span className="live-pill">Live + Próximas</span>
            </div>
            <p className="tagline">
              Resultados de Esports en tiempo real con filtros rápidos por juego y estado.
            </p>
            <div className="meta-row">
              <div className="meta-card">
                <span className="meta-icon">🌎</span>
                <div>
                  <p className="meta-title">Cobertura global</p>
                  <p className="meta-sub">Ligas internacionales</p>
                </div>
              </div>
              <div className="meta-card">
                <span className="meta-icon">⚡</span>
                <div>
                  <p className="meta-title">Actualizado</p>
                  <p className="meta-sub">Streaming y VOD</p>
                </div>
              </div>
              <div className="meta-card">
                <span className="meta-icon">🎯</span>
                <div>
                  <p className="meta-title">Selección precisa</p>
                  <p className="meta-sub">Filtra por tu juego</p>
                </div>
              </div>
            </div>
          </div>

          <div className="selector-panel">
            <div className="selector-head">
              <p className="selector-title">Selecciona un juego</p>
              <p className="selector-sub">Explora partidas y ligas por título</p>
            </div>
            <div className="game-grid" aria-label="Selector de juegos">
              <button
                className={`game-card ${!selectedGame ? 'active' : ''}`}
                onClick={() => onGameChange(null)}
              >
                <div className="game-avatar fallback">🌐</div>
                <div className="game-texts">
                  <span className="game-name">Todos</span>
                  <span className="game-tag">Vista unificada</span>
                </div>
              </button>
              {games.map((game) => {
                const logo = getGameLogo(game);
                const isActive = String(selectedGame ?? '') === String(game.id);
                return (
                  <button
                    key={game.id}
                    className={`game-card ${isActive ? 'active' : ''}`}
                    onClick={() => onGameChange(game.id)}
                    title={game.name}
                  >
                    <div className="game-avatar">
                      {logo ? (
                        <img src={logo} alt={game.name} loading="lazy" />
                      ) : (
                        <span className="fallback">{game.name?.[0]}</span>
                      )}
                    </div>
                    <div className="game-texts">
                      <span className="game-name">{game.name}</span>
                      <span className="game-tag">Partidas dedicadas</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="header-tabs">
          <FilterTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
