import { useCounterStore } from '../stores/counterStore';

export default function CountButtons() {
  const decrement = useCounterStore((state) => state.decrement);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount);
  // const { increment, decrement, reset, incrementByAmount } = useCounterStore();
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={() => incrementByAmount(10)}>증가(매개변수)</button>
      <button onClick={reset}>리셋</button>
      <button onClick={decrement}>감소</button>
    </>
  );
}
