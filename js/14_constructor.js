//생성자 함수

//객체 리터럴을 이용한 객체 생성.
//장점: 보기가 쉽다.
//단점: 유지보수가 힘들다, 객체가 필요한 만큼 작성해야 한다.
let user = {
  nickname: "seok",
  age: 30,
  email: "hbs30832@haver.com",
  send: function (message) {
    console.log(`{this.nickname} : ${message}`);
  },
};

let user02 = {
  nickname: "jin",
  age: 35,
  email: "dsff32@haver.com",
  send: function (message) {
    console.log(`{this.nickname} : ${message}`);
  },
};

user.send("안녕하세요!");
user02.send("반갑습니다");

//생성자(constructor) 함수: 생성할 객체에 대한 형태(틀)을 미리 만들어 놓는다.
//this.프로퍼티 = 값; 을 통해 생성될 객체의 상태(프로퍼티)를 미리 설정
// => 자동차 공장의 자동차 틀 혹은 설계도

// 인스턴스 : 실제로 생성된 객체로 메모리 실제로 할당
// => new 키워드와 함게 생성자 함수를 실행하면 반환된다.
// =>자동차 공장에 실제로 만들어진 자동차 제품 => ex) 자동차 마다 색상,크기,최대속도

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.send = function (message) {
    console.log(`{this.nickname} : ${message}`);
  };
}

let user03 = new User("seok", 30, "hbs30832@haver.com");
let user04 = new User("jin", 35, "dsff32@haver.com");
console.log(user03, user04);

user03.send("ㅎㅇ");

//자동차 객체를 만들어내는 생성자 함수 만들기
// => 색상, 속도, 연료량, 연비 이동 메서드(이동했다는 메세지 출력, 연료량 감소)
// =>이동(소모 연료량) 연료량 감소
// =>이동(이동거리)=> 연비 반영 연료량 감소

function Car(color, speed, gas, distance) {
  //인스턴스의 프로퍼티
  this.color = color;
  this.speed = speed;
  this.gas = gas;
  this.distance = distance;

  //인스턴스의 메서드
  this.move = function (km) {
    this.gas -= km / this.distance;
    console.log(`${km}km 이동! 남은 연료량: ${this.gas}`);
  };
}

let car = new Car("red", 300, 40, 4);
console.log(car);
car.move(16);
car.move(32);

//프로토타입 : 프로토타입은 객체에 메서드와 프로퍼티를 상속
// =>프로토타입에 프로퍼티와 메서드를 정의하면 인스턴스(객체)에서 참조 및 호출
// => 프로토타입 프로퍼티와 메서드를 인스턴스에 상속
// => 상속받는 객체에서만 사용 => 생성자에서 호출 x

//car의 포로토타입 메서드로 지정을 하면 car(인스턴스)에서 사용 가능
Car.prototype.changeColor = function (color) {
  this.color = color;
};

car.changeColor("blue");
console.log(car);

//  정적(static)프로퍼티와 메서드
// => 생성자에서 참조할 수 있는 프로퍼티 및 메서드
// => 상속받는 객체에서 참조 및 호출 x
Car.introduce = function () {
  console.log("저는 자동차의 생성자입니다.");
};
Car.introduce();

// JS 내에서 생성자 함수의 정적 메서드 사용
console.log(Object.entries(car));
console.log(Number.parseInt(1.0123231));

//Car 객체의 move => 프로토타입 메서드

Car.prototype.move02 = function (km) {
  this.gas = km / this.distance;
  console.log(`${km}km 이동! 남은 연료 : ${this.gas}`);
};

car.move02(13);

//프로토타입 상속
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.cry = function () {
  console.log(this.sound);
};

function Dog(name, age) {
  //this 바인딩
  //Animal을 호출하지만 this가 dog를 가르키게함
  Animal.call(this, name, age);
}

function Cat(name, age) {
  //this 바인딩
  //Animal을 호출하지만 this가 cat을 가르키게함
  //new cat(이름,나이) => new animal(이름,이름)=> this가 Animal이 아니라 Cat을 가르킨다.
  Animal.call(this, name, age);
}

// function Dog() {
//   this.sound = "멍멍!";
// }
// function Cat() {
//   this.sound = "야옹~";
// }

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

let dog = new Dog("coco", 10);
let cat = new Cat("navi", 10);
dog.cry();
cat.cry();

console.log(dog, cat);

//클래스 : 생성자 함수와 거의 동일하지만 문법적으로 더 편리하게 만들어 놓았다.
// => 프로토타입을 기반으로 동작
// => 문법적 설탕(syntax sugar)

//클래스 정의
//class 키워드와 함께 정의
//생성자 함수와 다르게 ()를 쓰지 않는다.
class Phone {
  //인스턴스의 값 초기화
  //클래스를 호출할 때 전달되는 인자를 constructor 함수의 매개변수로 받는다.
  //초기화할 값이 없다면 생략가능
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // function 키워드 없이 축약형으로 작성
  //프로토 타입 메서드가 된다.
  powerOn() {
    console.log("전원이 켜졌습니다.");
  }

  //static 매서드
  //생성자를 통해서만 호출가능
  static powerOff() {
    console.log("전원이 꺼졌습니다.");
  }
}

let galaxy = new Phone("Galaxy s22", "red");
console.log(galaxy);
galaxy.powerOn();
Phone.powerOff();

//player 클래스 => nickname, email, class(직업)
//공격하는 메스드(프로토타입), "player입니다."(정적메서드)
class Player {
  constructor(nickname, email, job, damage, hp) {
    this.nickname = nickname;
    this.email = email;
    this.job = job;
    this.damage = damage;
    this.hp = hp;
  }
  attack(target) {
    console.log(`${this.nickname} : ${target.nickname}을 공격했습니다!`);
    target.getAttack(this.damage);
  }

  getAttack(damage) {
    this.hp -= damage;

    console.log(`${this.nickname}  : 공격을 당했습니다!. 남은 hp:${this.hp}`);
  }

  //   static hello() {
  //     console.log("안녕하세요 저는 player입니다.");
  //   }
  // }

  //정적 메서드는 ㅁ나들ㅇ너진 인스턴스에 활용할 많한 메서드를 만든다.
  static isPlayer(obj) {
    return obj instanceof Player;
  }
}

let player01 = new Player("hbs30832", "test@gmail.com", "마법사", 40, 200);
let player02 = new Player("hbs332", "tet@gmail.com", "법사", 30, 400);
console.log(player01);

player01.attack(player02);
player01.attack(player02);
player01.attack(player02);
player01.attack(player02);
player01.attack(player02);
player01.attack(player02);
player01.attack(player02);

console.log(Player.isPlayer(player01));
if (Player.isPlayer(player01)) console.log("player가 맞습니다.");
