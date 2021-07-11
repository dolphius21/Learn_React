import React from 'react';

export default function Card({ onCardClick }) {
  return (
    <div className="card">
      <button onClick={onCardClick}>Click me</button>
    </div>
  );
}
