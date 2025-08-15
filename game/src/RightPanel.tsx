import React from 'react';
import './App.css';
import ImageAnimation from './ImageAnimation';

export const AnswerComponentRef = React.createRef<{ startAnim: () => void }>();

const RightPanel: React.FC = () => {
  return (
    <div className="panel right-panel">
        <ImageAnimation />
    </div>
  );
};

export default RightPanel;
