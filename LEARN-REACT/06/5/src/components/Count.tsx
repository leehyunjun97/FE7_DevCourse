import CountButton from './CountButton';
import CountDisplay from './CountDisplay';

export default function Count({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <CountDisplay count={count} />
      <CountButton setCount={setCount} />
    </>
  );
}
