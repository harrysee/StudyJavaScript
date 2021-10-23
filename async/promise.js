'use strict';

// Promise is a JavaScript object for asynchronous(비동기적) operation.
// 1. state(상태) : pending ->fulfilled or rejected
//        기능 수행 중인지 -> 완료중인지 아는것
// 2. Producer vs Consumer 차이점
// 정보제공 vs 정보 사용 

// 1. Producer(기능수행데이터전달콜백함수, 문제생기면반환)
// 사용자가 요구하지도 않았는데 Promise 만들어지자마자 콜백함수 실행시키기 때문에
// 이점 주의해서 개발하기
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log(`doing something...`);
    // 딜레이주기 : 원하는 콜백함수 지정시간만큼 딜레이 후 실행 (1000==1초)
    setTimeout(() => {
        // resolve : 성공적으로 받아온, 읽어온 가공한 데이터
        //resolve('ellie');
        reject(new Error('no network')); // 에러를 전달함 : 구체적인 에러메세지
    }, 2000);
});

// 2. Consumers: then, catch, finally
// then : 밑의 value를 인자로 받아서 데이터를 처리함
// value : 프로미스에서 정상적으로 잘 실행이 되어서 마지막으로 resolve에서 전달된 값
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => { // 리턴된 에러를 잡아온다
        console.log(error);
    })
    .finally(() => { // 무조건 실행함
        console.log('finally');
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

// then : 값을 바로 전달해도 되고 프로미스를 전달해도된다.
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
// 닭을 가져온다
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
// 치킨을 받아서 달걀을 받아오는 프로미스
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
    });
// 달걀을 받아서 프라이드를 만드는 프로미스
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 프라이드`), 1000);
    });

// 닭을 받아와서 값을 가공->가공해서 값을 요리한다.
getHen()
    .then(getEgg(hen))   // 받아오는 변수랑 고대로 전달하는 경우 생략가능 : hen =>
    .catch(error => {
        return '빵';    // 달걀을 받는데 에러가 나면 빵을 대신 받는 코드
    })   
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);    // 무슨 문제가 생기면 여기서 에러를 받는다

