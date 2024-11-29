import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState(''); // Gerencia o valor do input de busca

  const searchPressed = () => {
    console.log('Pesquisando...', search);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        <h1>Weather App</h1>

        {/* SEARCHBOX */}
        <div>
          <input
            type="text"
            placeholder="Enter city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button onClick={searchPressed}>Search</button>

        {/* LOCALIZAÇÃO E CLIMA (estático por enquanto) */}
        <p>São Paulo, BR</p>
        <p>32°C</p>
        <p>SUNNY</p>
      </header>
    </div>
  );
}

export default App;
