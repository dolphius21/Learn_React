import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#react-root');
const title = React.createElement('h1', {}, 'Online Supermarket');
ReactDOM.render(title, root);
