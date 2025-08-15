import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="p-6 bg-white rounded-lg shadow-md">
        <img src={logo} className="h-24 w-24 animate-spin" alt="logo" />
        <p className="text-gray-700 my-4">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-500 hover:text-blue-700 transition-colors"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
