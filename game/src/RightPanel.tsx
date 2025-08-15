import React from 'react';
import './App.css';

export const AnswerComponentRef = React.createRef<{ startAnim: () => void }>();

const RightPanel: React.FC = () => {
  return (
    <div className="panel right-panel">
      <AnswerComponent ref={AnswerComponentRef} />
    </div>
  );
};

export default RightPanel;

const AnswerComponent = React.forwardRef<{ startAnim: () => void }, {}>((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    startAnim: () => {
      // Animation logic here
      console.log('Animation started!');
    }
  }));
  return <div>Answers to go here</div>;
});