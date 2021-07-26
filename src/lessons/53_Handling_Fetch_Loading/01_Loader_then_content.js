import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Loader from './Loader';

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/users.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setUsers(data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
