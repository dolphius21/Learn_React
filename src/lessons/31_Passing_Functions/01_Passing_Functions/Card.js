import React from 'react';

export default function Card(props) {
  if (props.onCardLoad) {
    props.onCardLoad();
  }

  return <div className="card">Card content here</div>;
}
