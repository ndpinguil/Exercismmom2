// src/App.tsx
import React from 'react';
import CharacterGenerator from './components/CharacterGenerator';

const App: React.FC = () => {
  return (
    <div className="App">
      <CharacterGenerator />
    </div>
  );
};

export default App;