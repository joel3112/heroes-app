import { createContext, useState } from 'react';

export const ContainerContext = createContext({});

export const ContainerContextProvider = ({ children }) => {
  const [container, setContainer] = useState(null);

  return (
    <ContainerContext.Provider value={{ container, setContainer }}>
      {children}
    </ContainerContext.Provider>
  );
};
