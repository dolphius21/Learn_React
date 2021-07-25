import React from 'react';
import ReactDOM from 'react-dom';
import StoreFront from './StoreFront.js';

function App() {
  return <StoreFront />;
}

// Specific to this project: makes it possible for you to reload the page
const root = document.querySelector('#react-root');
const reload = () => {
  console.log('Page reloaded');
  ReactDOM.unmountComponentAtNode(root);
  ReactDOM.render(<App />, root);
};
reload();
const button = document.createElement('button');
button.textContent = 'Reload page';
button.addEventListener('click', reload);
document.body.insertAdjacentElement('afterbegin', button);
