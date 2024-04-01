import { useHistoryProvider } from "../history/HistoryProvider";

import React from "react";
import Header from "../Header/Header";

import "../styles/History.css";

function History() {
    const { clearHistory, history } = useHistoryProvider();

    return (
        <div className="history">
            <div>
                <Header />
            </div>
            <ol>
                {history.map((item, index) => (
                    <li key={index}>{`${item}`}</li>
                ))}
            </ol>
            <button className="clearHistory" onClick={clearHistory}>Clear History</button>
        </div>
    );
}

export default History;
