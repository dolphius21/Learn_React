import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  const { loggedIn } = props;
  const history = useHistory();

  function handleStartClick() {
    if (loggedIn) {
      history.push('/dashboard');
    } else {
      history.push('login');
    }
  }

  return (
    <>
      <h2>Home: {loggedIn ? 'Logged in' : 'Logged out'}</h2>
      <button onClick={handleStartClick}>Start</button>
      <hr />
    </>
  );
}
