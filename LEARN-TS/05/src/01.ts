// 클래스
// 1. 타입시스템이 제공된다는 것
// 2. 접근 제한자가 지원된다는 점
// 2.1 public, protected, private, readonly
// 2.2 #private가 추가되었지만, 이거랑 다른 것
// 3. 추상클래스, 인터페이스와 결합이 가능하다는 것
// 4. 메소드오버라이딩시 ,오버라이딩 반환 값이 같아야 한다는 것
{
  // 클래스
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    start(name: string): string {
      return `$${name}, start`;
    }
  }

  const benz = new Car(100);
  console.log(benz.start('benz'));
  console.log(benz.speed);

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return `Hello, ${this.name}, ${this.age}`;
    }
  }

  const person = new Person('john', 20);
  console.log(person.introduce());
}
{
  // public - 기본값, 클래스 내/외부/상속에서 접근 가능하게 합니다.
  // private - 클래스 내부에서만 접근 가능
  // protected - 클래스 내부와 상속에서만 접근 가능
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    private secret() {
      return '차 사고 크게 난 적 있음';
    }
    search() {
      this.secret();
    }
  }
  const car = new Car(100);

  console.log(car.speed);
  console.log(car.search());
}
{
  class Car {
    private engineOn: boolean = false;
    // 엔진 시작
    start() {
      if (this.engineOn) {
        console.log('Engine is already stared');
        return;
      }
      this.engineOn = true;
      console.log('Engine started');
    }
    stop() {
      if (this.engineOn) {
        console.log('Engine is already stoped');
        return;
      }
      this.engineOn = false;
      console.log('Engine stopped');
    }
    inEngineOn(): boolean {
      return this.engineOn;
    }
  }

  const benz = new Car();
  console.log(benz.inEngineOn());
}
{
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz extends Car {
    showSpeed() {
      console.log(this.speed);
    }
  }
  const benz = new Benz(100);
  benz.showSpeed();
}
{
  class Character {
    protected hp: number = 100;
  }
  class Warrior extends Character {
    attack() {
      this.hp -= 10;
      console.log(`HP after attack: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
    }
  }
  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.attack();
}
{
  // readonly
  // 한 번 값이 할당되면 수정 불가
  class Config {
    readonly apiUrl = 'http://api.example.com';
    readonly appVersion = 'v1.0';

    displayConfig() {
      console.log(`apiUrl: ${this.apiUrl}, APP_VERSION: ${this.appVersion}`);
    }
  }
  const config = new Config();
  config.displayConfig();
}
{
  // 메소드 오버라이딩
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }
  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      return `Benz: ${this.speed}`;
    }
  }

  const benz = new Benz(100, 'benz s');
  console.log(benz.getSpeed());
}
{
  // 추상클래스
  // 직접 인스턴스를 생성할 수 없는 클래스로,
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)
  abstract class Animal {
    abstract makeSound(): void;
  }
  class Dog extends Animal {
    makeSound(): void {
      console.log('멍멍');
    }
  }
  const dog = new Dog();
  dog.makeSound();
}
{
  // 직접 구현
  // 자식클래스에게 일관된 속성이나 메서드를 구현할 수 있게
  // 다른 클래스를 상속받을 수 없게한다.
  abstract class CarAbstract {
    code: string = '1af31312';
    abstract name: string;
    abstract speed: number;
    abstract color: string;
    abstract maxSpeed(): number;
  }

  class Benz extends CarAbstract {
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super();
      this.name = name;
      this.speed = speed;
      this.color = color;
    }
    maxSpeed(): number {
      return this.speed;
    }
  }

  const benz = new Benz('s', 200, 'black');
  console.log(benz.maxSpeed());
}
{
  // 추상클래스
  // 장점: 연관된 클래스의 공통의 속성과 메서드를 구현하도록 강제할 수 있다.
  // 단점: 다른 클래스를 추가 상속하지 못하게 한다.

  // impements + interface(type)
  // 추상 클래스는 직접 구현이 가능한데,
  // 직접 구현이 불가능, 여러개 implements 가능
  interface Runner {
    name: string;
    run(): void;
  }
  interface Swim {
    swim(): void;
  }

  abstract class PersonAbstract {
    abstract stop(): void;
  }

  class Person extends PersonAbstract implements Runner, Swim {
    name: string;
    constructor(name: string) {
      super();
      this.name = name;
    }
    run() {
      console.log('Person is Run!');
    }
    swim(): void {
      console.log('Person is Swim!');
    }
    stop(): void {}
  }
}
{
  interface A {
    a(): void;
  }
  interface B extends A {
    b(): void;
  }
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
{
  // abstract
  // 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 포함)
  // implements
  // 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때(직접 구현 불가능)
}
