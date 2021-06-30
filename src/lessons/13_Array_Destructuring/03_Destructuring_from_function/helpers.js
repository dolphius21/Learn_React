export default function getAge() {
  const age = 18;

  function describeAge() {
    return `The age is ${age} years old`;
  }

  //return age and a function that describes the age
  return [age, describeAge];
}
