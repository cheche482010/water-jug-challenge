import React from 'react';
import './css/Solution.css';

function Solution({ solution }) {
  return (
    <div className="solution-container">
      {solution.length > 0 ? <SolutionTable solution={solution} /> : <p className="no-solution">No solution found.</p>}
    </div>
  );
}

export default Solution;

function SolutionTable({ solution }) {
  if (solution.length === 0) {
    return null;
  }

  return (
    <table className="solution-table">
      <thead>
        <tr>
          <th>Bucket x</th>
          <th>Bucket y</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        {solution.map((step, index) => (
          <tr key={index}>
            <td>{step.bucketX}</td>
            <td>{step.bucketY}</td>
            <td>{step.explanation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
