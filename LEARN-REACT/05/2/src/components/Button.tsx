export default function Button({
  handlerClick,
}: {
  handlerClick: (name: string) => void;
}) {
  return (
    <>
      <button onClick={() => handlerClick('lee')}>클릭스</button>
    </>
  );
}
