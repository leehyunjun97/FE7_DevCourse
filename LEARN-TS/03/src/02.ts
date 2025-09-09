{
  // 타입별칭(type alias)
  // 나만의커스텀 타입을 만들 수 있는 방법을 제공한다

  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  const user1: Person = {
    name: 'lee',
    age: 20,
    gender: 'male',
  };

  const user2: Person = {
    name: 'kim',
    age: 20,
    gender: 'male',
  };
  const user3: Person = {
    name: 'park',
    age: 20,
    gender: 'male',
  };
}
{
  // 1. 기본 타입 별칭
  type ID = string | number;
  const userId: ID = 'hyunjun';
  const productId: ID = 1;
}
{
  // 2. 객체 타입 별칭
  type User = {
    name: string;
    age: number;
  };
  const per1: User = {
    name: 'kim',
    age: 20,
  };
}
{
  // 3. 함수 타입 별칭
  type AddFunc = (a: number, b: number) => number;
  type AddFunc2 = { (a: number, b: number): number };
  const add: AddFunc2 = (a, b) => a + b;
}
{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}
{
  // 5. 타입 확장
  // 5.1 유니온 타입
  // 5.2 인터섹션 타입
  type StringId = string;
  type NumberId = number;
  type ID = StringId | NumberId;

  type Nameble = {
    name: string;
  };

  type Ageable = {
    age: number;
  };

  type Person = Nameble & Ageable;
}
{
  // 6. 리터럴 타입 별칭
  type Direction = 'UP' | 'RIGHT' | 'LEFT' | 'DOWN';
  const direct: Direction = 'LEFT';

}

