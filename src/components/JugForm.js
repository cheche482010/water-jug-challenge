import React, { useState } from 'react';
import InputField from './InputField';
import './css/JugForm.css';

function JugForm({ onSolve }) {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [error, setError] = useState('');

  const handleSolve = () => {
    if (!x || !y || !z) {
      setError('Please fill in all fields.');
      return;
    }
    const parsedX = parseInt(x);
    const parsedY = parseInt(y);
    const parsedZ = parseInt(z);

    if (isNaN(parsedX) || isNaN(parsedY) || isNaN(parsedZ)) {
      setError('Values must be integers.');
      return;
    }

    if (parsedX <= 0 || parsedY <= 0 || parsedZ <= 0) {
      setError('Values must be greater than zero.');
      return;
    }

    setError('');
    onSolve(parsedX, parsedY, parsedZ);
  };

  return (
    <div className="jug-form-container">
      <InputField label="X-gallon Jug" value={x} onChange={(e) => setX(e.target.value)} />
      <InputField label="Y-gallon Jug" value={y} onChange={(e) => setY(e.target.value)} />
      <InputField label="Z gallons" value={z} onChange={(e) => setZ(e.target.value)} />
      <button onClick={handleSolve}>Solve</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default JugForm;
