/*
 * @param {array} name
 */
function printUserDetails(user) {
  console.log(user);
  // TODO: write your code below this line
  const [name, age] = user;
  return `${name} is ${age} years old.`;
}

// Sample usage (do not modify)
console.log(printUserDetails(['Sam Doe', 31]));
console.log(printUserDetails(['John Malaga', 23]));
