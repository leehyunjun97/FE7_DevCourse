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
  
}

