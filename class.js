'use strict';   
//-- 엄격한 모드  : use strict
// 1.기존에는 조용히 무시되던 에러들을 throwing합니다.
// 2.JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
// 3.엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

// 1. constructor
class Person{
    //constructor : 생성자
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // 메소드
    speak( ){
        console.log(`$(this.name): hello!`);
    }
}

const yuri = new Person('ellie',20);
console.log(yuri.name);
yuri.speak();

// -----------------------------------------------------------------
// 2. Getter and Setters
// getter 값을 가져올때 호출되는 함수부분이다
// setter 값을 할당 할 때마다 호출되는 부분이다
class User{

    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    // 중요 ★
    // this.age <- 이 부분을 실행시킬땐 밑의 getter가 호출이된다
    // = age <- 이 부분을 실행시킬땐 밑의 setter가 호출되어 전달된 값을 할당한다

    get age(){
        // this.age 로 적게 된다면 getter가 끊임없이 실행된다 
        // 변수명은 호출되는 부분이랑 다르게 
        return this._age;
    }

    set age(value){
        this._age = value <0? 0: value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);  

//-----------------------------------------------------------
// 3. Fields (public, private)
// Too soon! : 최근에 추가되었다
// 생성자를 정의하지 않고도 클래스에 한번에 매개변수를 넣을수있다
// # <- 이 키워드를 추가하면 외부에서 함부러 접근할수 없다
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// ------------------------------------------------------------
// 4. Static properties and methods
// 이것도 최근에 추가됨
// 클래스 고유로 객체들 각각 할당되지않고 전체적으로 사용됨
// 공통적인 데이터 사용
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
Article.printPublisher();
// -----------------------------------------------------------
// 5. Inheritance 상속
// extends 키워드 사용
// 코드 재사용
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width = this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    // Overriding
    draw(){
        // 다양성 >> super : 부모의 draw를 사용하기
        super.draw();
        console.log('대충세모');
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}
const rectangle = new Rectangle(20,20, 'blue');
const triangle = new Triangle(20,20,'red');
//---------------------------------------------------------
// 6. class checking: instanceOf
// 해당 객체가 오른쪽의 클래스로 만들어졌는지 확인하는 것
// 자바스크립트의 모든 Object는 Object를 상속한다.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Object);


