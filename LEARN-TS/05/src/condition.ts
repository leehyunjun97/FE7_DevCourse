{
  // 선언 병합
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum
  enum Direction {
    UP, // 0
    DOWN, // 1
  }
  enum Direction {
    RIGHT = 2,
    LEFT = 3,
  }
}
{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U ? X : Y

  type isString<T> = T extends string ? 'YES' : 'NO';
  type A = isString<string>;
  type B = isString<number>;
}
{
  type MyType = 'a' | 'b' | 'c';
  type Result = Exclude<MyType, 'b'>;
  type MyExclude<T, U> = T extends U ? never : T;
}
