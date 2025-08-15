import React from 'react';
import './App.css';
import ImageAnimation, { ImageAnimationRef } from './ImageAnimation';


export const imageAnimationRef = React.createRef<ImageAnimationRef>();

const RightPanel: React.FC = () => {
  return (
    <div className="panel right-panel">
  <ImageAnimation ref={imageAnimationRef} />
    </div>
  );
};

export default RightPanel;
