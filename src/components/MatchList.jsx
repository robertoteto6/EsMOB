import React from 'react';
import MatchCard from './MatchCard';
import './MatchList.css';

const MatchList = ({ matches, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando partidas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Error al cargar las partidas</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!matches || matches.length === 0) {
    return (
      <div className="empty-container">
        <div className="empty-icon">🎮</div>
        <h3>No hay partidas disponibles</h3>
        <p>Intenta seleccionar otro juego o vuelve más tarde</p>
      </div>
    );
  }

  return (
    <div className="match-list">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;
