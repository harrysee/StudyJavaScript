// async & awit 
// clear style of using promise

// 1. async 
function fetchUser(){   // 원래 비동기적으로 할려면 promise 써야함
    // 사용자가 10초정도 기다려야한다 - 동기적으로 실행되기 때문
    // Promise는 비동기적으로 실행된다.
    return new Promise((resolve, reject) => {
        resolve('ellie');
    });
    //return 'ellie';
}
// aync 사용
async function fetchUser(){   // 함수 앞에 async를 쓰면 자동으로 비동기적이됨
    return 'ellie';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await : async가 붙은 함수 안에서만 사용가능
// setTimeout이 각각 끝날때까지 기다려준다
// 원래는 타임아웃이 걸린상태로 다음으로 넘어간다.
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); // ms시간이 지나면 resolve가 전달됨
}

async function getApple(){
    await delay(1000);  // 3초있다가 리턴됨
    return '🍎';
}

async function getBanana(){
    await delay(1000);  // 3초가 끝날때까지 기다렷다가 바나나전달
    return '🍌';
}

// -- 개선할 필요가 있는 코드들
// function getBanana(){
//     return delay(1000)
//         .then(() => '🍌');
// }

// function pickFruits(){  // 한번에 가져오기
//     return getApple()
//         .then(apple => {
//             return getBanana().then(banana => `${apple} + ${banana}`)
//         })
// }

// 간단하게 다시 적기
async function pickFruits(){
    // 에러처리할려면 try - catch 쓰면됨
    const applePromise = getApple();
    const bananaPromise = getBanana();  
    // 밑에만 적으면 순차적으로 실행되서 불편함
    // 위에 먼저 적어서 한번에 다 가져온다음 그걸 밑에서 await으로 가져오기
    const apple = await applePromise;
    const banana = await bananaPromise;   
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

// Promise.all : all을 쓰면 모두 받아올때까지 기다려줌
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])    // promise들이 병렬적으로 다 받을때까지 기다려줌
    .then(fruits => fruits.join(' + '));    // +를 넣어서 가져오기
    // 받아진 것들이 모두 배열로 넘겨짐
}

pickAllFruits().then(console.log);

// Promise.race : 제일 먼저 들어오는 값만 받고 넘김
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);