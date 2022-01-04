// console.log("hello javascript!")
// console.log(console)    // 명령어 나옴

// // 변수 
// // var : 위치 상관없이 어디에서든 사용되어서 안좋음
// // let, const : 원하는 위치에서 사용가능
// // var, let, const
// let name = "scalper"

// for(let i = 0; i<10; i++){
//     var name = "scalper"
//     var engName = "con"
// }

// console.log(name)
// console.log(window)

// ----------- 배열과 오브젝트 -------
// 문자와 숫자 섞어서 ㄱㄴ
const animal = "lion";
const animal2 = "ravit";
const animals = ["lion", "rabit","monkey", "dog","cat"]
const fruits = 'apple, banana, stroberry'

console.log(animals)
console.log(animals)
animals[3] = "tiger"    // 배열 개수 추가
animals.push("frog")
animals.unshift("snake")
animals.pop()   // 맨 마지막 지우기
// 배열인지 확인하는 방법
// Array.isArray(값)
console.log(Array.isArray(animals)) // true
console.log(Array.isArray(fruits))  // false

console.log(animals.indexOf("monkey"))  // 인덱스 찾기

// splice / slice
// splice - 배열.splice(시작점, 뺄갯수, 대체할 값) 0부터 2개 빼기
console.log(animals)
console.log("love", animals.splice(0,2,"love"))
console.log(animals)
console.log(animals.splice(animals.indexOf("rabit"),3) )   
console.log(animals)

// slice - 배열.slice(시작인덱스, 끝나는인덱스)
// 끝인덱스 제외하고 잘림
console.log(animals.slice(0,3))


// object : 어떤 대상의 속성:값 들로 이루어져있음
// 인덱스 == key
// object 값만 바꾸는 것 괜춘
const monkey = {
    name: "kiki",
    age:5,
    isCute: true,
    food: [ 'banana', ' carret', 'potato']
}

console.log(monkey)
monkey["size"] = "big"

// json 
// json으로 변형하기
// json -> object 형태로 이루어져있음 ( 키:값)
console.log(monkey)
const monkeyJson = JSON.stringify(monkey)
console.log(monkeyJson)

// json -> object
const parsedJson = JSON.parse(monkeyJson)
console.log(parsedJson.name)

// function
// => 화살표함수와 일반함수 차이점
// function함수는 선언하기전에 호출해도 ㄱㄴ
// 화살표 함수는 함수로 등록되지않아서 선언하기 전에 호출하면 에러남
function showPrice1(price){
    console.log(price+loiyalty);
}

const showPrice2r = (price)=>{
    console.log(price+ loiyalty)
}

// 오브젝트안에 함수 넣을때
// 함수안에서의 this가 다르다
const obj = {
    name:"test",
    test1: function(){
        console.log(this)
    },
    test2: ()=>{
        console.log(this)
    }
}
obj.test1(); // object 자체를 가리킴
obj.test2(); // window를 가리킴


// 삼항연산자 
const num = 10;

num>10? console.log("true") : console.log("false");

//forEach, map, filter, reduce
const coronaCases = [
    {city: 'Seoul', case:500},
    {city: 'Busan', case:1000},
    {city: 'Daegu', case:500},
    {city: 'Daejeon', case:1200}
]

coronaCases.forEach(function(corona){
    console.log(corona.city)
})
// 인덱스랑 같이 받기
coronaCases.forEach((co,i)=>{
    console.log(i, co)
})

// map 
const coronaCities = coronaCases.map((corona)=>{
    return corona.city
})

// coronaCities = coronaCases.map((corona)=> { return `${corona.case}명`})

// filter
// 해당 조건 만족하는 것만 뽑아내기
const dangerousCity = coronaCases.filter(function(corona, i){
    return corona.case > 300
})

// reduce : 누적하기
const numbers = [10,123,22,33,44,55]
const totalNumber = numbers.reduce((acc, cur)=>{
    console.log(acc, cur)
    return acc + cur
},0)

const ex = coronaCases.reduce((acc, cur)=>  // acc 배열 전체가 담김
{
    if(acc.case>=1000){
        return acc + cur.case
    }else{
        return acc-cur.case
    }
},0)    // 값 초기화

console.log(ex)