import React from 'react';
import Algorithm from './components/Algorithm';
import JugForm from './components/JugForm';
import Solution from './components/Solution';

function App() {
  const {
    solution,
    hasSolved,
    hasCleared,
    solveWaterJugChallenge,
    handleClear,
  } = Algorithm();

  return (
    <div className="App">
      <h1>Water Jug Challenge</h1>
      <JugForm onSolve={solveWaterJugChallenge} onClear={handleClear} />
      <Solution solution={solution} hasSolved={hasSolved} hasCleared={hasCleared} />
    </div>
  );
}

export default App;
