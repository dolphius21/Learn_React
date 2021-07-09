/*
 * @param {object} user
 */
function makeAdmin(user) {
  return { ...user, type: 'admin' };
}

// Sample usage
const user1 = {
  name: 'Sam',
  type: 'member'
};
const newUser1 = makeAdmin(user1);
console.log(newUser1);
// check if the operation was immutable
console.log(newUser1 === user1); // immutable when it returns false

const user2 = {
  name: 'Alex',
  type: 'editor'
};
const newUser2 = makeAdmin(user2);
console.log(newUser2);
// check if the operation was immutable
console.log(newUser2 === user2); // immutable when it returns false
