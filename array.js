'use strict';

// Array 😁 : 선언된 곳으로 가서 관련함수랑 설명보기 

// 1. Declaration : 배열생성
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['사과' ,'망고'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits

// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (const fruit of fruits) {
    console.log(fruit);
}
// c. forEach
// 콜백함수를 받아온다
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// 배열 아이템 각각 callback 함수를 호출해준다 
fruits.forEach(function(fruit, index) {
    console.log
});

// 실행문장이 한줄일 경우 에로우(=>)를 쓰고 가로 없어도됨
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.puth('감 ','복숭아');
console.log(fruits);

// pop: remove an item from the end
// 지워지는 아이템이 리턴이됨
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// shift : pop, push 에 비해 속도가 후달리다
// unshift : add an item to the benigging
fruits.unshift('딸기','레몬');
console.log(fruits);

// shift : remove an item from the benigging
// 앞에서부터 데이터를 삭제하는 것은 굉장히 느리다
fruits.shift();
fruits.shift();
console.log(`지운 후 과일 : ${fruits}`);

// splice : remove an item by index position
// 중간에 있는 아이템 지우거나 삽입하기
// Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
/* <인자>
* 시작하는 인덱스번호,
* 몇개지울건지(deleteCount에 ?가 있기 때문에 지정해도 되고 안해도됨)
* but, deleteCount 를 지정하지 않으면 지정한 인덱스부터 끝까지 다지운다.
* 추가로 그 뒤에 그자리에 넣을 item들을 써도된다*/
fruits.push('🍎','🍉');
fruits.splice(1);
console.log(fruits);
fruits.splice(1, 1, '🍍','🥝');
console.log(fruits);

// combine two arrays : 배열 두개 합치기 
// concat(...items: ConcatArray<T>[]): T[];
const fruits2 = ['🍇','🍑'];
const newFruits = fruits.concat(fruits2); 
console.log(fruits);

// 5. Searching
// find the index
// 없는 값을 검색하면 -1이 반환됨
// 검색하면 제일 앞에 있는 찾는값의 위치가 반환됨
console.log(fruits);
console.log(fruits.indexOf('🍍'));
console.log(fruits.indexOf('🥝'));
console.log(fruits.indexOf('🍉'));

// lastIndexOf
// 검색하면 제일 뒤에 있는 찾는값의 위치가 반환됨
console.clear();
fruits.push('🍉');
console.log(fruits);
console.log(fruits.lastIndexOf('🍍'));