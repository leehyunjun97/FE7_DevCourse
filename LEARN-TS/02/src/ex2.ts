// 연습문제 +
{
  // 1.
  // 함수 정의
  const sumAllNumbers: (...numArr: number[][]) => number[] = (...numArr) => {
    return numArr.map((item) => item.reduce((acc, cur) => acc + cur, 0));
  };
  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}
{
  // 2.
  // 함수 정의
  const doubleValue: (value: string | number) => number = (value) => {
    if (typeof value === 'number') {
      return value * 2;
    } else return value.length * 2;
  };
  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // 10
}
{
  // 3.
  // 함수 정의
  const multiplyArrays: (numArr1: number[], numArr2: number[]) => number[] = (
    numArr1,
    numArr2
  ) => {
    let min = Math.min(numArr1.length, numArr2.length);
    const result: number[] = [];
    for (let i = 0; i < min; i++) {
      const a = numArr1[i];
      const b = numArr2[i];
      if (a !== undefined && b !== undefined) {
        result.push(a * b);
      }
    }
    return result;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}
{
  // 4.
  // 함수 정의
  const intersection: (numArr1: number[], numArr2: number[]) => number[] = (
    numArr1,
    numArr2
  ) => {
    const a = numArr1.filter((item, index) => numArr2.includes(item));
    return a;
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}
{
  // 5.
  // 함수 정의
  const formatInfo: (obj: { name: string; age?: number }) => string = (obj) => {
    return obj.age ? `Age: ${obj.age}` : `Name: ${obj.name}`;
  };

  // 함수 호출
  const info = formatInfo({ name: 'Alice' });
  console.log(info); // "Name: Alice"
}
{
  // 6.
  // 함수 정의
  const combineStrings: (str1: string, str2: string) => string = (
    str1,
    str2
  ) => {
    return `${str1}${str2}`;
  };

  // 함수 호출
  const combined = combineStrings('Hello', 'World');
  console.log(combined); // "HelloWorld"
}
{
  // 7.
  // 함수 정의
  const squareArray: (numArr: number[]) => number[] = (numArr) => {
    return numArr.map((item) => Math.pow(item, 2));
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}
{
  // 8.
  // 함수 정의
  const addStringAndNumber = (str: string, num: number) => `${str} ${num}`;
  // 함수 호출
  const result = addStringAndNumber('The number is ', 10);
  console.log(result); // "The number is 10"
}
{
  // 9.
  // 함수 정의
  const compareValues = (num: number, str: string) => {
    return num > str.length ? `Number is larger` : `String is larger`;
  };

  // 함수 호출
  const result = compareValues(10, 'Hello');
  console.log(result); // "Number is larger"
}
{
  // 10.
  // 함수 정의
  const checkValue = (value: number | string | boolean) => {
    if (typeof value === 'number') return "It's a number";
    if (typeof value === 'string') return "It's a string";
    if (typeof value === 'boolean') return "It's a boolean";
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
