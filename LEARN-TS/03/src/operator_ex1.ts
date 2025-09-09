// 연습문제
{
  // 1.
  const printValue = (value: string | number): void => {
    if (typeof value === 'string') return console.log(value);
    else return console.log(value);
  };

  printValue('Hello'); // "Hello" 출력
  printValue(42); // 42 출력
}
{
  // 2.
  const doubleOrLength = (value: string | number): number => {
    if (typeof value === 'string') return value.length;
    else return value * 2;
  };

  console.log(doubleOrLength('hello')); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}
{
  // 3.
  const mergeObjects: (
    obj: { name: string; age: number },
    obj2: { jobTitle: string; salary: number }
  ) => { name: string; age: number } & { jobTitle: string; salary: number } = (
    obj,
    obj2
  ) => {
    return { ...obj, ...obj2 };
  };

  const person = { name: 'Alice', age: 30 };
  const employee = { jobTitle: 'Engineer', salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}
{
  // 4.
  const getFirstElement = (arr: number[] | string[]) => {
    if (typeof arr[0] === 'number') return arr[0];
    else if (typeof arr[0] === 'string') return arr[0];
    else return undefined;
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(['a', 'b', 'c'])); // "a"
  console.log(getFirstElement([])); // undefined
}
{
  // 5.
  const isEqual = (value1: string | number, value2: string | number) =>
    value1 === value2;

  console.log(isEqual(10, 10)); // true
  console.log(isEqual('hello', 'world')); // false
  console.log(isEqual(5, '5')); // false
}
{
  // 6.
  const updateAddress: (
    obj: { name: string; age: number },
    address?: string
  ) => { name: string; age: number } & { address?: string } = (
    obj: { name: string; age: number },
    address?: string
  ) => {
    if (address) return { ...obj, address };
    else return obj;
  };

  const updatedPerson = updateAddress(
    { name: 'Jane', age: 28 },
    '123 Maple St'
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: 'John', age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}
{
  // 7.
  const maxValue = (value1: string | number, value2: string | number) => {
    if (typeof value1 === 'string' && typeof value2 === 'string') {
      return value1.length > value2.length ? value1 : value2;
    } else {
      return value1 > value2 ? value1 : value2;
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue('apple', 'banana')); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue('cat', 'dog')); // "dog"
}
{
  // 8.
  function getValue(value: number): string;
  function getValue(value: string): string;
  function getValue(value: number | string): string {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return `${value}`;
    else return `${value}`;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue('abc')); // "abc"
}
{
  // 9.
  const createContact = (
    obj1: { name: string; age: number },
    obj2: { email: string }
  ): { name: string; age: number } & { email: string } => {
    return { ...obj1, ...obj2 };
  };

  const person = { name: 'Alice', age: 28 };
  const contact = { email: 'alice@example.com' };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}
{
  // 10.
  const getAge = (age: string | number) => {
    if (typeof age === 'number') return age;
    if (typeof age === 'string') return Number(age);
  };

  console.log(getAge('25')); // 25
  console.log(getAge(30)); // 30
  console.log(getAge('abc')); // NaN
}
