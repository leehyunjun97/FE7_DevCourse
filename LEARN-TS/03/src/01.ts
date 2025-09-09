{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number } = { x: 10, y: 20 };
  const position: { x: number; y: number } = point;

  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (x: number, y: number) => number = fn1;
}
{
  // readonly
  const user: {
    readonly name: string;
    readonly age?: number;
  } = {
    name: 'kim',
  };

  const numArr: readonly number[] = [1, 2, 3];
  const mixArr: readonly [number, string] = [10, 'a'];
}
{
  // 인덱스 시그니쳐
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  const user: {
    [key: string]:
      | string
      | number
      | ({ address: string } & { zipcode: string })
      | ((a: number, b: number) => number);
  } = {
    name: 'lee',
  };

  user.gender = 'male';
  user.age = 20;

  const person = {
    name: 'lee',
    gender: 'male',
  };
}
{
  // 함수 -> 일급 객체
  const sum: { (a: number, b: number): number } = (a, b) => a + b;
}
