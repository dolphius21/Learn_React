import getAge from './helpers.js';

function destructureTest() {
  // TODO: destructure the result of getAge into age and describeAge
  const [age, describeAge] = getAge();
  console.log(age);
  console.log(describeAge());
}

destructureTest();
