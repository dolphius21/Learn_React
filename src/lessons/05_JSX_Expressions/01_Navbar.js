import React from 'react';

function getNavbar(user) {
  return <div>Logged in as {user.name}. Log out</div>;
}

// sample usage (do not modify)
const element = getNavbar({
  name: 'Sam',
  age: 34
});
console.log(element);
