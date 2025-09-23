import { useContext } from 'react';
import { CounterContext } from '../contexts/counter/counterContext';

export default function CountOutSideDisplay() {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Oubside: {count}</h1>
    </>
  );
}
