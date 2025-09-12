// 연습문제
{
  // 1.
  function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
  }

  console.log(getFirst([1, 2, 3])); // 1
  console.log(getFirst(['a', 'b', 'c'])); // 1
}
{
  // 2.
  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3])); // 3
  console.log(getLength(['a', 'b', 'c'])); // 3
}
{
  // 3.
  function getLast<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
  }

  console.log(getLast([1, 2, 3])); // 3
}
{
  // 4.
  function add<T extends number>(a: T, b: T): number {
    return a + b;
  }

  console.log(add(2, 3)); // 5
}
{
  // 5.
  function getValue<T extends { [key: string]: U }, U>(
    obj: T,
    key: string
  ): U | undefined {
    return obj[key];
  }

  console.log(getValue({ name: 'Alice' }, 'name')); // "Alice"
  console.log(getValue({ age: 20 }, 'age')); // "20"
}
{
  // 5. 강사님 풀이
  function getValue<T, U extends keyof T>(obj: T, key: U): T[U] {
    return obj[key];
  }

  console.log(getValue({ name: 'Alice' }, 'name')); // "Alice"
  console.log(getValue({ age: 20 }, 'age')); // "20"
}
{
  // 6.
  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }

  console.log(isEqual(2, 2)); // true
}
{
  // 7.
  function square<T extends number>(arr: T[]): number[] {
    return arr.map((num) => num * num);
  }

  console.log(square([1, 2, 3])); // [1, 4, 9]
}
{
  // 8.
  function getFirstAndLast<T>(arr: T[]): T[] {
    return [arr[0]!, arr[arr.length - 1]!];
  }

  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
}
{
  // 9.
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  console.log(mergeObjects({ name: 'Alice' }, { age: 25 })); // { name: "Alice", age: 25 }
}
{
  // 10.
  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
}
{
  function getValue<T extends { id: string }>(obj: T): T {
    obj.id;
    return obj;
  }
}
