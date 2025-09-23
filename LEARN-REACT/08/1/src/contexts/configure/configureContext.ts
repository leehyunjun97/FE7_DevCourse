import { createContext } from 'react';

type ConfigContextType = {
  theme: string;
  setDarkmode: () => void;
  setLightmode: () => void;
};

export const ConfigContext = createContext<ConfigContextType | null>(null);
