// 연습문제
{
  // 1.
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = { name: 'lee', age: 29 };
}
{
  // 2.
  interface Car {
    brand: string;
    model: string;
    start: () => void;
  }

  const car: Car = {
    brand: 'b1',
    model: 'm1',
    start() {
      console.log(`${this.model} start`);
    },
  };
  car.start();
}
{
  // 3.
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const employee: Employee = {
    name: 'lee',
    position: 'frontend',
  };
}
{
  // 4.
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: 'dev',
    members: ['lee', 'kim', 'park'],
  };
}
{
  // 5.
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    bread: string;
  }
  const dog: Dog = {
    name: '멍멍이',
    age: 2,
    bread: 'aaa',
  };
}
{
  // 6.
  interface Person {
    name: string;
    age: number;
    greet: () => void;
  }

  const person: Person = {
    name: 'lee',
    age: 29,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  person.greet();
}
{
  // 7.
  interface Shape {
    area: () => void;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 10,
    area() {
      console.log(this.radius * 2 * 3.14);
    },
  };

  const rec: Rectangle = {
    width: 10,
    height: 20,
    area() {
      console.log(this.width * this.height);
    },
  };
}
{
  // 8.
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }

  interface Info extends Person, Address {}

  const info: Info = {
    name: 'lee',
    age: 29,
    street: '미추홀구',
    city: '인천',
    zipcode: '123123213',
  };
}
{
  // 9.
  interface Dictionary {
    [key: string]: string;
  }
}
{
  // 10.
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a / b;
}
