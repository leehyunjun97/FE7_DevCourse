{
  // class
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `hello, ${this.name}`;
    }
  }

  const person = new User('lee', 20);
  console.log(person.greet());
}
