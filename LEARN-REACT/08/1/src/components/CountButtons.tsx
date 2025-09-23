import React, { useContext } from 'react';
import { CounterActionContext } from '../contexts/counter/counterContext';
import { ConfigContext } from '../contexts/configure/configureContext';

// 절대적인 규칙
// 상태가 변경되면 컴포넌트가 리렌더링

export default React.memo(function CountButtons() {
  console.log('button rendering');
  const { increment, decrement, reset } = useContext(CounterActionContext);
  const { setDarkmode, setLightmode } = useContext(ConfigContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
      <br />
      <button onClick={setDarkmode}>다크모드</button>
      <button onClick={setLightmode}>라이트모드</button>
    </>
  );
});
