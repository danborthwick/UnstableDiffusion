
import './App.css';
import LeftPanel from './LeftPanel';

function App() {
  return (
    <div className="fullscreen-layout">
  <LeftPanel />
      <div className="panel right-panel">
        {/* Right panel content */}
        <h2>Right Panel</h2>
      </div>
    </div>
  );
}

export default App;
