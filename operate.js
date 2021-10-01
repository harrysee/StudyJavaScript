console.log('my'+'cat');
console.log('my'+2);
console.log(`string Iiterals:
''''
1+2 = ${1+2}`);
console.log("'ellie's \n\tbook");

//2 Numeric operators
// 사칙연산

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
    // counter 먼저 더하고 넣기
const postIncrement = counter++;
    //counter먼저 넣고 더하기

//4. Assigment operators
let x =3;
let y =6;

//5. or 연산자
// || : 조건 중 처음이라도 true를 만나면 빠져나온다
// 헤비한 조건은 뒤로 배치하기
value1 = true;
value2 = 3<1
console.log(`or : ${value1 || value2 || check() }`)

// and 연산자
// || : 조건 중 처음이라도 false를 만나면 빠져나온다
// 헤비한 조건은 뒤로 배치하기
console.log(`and : ${value1 || value2 || check() }`)

function check(){
    return true;
}

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
//타입이 달라도 값만 같으면 true 
console.log(stringFive == numberFive); //true : 타입은 다르지만 안에 값은 같아서
console.log(stringFive != numberFive); //false

//웬만하면 이걸 많이 사용하기
// === strict equality no type conversion
// 값이 같아도 타입으로 다르면 false
console.log(stringFive === numberFive); //false : 타입이 다르다
console.log(stringFive !== numberFive); // true

//object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);  //false : 들어있는 주소가 다르니까
console.log(ellie1 === ellie2);  //false : 가리키는 주소가 다르니까
console.log(ellie1 == ellie2);  //true : 들어있는 주소가 같다


//equality - puzzler
console.log(0 == false)     //true
console.log(0 === false)    //false
console.log('' == false)    //true
console.log('' === false)   //false
console.log(undefined == false)     //true
console.log(undefined === false)    //false

//8. Conditional operators : if
//if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('welcom, Elie!');
}else if(name ==='coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkwnon');
}

//9. Ternary operator:?
console.log(name === 'ellie' ? 'yes' : 'no');

//10. switch
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('default');
}

//11. Loops
// while 
let i = 10;
while(i>0){
    console.log(i);
    i--;
}
//for
for(i = 3; i>0; i--){
    console.log(`for: ${i}`)
}

for (let i = 0; i < 10; i++) {
    if(i===8){
        break;
    }
    if(i%2===0){
        continue;
    }
    console.log(i)
}