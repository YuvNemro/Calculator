import React, { useState } from "react";
import { useFormulaBarProvider } from "../calculator/formulaBarProvider";
import { useHeaderProvider } from "../Header/HeaderProvider";
import { useNavigate } from 'react-router-dom';

import InputField from "./InputField";

import "../styles/login.css";

function LoginPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { resetFormulaBarContent } = useFormulaBarProvider();
    const { setUserNameForHeader } = useHeaderProvider();

    const handleLogin = () => {
        if (userName && email) {
            resetFormulaBarContent();
            setUserNameForHeader(userName);
            navigate("/CalculatorPage");
        } else {
            setErrorMessage("Please enter both username and email");
        }
    };

    return (
        <div className="loginPage">
            <div className="login-box">
                <InputField className="input-field" id="username" label="Username" type="text" placeholder="Enter your username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <InputField className="input-field" id="email" label="Email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="button-container">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
