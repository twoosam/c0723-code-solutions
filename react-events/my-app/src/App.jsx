import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CustomButton from './CustomButton';

function handleCustomClick(text) {
  alert(`Clicked ${text}`);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <CustomButton onCustomClick={handleCustomClick} text="I" color="red" />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="know"
        color="green"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="React!"
        color="blue"
      />
    </>
  );
}

export default App;
