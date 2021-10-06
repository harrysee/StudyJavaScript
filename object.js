'use strict';

// 1. Literals and properties
// 생성 방법 
// 1. {} 가로를 이용해서 만들기 : 'object literal' sytax
// 2. new 를 이용해서 만들기 : 'object constructor' syntax
// object = {key : value };
const obj1 ={};             //1 
const obj2 = new Object();  //2

const ellie = {name:'ellie', age:4};
print(ellie);

// object에 뒤늦게 추가할수있다. 하지만 이런방법은 별로
ellie.hasJob = true;    
console.log(ellie.hasJob);

// object에 삭제할 수도 있다. 하지만 이런방법은 별로
delete ellie.hasJob;    
console.log(ellie.hasJob);

// ---------------------------------------------------------
// 2. Computed properties
// key should be always string
console.log(ellie.name);        //dot ( . ) 을 통해서 접근
console.log(ellie['name']);     // key를 통해서 접근가능하다 배열처럼
ellie['hasjob'] = true;         // 새로운 값을 추가할때 없는 키에 값을 할당하면됨

// ------------------------------------------------------------
// 3. Property value shorthand
const person1 = { name: 'bob',age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 = new Person('jon' , 66);

// 위와 같은 동작을 한다 이름과 나이 생성 함수
// 이름과 나이를 받아서 object로 리턴함
// key와 value가 같다면 생략해도 괜찮다.
function makePerson(name, age){
    return{
        name,   // name : name
        age,    // age : age
    };
}

// ----------------------------------------------------------------
// 4. Constructor function
// 위와 같이 순수하게 Object를 생성하는 함수일때
// 1) 이름을 대문자로 쓴다
// 2) this를 이용해서 클래스를 이용해서 만든것처럼할수있다
function Person(name, age){
    this.name = name;
    this.age = age;
}

// -----------------------------------------------------------------
// 5. in operator : property existence check ( key in obj)
// 해당 키가 오른쪽 object에 포함되어있는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); //false

// ------------------------------------------------------------------
// 6. for..in vs for..of
// for (let key in obj)
console.clear();
// for문이 돌때마다 배열/Object 안에 있는 값들을 한개씩 꺼내와줌
for(let key in ellie){
    console.log(key);   // 모든 키 출력
}

// for(let value of array) : 순차적으로 데이터가 담겨있는 배열/리스트에서 가져오기
// for문 돌때 한번에 가져와서 한개씩 사용하기
const array = [1,2,3,4,5];
for(let value of array){
    console.log(value)
}

// --------------------------------------------------------------------
// 7. Fun cloning
/* Object.assign(dest, [obj1, obj2, obj3...])
   assign<T, U>(target: T, source: U): T & U;
   assign(타겟, 복사할값) -- 복사할 값 여러개 가능
*/

// 원래는 밑에처럼 복사를 한다면 같은값을 가리키는 완전똑같은 주소가 들어감
// 따라서 user2의 값을 바꾸면 user의 값도 바뀜
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';

// 값만 가져오는 방법
// old way 
const user3 = {};
for(let key in user){
    user3[key] = user[key];     // 값 복사하는 옛날방법
}
console.clear();
console.log(user3);

// good way
const user4 = Object.assign({}, user);
console.log(user4);

// 여러개도 한번에 복사가능
// 여러개가 모아서 들어가는 것이 아님★
// 여러개를 복사하면 앞에 넣었던 키와 같은 키가 뒤에복사할값에 잇는경우엔 그 키의 값을 덮어씌움
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

