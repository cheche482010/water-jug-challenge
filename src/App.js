import React, { useState } from 'react';
import JugForm from './components/JugForm';
import Solution from './components/Solution';

function App() {
  const [solution, setSolution] = useState([]);

  const solveWaterJugChallenge = (x, y, z) => {
    const steps = [];
    let jugX = 0;
    let jugY = 0;

    while (jugX !== z && jugY !== z) {
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

    setSolution(steps);
  };

  return (
    <div className="App">
      <h1>Water Jug Challenge</h1>
      <JugForm onSolve={solveWaterJugChallenge} />
      <Solution solution={solution} />
    </div>
  );
}

export default App;
