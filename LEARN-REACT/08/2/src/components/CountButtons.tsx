import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { setIsDark, setIsLight } from '../store/slice/configureSlice';
import { incrementByAmount } from '../store/slice/counterSlice';

export default function CountButtons() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch({ type: 'counterSlice/increment' })}>
        증가
      </button>
      <button onClick={() => dispatch(incrementByAmount({ amount: 20 }))}>
        10+증가
      </button>
      <button onClick={() => dispatch({ type: 'counterSlice/rest' })}>
        리셋
      </button>
      <button onClick={() => dispatch({ type: 'counterSlice/decrement' })}>
        감소
      </button>
      <br />
      <button onClick={() => dispatch(setIsLight())}>라이트모드</button>
      <button onClick={() => dispatch(setIsDark())}>다크모드</button>
    </>
  );
}
