import React, { createContext, useMemo, useState } from 'react';
import movies from '../MOCK_DATA.json';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const mov = useMemo(() => movies, [])
  const [data, setData] = useState(mov);

  return (
    <GlobalStateContext.Provider value={{ data, setData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
