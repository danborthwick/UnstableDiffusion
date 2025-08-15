
import React from 'react';
import './App.css';
import './LeftPanel.css';

const LeftPanel: React.FC = () => {
  return (
    <div className="panel left-panel">
      <div className="image-grid">
        <div className="image-grid-item">
          <img src="data/option1.webp" alt="Grid 1" />
          <div className="image-label">A</div>
        </div>
        <div className="image-grid-item">
          <img src="/data/option1.webp" alt="Grid 2" />
          <div className="image-label">B</div>
        </div>
        <div className="image-grid-item">
          <img src="/data/option1.webp" alt="Grid 3" />
          <div className="image-label">C</div>
        </div>
        <div className="image-grid-item">
          <img src="/data/option1.webp" alt="Grid 4" />
          <div className="image-label">D</div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
