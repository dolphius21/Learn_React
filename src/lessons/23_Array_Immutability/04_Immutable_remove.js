/*
 * @param {array} apps
 * @param {string} app
 */
function removeApp(apps, appToRemove) {
  return apps.filter((app) => app !== appToRemove);
}

// Sample usage
const apps1 = ['Calculator', 'Phone'];
// Remove Calculator
const newApps1 = removeApp(apps1, 'Calculator');
console.log(newApps1);
// check if the operation was immutable
console.log(newApps1 === apps1); // immutable when it returns false

const apps2 = ['Whatsapp', 'Maps', 'Calculator'];
// Remove Maps
const newApps2 = removeApp(apps2, 'Maps');
console.log(newApps2);
// check if the operation was immutable
console.log(newApps2 === apps2); // immutable when it returns false
