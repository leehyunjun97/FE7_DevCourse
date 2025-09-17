import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { button } from './css/style.css';

export default function App() {
  const color = 'white';
  const Button = styled.button`
    color: blue;
  `;
  return (
    <>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>버튼</Button>
      <button className={button}>바닐라</button>
    </>
  );
}
