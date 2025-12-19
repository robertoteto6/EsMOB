import React from 'react';
import './FilterTabs.css';

const FilterTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all', label: 'Todas las partidas', icon: '🎮' },
    { id: 'live', label: 'En vivo', icon: '🔴' },
    { id: 'upcoming', label: 'Próximas', icon: '📅' },
    { id: 'past', label: 'Resultados', icon: '🏆' },
  ];

  return (
    <div className="filter-tabs-container">
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
  );
};

export default FilterTabs;
