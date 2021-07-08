function question1() {
  const grades = [10, 20, 30];
  const report = grades;
  grades.push(40);
  // return the result of grades === report
  return true;
}

function question2() {
  const user = {
    id: 1,
    name: 'Sam'
  };
  const admin = user;
  admin.is_admin = true;
  const guest = admin;
  // return the result of guest === user
  return true;
}
