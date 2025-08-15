
import React, { useEffect, useState } from 'react';
import './App.css';
import './LeftPanel.css';
import { imageAnimationRef } from './RightPanel';

const gameLogic = (label: string) => {
  if (imageAnimationRef.current) {
    imageAnimationRef.current.handleImageClick(label);
  }
};

const LeftPanel: React.FC = () => {
  const [timer, setTimer] = useState(20);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || timer === 0) return;
    const interval = setInterval(() => {
      setTimer(t => t > 0 ? t - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [started, timer]);

  const handleStart = () => {
    setStarted(true);
    setTimer(20);
  };

  return (
    <div className="panel left-panel">
      <div className="image-timer-wrapper">
        <div className="image-grid">
          <div className="image-grid-item">
            <img src="data/option1.webp" alt="Grid 1" onClick={() => gameLogic('A')} style={{cursor: 'pointer'}} />
            <div className="image-label">A</div>
          </div>
          <div className="image-grid-item">
            <img src="/data/option2.webp" alt="Grid 2" onClick={() => gameLogic('B')} style={{cursor: 'pointer'}} />
            <div className="image-label">B</div>
          </div>
          <div className="image-grid-item">
            <img src="/data/option3.webp" alt="Grid 3" onClick={() => gameLogic('C')} style={{cursor: 'pointer'}} />
            <div className="image-label">C</div>
          </div>
          <div className="image-grid-item">
            <img src="/data/option4.webp" alt="Grid 4" onClick={() => gameLogic('D')} style={{cursor: 'pointer'}} />
            <div className="image-label">D</div>
          </div>
        </div>
        <div className="countdown-timer">
          {!started ? (
            <button className="start-button" onClick={handleStart}>Start</button>
          ) : (
            timer > 0 ? `${timer}s` : '😰'
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
