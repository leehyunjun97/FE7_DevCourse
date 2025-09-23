import { createContext, useState } from 'react';
import Page from './components/Page';

// 전역 상태 관리
// Context API
// Redux Toolkit
// Zustand (주스탄드, 져스탠드, 져스탄드)
// Mobx, recoil ...

// Context API
// 1. 컨텍스트 객체 생성 -> createContext
// 2. 컨텍스트 범위 지정 -> <컨텍스트객체>공급범위</~>
// 3. 데이터를 공급 -> 컨텍스트객체에 value 속성을 사용
// 4. 공급받은 데이터 사용

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);
export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => setCount(0);
  return (
    <>
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Page />
      </CounterContext>
    </>
  );
}
