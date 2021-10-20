// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);    // boolean타입도 변환가능
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

// object -> json 
// key : value
// 자바스크립트 내장함수 및 함수는 변환되지못한다.
// stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
// key - value

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol : Symbol('id'),
    jump: () =>{
        console.log(`${name} can jump!`);
    },
};

//rabbit의 모든 key,value가 콜백함수로 전달됨
json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key : ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key : ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // date만 스트링에서 오브젝트로 만드는 콜백함수
});
console.log(obj);
rabbit.jump();  // 시리얼 될때 함수가 포함되어있지 않기에 가져올수도 없다

//obj
console.log(rabbit.birthDate.getDate());    // Date 내장함수 사용가능
console.log(obj.birthDate);              // json으로 만든 스트링이 할당됨
// rabbit을 스트링으로 json을 만들었기 때문에 스트링으로 가져옴
// 하지만 rabbit안에있는 Date()는 오브젝트이기 때문에 새로운 Object로 만들수있다.