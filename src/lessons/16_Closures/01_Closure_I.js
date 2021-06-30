/*
 * @param {string} first_name
 * @param {string} last_name
 */
function getUser(first_name, last_name) {
  function getFullName() {
    //TODO: return full name (with a space between first and last name)
    return `${first_name} ${last_name}`;
  }

  return {
    first_name: first_name,
    last_name: last_name,
    full_name: getFullName()
  };
}

// sample usage (do not modify)
console.log(getUser('Sam', 'Doe'));
