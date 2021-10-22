'use strict'

// JavaScript is synchronous. 
// Execute the code block by orger after hoisting.
// hoistion: var, function declaration = var변수와 함수'
console.log('1');
setTimeout(() => console.log('2'), 1000);   // 1초후에 출력
console.log('3');

// Synchronous callback (동기적인 콜백)
function printImmediately(print){   // 이 함수선언은 위의 1,2,3보다 위에 호스팅됨
    print();
}
printImmediately(()=> console.log('hello'));    // 리턴 받은 것들을 통해 콜백함수 작성

// Asynchronous callback (비동기적인 콜백)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'),2000);