import React, { createContext, useContext, useState } from 'react';

const FormulaBarContext = createContext();

export const FormulaBarProvider = ({ children }) => {
  const [formulaBarContent, setFormulaBarContent] = useState(""); 

  const resetFormulaBarContent = () => {
    setFormulaBarContent(""); 
  };

  return (
    <FormulaBarContext.Provider value={{ formulaBarContent, setFormulaBarContent, resetFormulaBarContent }}>
      {children}
    </FormulaBarContext.Provider>
  );
};

export const useFormulaBarProvider = () => useContext(FormulaBarContext);
