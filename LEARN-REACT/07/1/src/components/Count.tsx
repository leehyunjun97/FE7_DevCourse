export default function Count({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(10)}>업데이트</button>
    </>
  );
}
