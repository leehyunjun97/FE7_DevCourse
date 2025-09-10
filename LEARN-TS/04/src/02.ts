{
  // enum(이넘)
  // moveX -> 왼쪽과 오른쪽을 이동할 수 있게만 만든 것
  function characterMoveX(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      console.log('왼쪽으로 이동');
    }
    if (direction === 'right') {
      console.log('오른쪽으로 이동');
    }
  }

  characterMoveX('left');
  characterMoveX('right');

  function vehicleMove(direction: 'left' | 'right' | 'up' | 'down'): void {
    if (direction === 'left') {
      console.log('왼쪽으로 이동');
    }
    if (direction === 'right') {
      console.log('오른쪽으로 이동');
    }
    if (direction === 'up') {
      console.log('위쪽으로 이동');
    }
    if (direction === 'down') {
      console.log('아래쪽으로 이동');
    }
  }

  vehicleMove('up');
  vehicleMove('down');
  vehicleMove('left');
  vehicleMove('right');
}
{
  // 이넘 (enum)
  // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입

  enum CharacterMoveX {
    LEFT,
    RIGHT,
  }

  enum RotationMoveX {
    LEFT,
    RIGHT,
  }
  enum VehicleMove {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  function characterMoveX(direction: CharacterMoveX | RotationMoveX): void {
    if (direction === CharacterMoveX.LEFT) {
      console.log('왼쪽으로 이동');
    }
    if (direction === CharacterMoveX.RIGHT) {
      console.log('오른쪽으로 이동');
    }
  }

  characterMoveX(CharacterMoveX.LEFT);
  characterMoveX(CharacterMoveX.RIGHT);

  characterMoveX(RotationMoveX.LEFT);
  characterMoveX(RotationMoveX.RIGHT);
}
{
  // 숫자형 enum
  enum Direction {
    UP, // 0
    DOWN, // 1
    LEFT, // 2
    RIGHT, // 3
  }

  console.log(Direction.UP); // 0
  console.log(Direction.DOWN); // 1
  console.log(Direction);
  console.log(Direction);
}
{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFount = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return '성공';
      case StatusCode.BadRequest:
        return '실패';
      case StatusCode.Unauthorized:
        return '인증에러';
      case StatusCode.NotFount:
        return '찾을 수 없음';
    }
  }

  handleResponse(StatusCode.BadRequest);
}
{
  // 문자 enum(열거형)
  enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
  }

  console.log(Direction.DOWN);
}
{
  // 혼합 enum(열거형)
  enum Mix {
    YES = 200,
    NO, // 201
    UP, // 202
    DOWN = 0,
  }

  console.log(Mix);
}
{
  // 리버스 매핑(역방향 매핑)
  // 숫자형 이넘에만 지원한 개념

  enum Key {
    ArrowUp,
    ArrowDown, // 1
  }

  function onKeyPressed(code: Key) {
    console.log('Pressd: ', Key[code]);
  }

  onKeyPressed(Key.ArrowDown);
}
{
  // const enum
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  Direction[0];

  // 컴파일할때 인라인으로 값만 남겨놓고 삭제시킴
  // 0, 1, 2, 3
  const enum ConstDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  // 역방향 매핑 X
  // ConstDirection[0];
}
{
  (function () {})(); // 즉시실행함수
}
{
  // 객체 - interface (type)
  // 리터럴 타입 - enum (const enum)
  // 타입 별칭 - 유니온타입, 인터섹션

  const enum Role {
    ADMIN = 'admin',
    GUEST = 'guest',
  }
  interface Account {
    id: number;
    role: Role;
  }

  type AuthAccount = Account & { token?: string };
   
}
