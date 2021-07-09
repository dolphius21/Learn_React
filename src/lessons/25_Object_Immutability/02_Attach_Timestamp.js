/*
 * @param {object} user
 */
function attachTimestamps(user) {
  return { ...user, created_at: new Date(), updated_at: new Date() };
}

// Sample usage
const testUser = {
  id: 29,
  name: 'Sam',
  type: 'admin'
};
const newUser = attachTimestamps(testUser);
console.log(newUser);
// check if the operation was immutable
console.log(newUser === testUser); // immutable when it returns false
