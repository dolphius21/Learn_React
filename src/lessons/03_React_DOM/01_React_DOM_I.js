import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('p', {}, 'Hello World');
const root = document.querySelector('#react-root');
ReactDOM.render(element, root);
