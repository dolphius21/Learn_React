// URL: https://react-tutorial-demo.firebaseio.com/users.json

function init() {
  // make the fetch request here
  fetch('https://react-tutorial-demo.firebaseio.com/users.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

init();
