/*
 * @param {array} apps
 * @param {string} app
 */
function addApp(apps, app) {
  return [...apps, app];
}

// Sample usage
const apps1 = ['Calculator', 'Phone'];
const newApps1 = addApp(apps1, 'Preferences');
console.log(newApps1);
// check if the operation was immutable
console.log(newApps1 === apps1); // immutable when it returns false

const apps2 = ['Whatsapp', 'Calculator'];
const newApps2 = addApp(apps2, 'Maps');
console.log(newApps2);
// check if the operation was immutable
console.log(newApps2 === apps2); // immutable when it returns false
