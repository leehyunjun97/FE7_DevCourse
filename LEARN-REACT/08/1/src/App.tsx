import Page from './components/Page';
import CountOutSideDisplay from './components/CountOutSideDisplay';
import CounterProvider from './contexts/counter/CounterProvider';
import ConfigureProvider from './contexts/configure/ConfigureProvider';

export default function App() {
  return (
    <>
      <ConfigureProvider>
        <CounterProvider>
          <Page />
          <CountOutSideDisplay />
        </CounterProvider>
      </ConfigureProvider>
    </>
  );
}
