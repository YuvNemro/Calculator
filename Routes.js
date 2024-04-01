import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormulaBarProvider } from "./calculator/formulaBarProvider";
import { HistoryProvider } from "./history/HistoryProvider";
import { HeaderProvider } from "./Header/HeaderProvider";

import LoginPage from "./login/login";
import CalculatorPage from "./calculator/calculator";
import History from "./history/History";

export const AppRoutes = () => {

    return (
        <HeaderProvider>
            <HistoryProvider>
                <FormulaBarProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/CalculatorPage" element={<CalculatorPage />} />
                            <Route path="/HistoryPage" element={<History />} />
                        </Routes>
                    </Router>
                </FormulaBarProvider>
            </HistoryProvider>
        </HeaderProvider>
    )
}