import React, { createContext, useContext, useState } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (item) => {
    setHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, item];
      if (updatedHistory.length > 20) {
        updatedHistory.shift();
      }
      return updatedHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryProvider = () => useContext(HistoryContext);
