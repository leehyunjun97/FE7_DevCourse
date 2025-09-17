// 1. 컴포넌트(Component)
// 1.1 UI를 구성하는 가장 작은 단위이자, 재사용 가능한 독립적인 블록을 의미

// 1.2 컴포넌트의 정의 방법
// 1.2.1 클래스형 컴포넌트(Class Component)
// 1.2.1.1 React.Component를 상속받아 만들며, render() 메서드 안에 JSX 반환

// 1.2.2 함수형 컴포넌트(Function Component)
// 1.2.2.1 함수로 정의하며, props를 받아 JSX로 반환

// 1.3 컴포넌트의 공통적인 특징
// 1.3.1 JSX 문법을 리턴한다는 것
// 1.3.2 JSX문법은 JavaScript + XML 확장 문법으로, 자바스크립트 안에서 HTML과 비슷한 구문을 쓸 수 있게 해주는 확장 문법

// 1.4 클래스형 컴포넌트는 리액트 초창기부터 존재했던 방식
// 1.5 함수형 컴포넌트는 리액트 0.14 버전(2015)
// 1.6 React 16.8 (2019년 2월) 리액트(react hooks)

// 1.7 JSX(Syntatic Sugar)
// 1.7.1 React.createElement() 문법적 설탕(설탕 문법)

// 1.8 JSX의 특징
// 1.8.1 반드시 하나의 루트 태그를 가져야만 한다.
// 1.8.2 여러 줄을 리턴할 때는 소괄호로 묶어준다
// 1.8.3 반드시 태그는 닫아준다
// 1.8.3.1 <p>Hello World</p>, <br /> -> 빈태그, <br>
// 1.8.4 태그의 속성은 카멜 케이스로 작성한다.
// 1.8.4.1 class -> className, for -> htmlFor
// 1.8.4.2 readonly -> realOnly, maxlength -> maxLength
// 1.8.4.3 data-*, aria-*, 원래 그대로 사용할 수 있다.
// 1.8.5 JSX는 표현식을 사용할 수 있다.
// 1.8.6 인라인 스타일은 객체로 나타낸다.

// 2. 컴포넌트
// 2.1 UI를 구성하는 가장 작은 단위이자, 재사용 가능한 독립적인 블록을 의미

// 3. 스타일링
// 3.1 전통적인 스타일링 방법
// 3.1.1 인라인 스타일(inline style)
// 3.1.1.1 style 속성으로 스타일을 지정하는 방법
// 3.1.2 외부 스타일(external style), 글로벌 스타일(Global Style)
// 3.1.2.1 별도의 CSS 파일에 CSS 코드를 작성하고, 리액트 컴포넌트 파일과 연결해서 사용하는 방법
// 장점 - 퍼블리셔를 채용하는 것보다 쌈
// 단점 -globals css 스타일을 한다는 것




// 3.2 CSS Modules (*.module.css)
// 3.2.1 classnames

// 3.3 Tailwind CSS
// 3.4 CSS-IN-JS
