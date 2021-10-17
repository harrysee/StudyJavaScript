// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  fruits.forEach(fruit => console.log(fruit))
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const f = fruits.split(',');
  f.forEach(fru => console.log(fru));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  score90 = students.find(s => s.score === 90);
  console.log(score90);
}

// Q6. make an array of enrolled students
{
  const eStudents = students.filter(s => s.enrolled===true);
  console.log(eStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const scores = new Array();
{
  students.forEach(s => scores.push(s.score) );
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.every(s=>s.score>=50) ? '50점 밑에 사람은 없다' : "50점 미만잡");
}

// Q9. compute students' average score
{
  let sum =0;
  students.forEach(s => sum+=s.score);
  console.log(sum/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(scores.join(', '));
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  scores.sort();
  console.log(scores.join(', '));
}