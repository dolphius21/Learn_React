import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/users.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
