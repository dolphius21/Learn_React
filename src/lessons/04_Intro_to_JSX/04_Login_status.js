import React from 'react';

/*
 * @param {boolean} is_loggedin
 */
function getLoginStatus(is_loggedin) {
  return is_loggedin ? <p>You are logged in</p> : <a href="/login">Login</a>;
}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));
