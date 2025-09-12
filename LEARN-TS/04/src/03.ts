{
  // 인덱스 접근 타입
  // 객체 타입에서 특정 키를 사용해 그 키위 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것

  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person['name'];
  type AgeType = Person['age'];

  type NameAndAge = Person['name' | 'age'];
}
{
  // const 단언
  // 값을 -> 리터럴
  // 객체의 속성의 값을 -> readonly
  let x = 'Hello' as const;
  const numArr = [1, 2, 3] as const;
  const obj = {
    name: 'lee',
    age: 20,
  } as const;
}
{
  const enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  console.log(Direction.UP);
  // console.log(Direction[0]);
}
{
  enum Status {
    Pending = 'PENDING',
    Success = 'SUCCESS',
    Fail = 'FAIL',
  }

  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));
}
{
  // 되게 어려운 개념 (복습 필수)
  // 번들러 (도구) => SASS, SCSS, TS -> HTML, CSS, JavaScript
  // 트리 셰이킹 -> 불필요한 코드를 제거해주는 기능
  const Status = { 
    Pending: 'PENDING',
    Success: 'SUCCESS',
    Fail: 'FAIL',
  } as const;

  type Status = (typeof Status)[keyof typeof Status];
  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));
  console.log(options);
}
