import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const setUserNameForHeader = (name) => {
    setUsername(name);
  };

  return (
    <HeaderContext.Provider value={{ username, setUserNameForHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderProvider = () => useContext(HeaderContext);
