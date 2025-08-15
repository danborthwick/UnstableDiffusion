import './App.css';

function App() {
  return (
    // Container with zero margin/padding to ensure full viewport usage
    <div className="fixed inset-0 overflow-hidden">
      {/* Horizontal flex container to create side-by-side layout */}
      <div className="flex flex-row w-full h-full">
        
        {/* Left panel with purple background */}
        <div className="w-1/2 h-full bg-purple-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-4">Left Panel</h1>
            <p className="text-xl">Full height with purple background</p>
          </div>
        </div>
        
        {/* Right panel with teal background */}
        <div className="w-1/2 h-full bg-teal-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-4">Right Panel</h1>
            <p className="text-xl">Full height with teal background</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
