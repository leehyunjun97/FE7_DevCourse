// 연습문제
{
  // 1.
  // 함수 정의
  const add: (num1: number, num2: number) => number = (num1, num2) =>
    num1 + num2;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}
{
  // 2.
  // 함수 정의
  const greet: (name: string) => string = (name) => `Hello, ${name}`;

  // 함수 호출
  const greeting = greet('Alice');
  console.log(greeting); // "Hello, Alice!"
}
{
  // 3.
  // 함수 정의
  const sumAll: (...numArr: number[]) => number = (...numArr) =>
    numArr.reduce((acc, cur) => acc + cur, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}
{
  // 4.
  // 함수 정의
  const sum: (num1: number, num2?: number) => number = (a, b = 0) => {
    console.log(b);
    return a + b;
  };

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5`
}
{
  // 5.
  // 함수 정의
  const multiply: (num1: number, num2: number) => number = (num1, num2) =>
    num1 * num2;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}
{
  // 6.
  // 함수 정의
  const concatStringAndNumber: (str: string, num: number) => string = (
    str,
    num
  ) => str + num;

  // 함수 호출
  const result = concatStringAndNumber('Hello', 10);
  console.log(result); // "Hello10"
}
{
  // 7.
  const greet: (str1: string, str2?: string) => string = (str1, str2) => {
    return str2 ? `${str2}, ${str1}!` : `Welcome ${str1}!`;
  };

  // 함수 호출
  const greeting1 = greet('Alice', 'Hello');
  const greeting2 = greet('Bob');
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}
{
  // 8.
  // 함수 정의
  const findMax: (numArr: number[]) => number = (numArr) => Math.max(...numArr);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}
{
  // 9.
  // 함수 정의
  const double: (num: number) => number = (num) => num * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
