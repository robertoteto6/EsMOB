import React from 'react';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Por determinar';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      'finished': { text: 'Finalizado', className: 'status-finished' },
      'running': { text: 'En vivo', className: 'status-live' },
      'not_started': { text: 'Próximo', className: 'status-upcoming' },
      'canceled': { text: 'Cancelado', className: 'status-canceled' },
    };
    
    return statusMap[status] || { text: status, className: 'status-default' };
  };

  const opponent1 = match.opponents?.[0]?.opponent || {};
  const opponent2 = match.opponents?.[1]?.opponent || {};
  const result1 = match.results?.[0]?.score || 0;
  const result2 = match.results?.[1]?.score || 0;
  const status = getStatusBadge(match.status);

  return (
    <div className="match-card">
      <div className="match-header">
        <span className={`status-badge ${status.className}`}>
          {status.text}
        </span>
        <span className="match-date">{formatDate(match.begin_at)}</span>
      </div>

      <div className="match-info">
        <div className="league-info">
          <span className="league-name">{match.league?.name || 'Liga desconocida'}</span>
          {match.serie?.full_name && (
            <span className="serie-name">{match.serie.full_name}</span>
          )}
        </div>
        <div className="game-type">
          {match.videogame?.name || match.name}
        </div>
      </div>

      <div className="match-opponents">
        <div className="opponent">
          <div className="opponent-logo">
            {opponent1.image_url ? (
              <img src={opponent1.image_url} alt={opponent1.name} />
            ) : (
              <div className="placeholder-logo">🎮</div>
            )}
          </div>
          <div className="opponent-name">{opponent1.name || 'TBD'}</div>
          {match.status === 'finished' && (
            <div className={`opponent-score ${result1 > result2 ? 'winner' : ''}`}>
              {result1}
            </div>
          )}
        </div>

        <div className="vs-divider">VS</div>

        <div className="opponent">
          <div className="opponent-logo">
            {opponent2.image_url ? (
              <img src={opponent2.image_url} alt={opponent2.name} />
            ) : (
              <div className="placeholder-logo">🎮</div>
            )}
          </div>
          <div className="opponent-name">{opponent2.name || 'TBD'}</div>
          {match.status === 'finished' && (
            <div className={`opponent-score ${result2 > result1 ? 'winner' : ''}`}>
              {result2}
            </div>
          )}
        </div>
      </div>

      {match.match_type && (
        <div className="match-format">
          {match.match_type} {match.number_of_games && `(Bo${match.number_of_games})`}
        </div>
      )}
    </div>
  );
};

export default MatchCard;
