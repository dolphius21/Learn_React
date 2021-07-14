import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

function App() {
  // To give you a way to re-render the component and test your memory leak
  const [random, setRandom] = useState(Math.random());

  useEffect(() => {
    const eventLog = (event) => console.log(window.scrollY);

    window.addEventListener('scroll', eventLog);

    return () => window.removeEventListener('scroll', eventLog);
  });

  // to make sure there's a scroll bar, we're going to add dummy content
  const dummyItems = Array.from({ length: 50 });

  return (
    <>
      <button onClick={() => setRandom(Math.random())}>
        Re-render component
      </button>
      <h2>List of products</h2>
      <ul style={{ lineHeight: '40px' }}>
        {dummyItems.map((item, index) => (
          <li key={index}>Lorem ipsum dolor sit amet.</li>
        ))}
      </ul>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
