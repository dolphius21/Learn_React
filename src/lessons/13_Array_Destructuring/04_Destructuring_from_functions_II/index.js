import getPrice from './helpers.js';

function destructureTest() {
  const [price, describePrice] = getPrice();
  console.log(price);
  console.log(describePrice());
}

destructureTest();
