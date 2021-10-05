//1. Function declaration
/* 함수이름은 되도록 동사로 지정해줘야한다. doSomething 등
   함수는 object의 일종이다
*/

function printHello(){
    console.log('Hello');
}

function log(message){
    console.log(message);
}
print(log('Hello'));

//2 . parameters
//premitive parameters: 값을 그대로 전달한다.
// object parameters: 주소를 통해서 전달된다
function changeName(obj){
    obj.name ='coder';
}

const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters(added in ES6)
//초기값을 설정할 수 있다
function showMessage(message, from = 'unknown'){ 
    console.log(`${message} by ${from}`)
}

// 4. Rest parameters
// 동적인 배열형태로 전달받는다
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    // 간단하게 for 돌리기 : 배열값을 한개씩 가져오는 것
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=> console.log(arg)); //간단하게 함수 출력하기
}

printAll('dream','is','good');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼수있다.
// 블럭 안에서 생성한 let 변수는 블럭에서만 사용가능
// 블럭 밖에서 생성한 let 변수는 안밖 모두 사용가능
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    //중첩된 함수
    function printAnother(){
        console.log(message);
    }
}

//6. Return a value
// 기본적으로 모든 함수에는 리턴하지않는 return undefine이 적용되어있다
//하지만 리턴가능 ㅋ
functionsum(a+b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);

// 7. Early return, early exit
// 블록안에서 코드 쓰는것은 별로 좋지않다
//조건에 맞지 않으면 먼저 리턴하기
//bad
function ungradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good
function ungradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic...
}

// 8. Function expression
// 함수를 변수에다가 바로 할당하기
// 변수를 함수처럼 사용할수있다 , 반대도 가능
const print = function(){   //익명함수를 사용함
    console.log('print');
};
print();    // 함수가 선언되기전에 호출해도 호출이 가능하다
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))

// 8. Callback function using fuction expression
// 콜백함수 : 함수를 피라미터로 받아서 상황에 맞게 사용가능하다 
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes!');
};

const printNo = function print(){   //네임드 함수 사용 : 재사용할때 사용
    console.log('no!');
    //print();
};
randomQuiz('wrong',printYes, printNo);  // 각각 콜백함수를 넣어준다
randomQuiz('love you',printYes, printNo);

// Arrow function
// 블럭없이 한줄함수- 익명함수로 만들기 : 에로우(=>) 사용
// 변수 = (피라미터) => 실행할 문장
const simplePrint = ()=> console.log('simplePrint!');
const add = (a,b) => a+b; // a+b 리턴하기

// IIFE: Immediately Invoked Function Expression 
// 선언함과 동시에 호출하기
(function hello(){
    console.log('IIFE');
})();