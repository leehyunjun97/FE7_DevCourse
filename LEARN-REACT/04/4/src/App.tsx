// 조건부 렌더링
// 조건에 따라 서로 다른 컨텐츠를 표시하는 방법
// 1. if

import LogIn from './components/LogIn';
import LogOut from './components/LogOut';

// 2. 삼항 연산자
export default function App() {
  const isLogin = false;
  // if (isLogin) return <h1>로그인 되었습니다.</h1>;
  // return <h1>로그인 되지 않았습니다.</h1>;

  // return <h1>{isLogin ? '로그인 되었습니다.' : '로그인 되지 않았습니다'}</h1>;
  // return <>{isLogin ? <LogIn /> : <LogOut />}</>;

  return (
    <>
      {isLogin && <LogIn />}
      {!isLogin && <LogOut />}
    </>
  );
}
