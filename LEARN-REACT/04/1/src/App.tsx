// import Child from './components/Child';
// import Header from './components/Header';

import Profile from './components/Profile';

export default function App() {
  const clickHandler = (name: string, id: string) => {
    console.log(name, id);
  };
  return (
    <>
      {/* <Child
        str={'Hello, World!'}
        num={42}
        arr={['Apple', 'Banana', 'Cherry']}
        obj={{ name: 'Alice', age: 30 }}
        isLoggedIn={true}
        click={click}
        value={['asd']}
        style={{ fontSize: '50px', color: 'red' }}
        Header={Header}
      /> */}
      <Profile
        backImg={
          'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        userImg={
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        username={'Sally Ramos'}
        instaId={'@sallytheramos'}
        handler={clickHandler}
      />
    </>
  );
}
