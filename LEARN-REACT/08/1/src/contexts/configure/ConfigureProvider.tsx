import { useState } from 'react';
import { ConfigContext } from './configureContext';

export default function ConfigureProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('darkmode');
  const setDarkmode = () => setTheme('dark');
  const setLightmode = () => setTheme('light');
  return (
    <>
      <ConfigContext value={{ theme, setDarkmode, setLightmode }}>
        {children}
      </ConfigContext>
    </>
  );
}
