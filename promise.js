'use strict';

// Promise is a JavaScript object for asynchronous operation.
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
    setTimeout(()=>{
        // resolve : 성공적으로 받아온, 읽어온 가공한 데이터
        //resolve('ellie');
        reject(new Error('no network')); // 에러를 전달함 : 구체적인 에러메세지
    },2000);
});

// 2. Consumers: then, catch, finally
// then : 밑의 value를 인자로 받아서 데이터를 처리함
// value : 프로미스에서 정상적으로 잘 실행이 되어서 마지막으로 resolve에서 전달된 값
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error =>{    // 리턴된 에러를 잡아온다
        console.log(error); 
    })
    .finally(()=>{      // 무조건 실행함
        console.log('finally');
    })

