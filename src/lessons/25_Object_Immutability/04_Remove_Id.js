/*
 * @param {object} user
 */
function removeId(user) {
  const { id, ...newUser } = user;
  return newUser;
}

// Sample usage
const user1 = {
  id: 1,
  name: 'Sam',
  type: 'member'
};
const newUser1 = removeId(user1);
console.log(newUser1);
// check if the operation was immutable
console.log(newUser1 === user1); // immutable when it returns false

const user2 = {
  id: 2,
  name: 'Alex',
  age: 21
};
const newUser2 = removeId(user2);
console.log(newUser2);
// check if the operation was immutable
console.log(newUser2 === user2); // immutable when it returns false
