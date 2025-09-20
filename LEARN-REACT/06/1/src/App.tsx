// // 리액트에서 상태(state)
// // 컴포넌트 내부에서 변경 가능한 데이터를 의미합니다.
// // 사용자 입력, 서버 응답, UI 상호작용 등으로 인해 값이 변경될 수 있다.
// // 만약 값이 변경되면 컴포넌트가 자동으로 다시 렌더링되어 화면에 새로운 값이 반영됨

import { useRef, useState } from 'react';
import Input from './components/Input';

// import { useRef } from 'react';

// import { useState } from 'react';

// // 리액트 훅(16.8)
// // 함수형 컴포넌트에서도 상태(state)나 생명주기(lifecycle)같은 리액트 기능을 사용할 수 있게 해주는 특별한 함수
// // useState(), useRef(), useReducer(), useEffect() ...
// export default function App() {
//   // 0x01 -> { name: 'lee', age: 20 }
//   const [user, setUser] = useState({ name: 'lee', age: 20 }); // [상태변수, 상태업데이트함수]
//   const handleUpdate = () => {
//     // 상태업데이트함수(값) -> 변경해야되는 상태 값이 이전 상태와 상관이 없다면
//     // setUser({
//     //   name: 'park',
//     //   age: 30,
//     // });
//     // 상태업데이트함수(콜백) -> 변경해야되는 상태 값이 이전 상태와 관련이 있다면
//     // setUser((user) => ({ ...user, age: 30 }));

//     // 값은 변경 됐지만, 렌더링 안됨
//     // 주소 참조값은 바뀌지 않았다.
//     user.age = 30; // 0x01 -> { name: 'lee', age: 20 }
//     const newUser = structuredClone(user); // 깊은 복사
//     setUser(newUser); // setUser(0x01)
//   };
//   return (
//     <>
//       <h1>Name: {user.name}</h1>
//       <h1>Age: {user.age}</h1>
//       <button onClick={handleUpdate}>클릭</button>
//     </>
//   );
// }

// useState + Form
// onChange (React) -> onInput + onChange (DOM)
// export default function App() {
//   const [value, setValue] = useState('남자');
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };
//   return (
//     <>
//       <h1>{value}</h1>
//       <div>
//         <input
//           type='radio'
//           name='gender'
//           value='male'
//           defaultChecked
//           onChange={handleChange}
//         />{' '}
//         남자
//       </div>
//       <div>
//         <input
//           type='radio'
//           value='female'
//           name='gender'
//           onChange={handleChange}
//         />{' '}
//         여자
//       </div>
//     </>
//   );
// }

// 폼 요소를 제어하는 방법
// 제어 컨트롤러 (controlled) - 실시간 입력값 체크
// 입력 값이 리액트의 상태에 의해서 제어되는 컴포넌트
// useState + onChange

// 비제어 컨트롤러 (uncontrolled) - 실시간 입력값 체크가 불가능
// 입력값이 DOM 자체에서 관리된느 컴포넌트
// useRef + current

// useRef()
// 리액트에서 값을 기억하거나 DOM 요소에 직접 접근할 때 사용하는 훅
// current 속성을 가지는 객체를 반환합니다
// current 속성으로 우리가 원하는 값을 저장할 수도 있고
// DOM 요소에 접근할 도 있다.
// export default function App() {
//   const ref = useRef<HTMLInputElement>(null); // current 속성이 포함된 객체가 반환됨
//   const checkboxRef = useRef<HTMLInputElement>(null);
//   const maleRef = useRef<HTMLInputElement>(null);
//   const femaleRef = useRef<HTMLInputElement>(null);
//   const texxRef = useRef<HTMLTextAreaElement>(null);
//   const selectRef = useRef<HTMLSelectElement>(null);
//   const handlerClick = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const inputValue = ref.current?.value;
//     console.log(inputValue);

//     if (maleRef?.current?.checked) {
//       console.log('남성');
//     } else if (femaleRef.current?.checked) {
//       console.log('여성');
//     } else {
//       console.log('선택된 값 없음');
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handlerClick}>
//         <select ref={selectRef}>
//           <option value='apple'>apple</option>
//           <option value='banana'>banana</option>
//           <option value='orange'>orange</option>
//         </select>
//         <textarea ref={texxRef}></textarea>
//         <input type='color' ref={ref} />
//         <input type='checkbox' ref={checkboxRef} />
//         <input type='radio' ref={maleRef} /> 남자
//         <input type='radio' ref={femaleRef} /> 여자
//         <button type='submit'>전송</button>
//       </form>
//     </>
//   );
// }

export default function App() {
  const [email, setEmail] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const [pw, setPw] = useState('');
  const pwRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === '') {
      alert('이메일을 입력해주세요');
      emailRef.current?.focus();
    }

    if (pw.trim() === '') {
      alert('비밀번호를 입력해주세요');
    }

    console.log(email);
    console.log(pw);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='이메일 입력'
          item={email}
          setValue={setEmail}
          ref={emailRef}
        />
        <Input
          placeholder='비밀번호 입력'
          item={pw}
          setValue={setPw}
          ref={pwRef}
        />
        <button>로그인</button>
      </form>
    </>
  );
}
