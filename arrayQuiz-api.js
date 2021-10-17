'use strict';

// Q1. make a string out of an array
{
  // 배열을 문자열로 바꾸기
  // join(separator?: string): string;
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  //split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  //reverse : 배열 자체를 뒤집어서 정렬
  // result == array
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  // slice(start?: number, end?: number): T[];
  // start부터 end 미만까지 자르고, 안적을경우 맨앞,맨뒤로 간주
  const array = [1, 2, 3, 4, 5];
  let result = array.slice(2,5);
  console.log(result);
  console.log(array);

  // 다른 풀이 : 앞에 두개 없애기
  // splice(start: number, deleteCount?: number): T[];
  // start부터 end 미만까지 삭제 후 리턴
  result = array.splice(0,2);
  console.log(result);
  console.log(array);

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
  //find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
  // 첫번째로 찾아진 요소를 리턴/ 못찾으면 undefined
  const result = students.find(function(student, index){
    return student.score===90;
  });
  console.log(result);

  // arrow function 사용하기
  const result2 = students.find(student => student.score === 90);
  console.log(result2);
}

// Q6. make an array of enrolled students
{
  // filter : 원하는 값들을 모두 찾아서 리턴
  const result = students.filter(s => s.enrolled===true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  // map : 배열안에 있는 모든 요소들을 콜백함수를 호출하면서 각각의 요소들을 모두 대체시킨다
  // **주의 : 콜백함수 속 인자는 알아보기 쉽게쓰기
  const result = students.map(student => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // every : 모두 해당 조건을 만족하면 true 
  // => 모두 50점 이상인지 처리하는 콜백함수를 넣음
  const result = students.every(student => student.score>=50);
  console.log(result);

  // some : 하나라도 조건을 만족하면 true 
  // => 하나라도 50점 미만인지 처리하는 콜백함수를 넣음
  const result2 = students.some(student => student.score<50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
  // 배열 하나하나를 돌면서 값을 조작할때 사용
  // 인자 : 콜백함수(이전값, 현재값), 초기값
  // reduce : 요소를 순회하며 값을 리턴한값을 다음 인자(이전값변수)로 넘겨줘서 누적시킨다.
  const result = students.reduce(((prev, curr) => prev+curr.score),0);
  console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // api들을 섞어서 호출할수도 잇다 : 한눈에 보기쉽고, 가독성up
  const result = students
    .map(student => student.score)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // sort(compareFn?: (a: T, b: T) => number): this;
  // 1) a , b를 넣어서 a - b => 마이너스가 나올때만 b가 더큰걸로 정렬됨(오름차순)
  // 2) a , b를 넣어서 b - a => 마이너스가 나올때만 a가 더큰걸로 정렬됨(내림차순)
  const result = students.map(student => student.score).sort().join();
  console.log(result);
}