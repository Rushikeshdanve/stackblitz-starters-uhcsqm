function sortStudents(students) {
  return students.sort((a, b) => {
    const totalA = a.biology + a.chemistry;
    const totalB = b.biology + b.chemistry;

    if (totalA !== totalB) {
      return totalB - totalA;
    }

    if (a.biology !== b.biology) {
      return b.biology - a.biology;
    }

    if (a.chemistry !== b.chemistry) {
      return b.chemistry - a.chemistry;
    }

    const dateA = new Date(a.dob.split('-').reverse().join('-'));
    const dateB = new Date(b.dob.split('-').reverse().join('-'));

    return dateA - dateB;
  });
}

let testCase1 = [
  { name: 'Leo Messi', dob: '31-12-1995', biology: 95, chemistry: 91 },
  { name: 'Cristiano Ronaldo', dob: '31-05-1992', biology: 90, chemistry: 81 },
  { name: 'Virat Kohli', dob: '31-12-1995', biology: 95, chemistry: 96 },
  { name: 'Rohit Sharma', dob: '31-12-1995', biology: 85, chemistry: 86 },
  { name: 'Viswanathan Anand', dob: '12-12-1994', biology: 99, chemistry: 10 },
];

let testCase2 = [
  { name: 'Leo Messi', dob: '31-12-1995', biology: 100, chemistry: 80 },
  { name: 'Cristiano Ronaldo', dob: '31-05-1992', biology: 80, chemistry: 100 },
  { name: 'Virat Kohli', dob: '31-12-1995', biology: 30, chemistry: 40 },
  { name: 'Rohit Sharma', dob: '31-12-1995', biology: 40, chemistry: 30 },
  { name: 'Viswanathan Anand', dob: '12-12-1994', biology: 99, chemistry: 10 },
];

console.log(sortStudents(testCase1));
console.log(sortStudents(testCase2));
