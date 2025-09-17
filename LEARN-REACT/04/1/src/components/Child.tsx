export default function Child({
  name = '홍길동',
  str,
  num,
  arr,
  obj,
  isLoggedIn,
  click,
  value,
  style,
  Header,
}: {
  str: string;
  num: number;
  arr: string[];
  obj: { name: string; age: number };
  isLoggedIn: boolean;
  click: () => void;
  name?: string;
  value: string | number | string[] | number[];
  style: React.CSSProperties; // key[string]:string
  Header: React.ComponentType; // ReactNode, ReactElement
}) {
  return (
    <>
      <h1 style={style}>{name}</h1>
      <h1>{str}</h1>
      <h1>{num}</h1>
      <h1>{arr}</h1>
      <h1>{obj.name}</h1>
      <h1>{value}</h1>
      <h1>{isLoggedIn ? '로그인됨' : '로그인안됨'}</h1>
      <button onClick={click}>버튼</button>
      <Header />
    </>
  );
}
