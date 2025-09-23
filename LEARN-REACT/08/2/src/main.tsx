import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

// 전역 상태 관리
// Context API
// Redux Toolkit (Redux vs Redux Toolkit)
// Redux -> 2015년도에 출시된 전역 상태 관리 라이브러리
// Zustand (Recoil, Mobx..)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
