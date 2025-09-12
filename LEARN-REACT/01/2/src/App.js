// create-react-app
// 페이스북

// javascript가 아님
// JSX(JavaScript + XML) 확장 문법
// 페이스북 개발
// 확장자가 .js ?

// JSX -> .js ????
// JSX -> Javascript (트랜스파일)
// .jsx

// 현대 트렌드 흐름상 -> jsx (JSX)
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
