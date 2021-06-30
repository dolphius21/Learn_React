function getUser(age) {
  function getCanVote() {
    return age >= 18;
  }

  return {
    can_vote: getCanVote()
  };
}

// sample usage (do not modify)
console.log(getUser(20));
