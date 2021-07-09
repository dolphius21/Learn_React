/*
 * @param {object} user
 * @param {string} type
 */
function attachUserType(user, type) {
  return { ...user, type: type };
}

// Sample usage
const user1 = {
  name: 'Sam',
  has_paid: true
};
const newUser1 = attachUserType(user1, 'admin');
console.log(newUser1);
// check if the operation was immutable
console.log(newUser1 === user1); // immutable when it returns false

const user2 = {
  name: 'Alex',
  has_paid: true
};
const newUser2 = attachUserType(user2, 'member');
console.log(newUser2);
// check if the operation was immutable
console.log(newUser2 === user2); // immutable when it returns false
