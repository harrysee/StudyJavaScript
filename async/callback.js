'use strict'

// JavaScript is synchronous. 
// Execute the code block by orger after hoisting.
// hoistion: var, function declaration = var변수와 함수'
console.log('1');
setTimeout(() => console.log('2'), 1000); // 1초후에 출력
console.log('3');

// Synchronous callback (동기적인 콜백)
function printImmediately(print) { // 이 함수선언은 위의 1,2,3보다 위에 호스팅됨
    print();
}
printImmediately(() => console.log('hello')); // 리턴 받은 것들을 통해 콜백함수 작성

// Asynchronous callback (비동기적인 콜백)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example 
class UserStorage {
    // 해당 정보가 맞으면 로그인하는 함수
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error(`not found`));
            }
        }, 2000);
    }

    // 사용자 정보 가져오기
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({
                    name: 'ellie',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000); // 1초뒤에 코드블럭이 실행되며 각각 오브젝트를 인자로 전달함
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id'); // 사용자 입력받는 함수
const password = prompt('enter your password'); // 사용자 입력받는 함수
userStorage.loginUser(
    id,
    password,
    // 로그인 성공했을 때 콜백함수 인자: user
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${user.name}, you have a ${user.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    }, (error) => {
        console.log(error)

    });