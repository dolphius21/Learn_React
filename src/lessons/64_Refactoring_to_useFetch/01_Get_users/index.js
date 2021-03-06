import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import useFetch from './useFetch';

function App() {
  const [users, setUsers] = useState();
  const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get('users.json')
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
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
