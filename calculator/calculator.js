
import React, { useState, useEffect } from "react";
import CalculatorButton from "./CalculatorButton";
import Header from "../Header/Header";
import { useFormulaBarProvider } from "./formulaBarProvider";
import { useHistoryProvider } from "../history/HistoryProvider";
import { evaluate } from 'mathjs';

import "../styles/navbar.css";
import "../styles/header.css";
import "../styles/calculatorGridStyles.css";

function CalculatorPage() {
    const [displayedNumber, setDisplayedNumber] = useState();
    const [isCalculated, setIsCalculated] = useState(true);
    const { formulaBarContent, setFormulaBarContent, resetFormulaBarContent } = useFormulaBarProvider();
    const { addToHistory } = useHistoryProvider();

    useEffect(() => {
        setDisplayedNumber(formulaBarContent);
    }, [formulaBarContent]);

    useEffect(() => {
        const savedFormulaBarContent = localStorage.getItem('formulaBarContent');
        if (savedFormulaBarContent) {
            setFormulaBarContent(savedFormulaBarContent);
        } else {
            setFormulaBarContent("");
        }
    }, [setFormulaBarContent]);

    useEffect(() => {
        return () => localStorage.setItem('formulaBarContent', formulaBarContent);
    }, [formulaBarContent]);

    const handleOperationButtonClick = (operation) => {
        setIsCalculated(false);
        let newDisplayedNumber = displayedNumber + operation;

        if (isCalculated && !isNaN(operation)) {
            newDisplayedNumber = operation;
        }

        setDisplayedNumber(newDisplayedNumber);
        setFormulaBarContent(newDisplayedNumber);
        addToHistory(operation);
    };

    const handleCalculate = () => {
        try {
            setIsCalculated(true);
            const result = evaluate(formulaBarContent);
            setFormulaBarContent(String(result));
            addToHistory(` = ${result}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleDeleteButtonClick = () => {
        resetFormulaBarContent();
    };

    const handleBackspaceButtonClick = () => {
        if (formulaBarContent.length > 0) {
            const newFormulaBarContent = formulaBarContent.slice(0, -1);
            setFormulaBarContent(newFormulaBarContent);
        }
    };

    return (
        <div className="calcPage">
            <Header />
            <div className="calcContainer">
                <div className="calc-grid">
                    <div className="formulaBar">{formulaBarContent}</div>
                    {[7, 8, 9, "*", 4, 5, 6, "/", 1, 2, 3, "+", 0].map((number) => (
                        <CalculatorButton key={number} label={number} onClick={() => handleOperationButtonClick(String(number))} />
                    ))}
                    <div className="delete">
                        <CalculatorButton className="clear-button" label="Clear" onClick={handleDeleteButtonClick} />
                        <CalculatorButton className="backspace-button" label="&#8592;" onClick={handleBackspaceButtonClick} />
                    </div>
                    <CalculatorButton label="=" onClick={handleCalculate} />
                    <CalculatorButton label="-" onClick={() => handleOperationButtonClick("-")} />
                </div>
            </div>
        </div>
    );
}

export default CalculatorPage;
