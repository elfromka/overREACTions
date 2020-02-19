import React from "react";
import CurrencyChanger from "./components/CurrencyChanger";
import Helmet from "react-helmet";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>React - Currency Converter</title>
            </Helmet>
            <CurrencyChanger />
        </div>
    );
}

export default App;
