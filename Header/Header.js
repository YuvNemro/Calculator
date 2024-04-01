import { Link, useNavigate } from 'react-router-dom';
import { useHeaderProvider } from "./HeaderProvider";
import { useHistoryProvider } from "../history/HistoryProvider";
import { useFormulaBarProvider } from "../calculator/formulaBarProvider";

import React from "react";



function Header() {
  const { resetFormulaBarContent } = useFormulaBarProvider(); 
  const { clearHistory } = useHistoryProvider();
  const { username } = useHeaderProvider();
  const navigate = useNavigate();


  const handleLogout = () => {
    resetFormulaBarContent(); 
    clearHistory();
    navigate("/")
  };
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/CalculatorPage" className="nav-button">Calculator</Link>
          <Link to="/HistoryPage" className="nav-button">History</Link>
        </div>
        <div className="nav-right">
          <button className="nav-button-logout" onClick={handleLogout}>Logout</button>
          <span className="username">{"Hello " + username}</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
