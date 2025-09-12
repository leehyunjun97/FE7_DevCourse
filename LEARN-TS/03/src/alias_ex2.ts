// 연습문제 +
{
  // 1.
  type Action = {
    type: string | 'ADD_ITEM' | 'UPDATE_ITEM' | 'SET_STATUS';
    payload: string | number | { id: number; name: string };
  };

  // code
  function createAction(
    type: string,
    payload: string | number | { id: number; name: string }
  ): Action {
    return { type, payload };
  }

  // 함수 호출 예시
  const action1 = createAction('ADD_ITEM', { id: 1, name: 'item' });
  const action2 = createAction('UPDATE_ITEM', 42);
  const action3 = createAction('SET_STATUS', 'success');

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}
{
  // 2.
  type NumberOrString = string | number;

  const createObject = (
    id: NumberOrString,
    name: string
  ): { id: NumberOrString; name: string } => {
    return { id, name };
  };

  const object1 = createObject(1, 'Alice');
  const object2 = createObject('123', 'Bob');

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}
{
  // 3.
  type Point = {
    x: number;
    y: number;
  };
}
{
  // 4.
  type FetchRsult = 'Loading' | 'Success' | 'Error';

  function fetchData(status: FetchRsult): {
    status: FetchRsult;
    data?: string;
    message?: string;
  } {
    if (status === 'Loading') return { status };
    else if (status === 'Error')
      return { status, message: 'Failed to load data.' };
    else status === 'Success';
    return { status, data: 'Data loaded successfully!' };
  }

  const result1 = fetchData('Loading');
  const result2 = fetchData('Error');
  const result3 = fetchData('Success');

  console.log(result1);
  console.log(result2);
  console.log(result3);
}
{
  // 5.
  type NullOrUndefined = null | undefined | string;

  function getValue(value: NullOrUndefined): boolean {
    return !!!value;
  }

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue('Hello');

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}
{
  // 6.
  type Coordinates = [number, number];

  function setCoordinates(a: number, b: number): Coordinates {
    return [a, b];
  }

  const coordinates: Coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}
{
  // 7.
  type Person = { readonly name: string; readonly age: number };
  function createPerson(name: string, age: number): Person {
    return { name, age };
  }

  const person = createPerson('John', 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  // person.name = 'Jane'; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}
{
  // 8.
  type User = {
    id?: string;
    name?: string;
    email?: string;
  };

  function updateUser(user: User, updateInfo: User): User {
    return { ...user, ...updateInfo };
  }

  const user1 = { id: '1', name: 'Alice', email: 'alice@example.com' };
  const updatedUser1 = updateUser(user1, { name: 'Alicia' });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}
{
  // 9.
  type Role = 'admin' | 'user';
  type UserWithRole = {
    id: string;
    name: string;
    role: Role;
  };

  function assignRole(user: UserWithRole, role: Role): UserWithRole {
    return { ...user, role };
  }

  const user1: UserWithRole = { id: '1', name: 'Alice', role: 'user' };
  const updatedUser = assignRole(user1, 'admin');

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}
