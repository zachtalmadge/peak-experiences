import React from 'react';
import './RiskLevelLegend.css';

const RiskLevelLegend = () => {
  return (
    <div className="risk-level-legend">
      <h4>Risk Level Color Guide</h4>
      <div className="legend-item">
        <div className="color-box green"></div>
        <p>Low Risk</p>
      </div>
      <div className="legend-item">
        <div className="color-box yellow"></div>
        <p>Medium Risk</p>
      </div>
      <div className="legend-item">
        <div className="color-box red"></div>
        <p>High Risk</p>
      </div>
    </div>
  );
};

export default RiskLevelLegend;