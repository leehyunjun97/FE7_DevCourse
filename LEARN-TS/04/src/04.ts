{
  // class
  // 1. 타입 시스템이 추가되었음

  class User {
    readonly name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet(): string {
      return `hello, ${this.name}`;
    }
  }

  const person = new User('lee', 20);
  // person.name = 'park';
  console.log(person.greet());
}
{
  // 2. 접근 제어자 (public, private, protected, readonly)
  // 2.1 public - 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스 등등), 생략 public
  // 2.2 private - 클래스 내부에서만 접근 가능(외부x, 상속x)
  // 2.3 protected - 클래스 외부에서만 접근 불가능, (클래스 내부o, 상속o)
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    printSpeed(): void {
      console.log(`${this.speed}`);
    }
  }

  const benz = new Car(100);
  // console.log(benz.speed);
}
