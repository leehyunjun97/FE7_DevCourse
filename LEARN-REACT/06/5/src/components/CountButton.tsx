export default function CountButton({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
      <button onClick={() => setCount(0)}>0</button>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
}
