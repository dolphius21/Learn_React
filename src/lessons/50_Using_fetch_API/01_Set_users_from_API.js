import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/users.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  // only for this chapter (do not modify)
  return JSON.stringify(users || '');
}

render(<App />, document.querySelector('#react-root'));
