import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";

function App() {
    return (
        <I18nProvider locale={LOCALES.FRENCH}>
            <div className="App">
                <header className="App-header">
                    <FormattedMessage id="hello" />
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </I18nProvider>
    );
}

export default App;
