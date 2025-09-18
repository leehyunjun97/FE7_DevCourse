// 이벤트
// JSX 특징 -> 속성은 카멜케이스로 작성한다.
// 이벤트 객체

// import Button from './components/Button';

export default function App() {
  const handlerClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    console.log(e); // 명시적으로 전닳해서 사용해야됨
    console.log(name);
    // console.log(event) 사용하면 안됨
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button onClick={(e) => handlerClick(e, 'lee')}></button>
      </form>

      {/* <button onClick={handlerClick}></button>
      <button onClick={handlerClick}></button> */}
      {/* <Button handlerClick={handlerClick} /> */}
    </>
  );
}
