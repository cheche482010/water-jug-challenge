import React, { useState } from 'react';
import JugForm from './components/JugForm';
import Solution from './components/Solution';

function App() {
  const [solution, setSolution] = useState([]);
  const [hasSolved, setHasSolved] = useState(false);
  const [hasCleared, setHasCleared] = useState(false); 

  const solveWaterJugChallenge = (x, y, z) => {
    const steps = [];
    let jugX = 0;
    let jugY = 0;
    const visitedStates = new Set();
    let solutionFound = true;

    while (jugX !== z && jugY !== z) {
      const currentState = `${jugX}-${jugY}`;
      if (visitedStates.has(currentState)) {
        solutionFound = false;
        break;
      }
      visitedStates.add(currentState);

      if (jugX === 0) {
        jugX = x;
        steps.push({ bucketX: jugX, bucketY: jugY, explanation: `Fill bucket x` });
      } else if (jugY === y) {
        jugY = 0;
        steps.push({ bucketX: jugX, bucketY: jugY, explanation: `Empty bucket y` });
      } else {
        const amountToTransfer = Math.min(jugX, y - jugY);
        jugX -= amountToTransfer;
        jugY += amountToTransfer;
        steps.push({ bucketX: jugX, bucketY: jugY, explanation: `Transfer from bucket x to bucket y` });
      }
    }

    setHasSolved(true);

    if (solutionFound) {
      setSolution(steps);
    } else {
      setSolution([]);
    }
  };

  const handleClear = () => {
    setSolution([]); 
    setHasCleared(true);
    setHasSolved(false); 
  };

  return (
    <div className="App">
      <h1>Water Jug Challenge</h1>
      <JugForm onSolve={solveWaterJugChallenge} onClear={handleClear} />
      <Solution solution={solution} hasSolved={hasSolved} hasCleared={hasCleared} />
    </div>
  );
}

export default App;
