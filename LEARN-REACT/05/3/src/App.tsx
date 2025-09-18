import { useState } from 'react';

export default function App() {
  // 리렌더링
  const [count, setCount] = useState(0);
  const handleIncrment = () => {
    // 
    setCount(count + 1);
    setCount((count) => count + 1);
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrment}>클릭</button>
    </>
  );
}
