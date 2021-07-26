// URL: https://react-tutorial-demo.firebaseio.com/settings.json

function init() {
  // make the fetch request here
  fetch('https://react-tutorial-demo.firebaseio.com/settings.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

init();
