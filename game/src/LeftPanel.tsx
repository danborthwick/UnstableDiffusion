
import React from 'react';
import './App.css';
import './LeftPanel.css';

const LeftPanel: React.FC = () => {
  return (
    <div className="panel left-panel">
      <div className="image-grid">
        <div className="image-grid-item">
          <img src="data/option1.webp" alt="Grid 1" />
        </div>
        <div className="image-grid-item">
          <img src="/data/option1.webp" alt="Grid 2" />
        </div>
        <div className="image-grid-item">
          <img src="/data/option1.webp" alt="Grid 3" />
        </div>
        <div className="image-grid-item">
          <img src="/data/option1.webp" alt="Grid 4" />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
