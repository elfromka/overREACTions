import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
// import CountryFlag from "./components/CountryFlag";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "./components/Wrapper";

function App(props) {
    const context = useContext(Context);
    // const allLanguages = ["en-US", "hu-HU", "ro-RO"];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <span>
                    {allLanguages.map(option => (
                        <CountryFlag
                            localeLanguage={option}
                            key={option}
                            value={context.locale}
                            onClick={context.selectLanguage}
                        />
                    ))}
                </span> */}
                <select
                    value={context.locale}
                    onChange={context.selectLanguage}
                >
                    <option value="en-US">English</option>
                    <option value="hu-HU">Magyar</option>
                    <option value="ro-RO">Română</option>
                </select>
                <p>
                    <FormattedMessage
                        id="app.header"
                        defaultMessage="Edit <code>src/App.js</code> and save to reload."
                        values={{
                            fileName: "src/App.js",
                            code: word => <code>{word}</code>
                        }}
                    />
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FormattedMessage
                        id="app.content"
                        defaultMessage="Learn React"
                    />
                </a>
                <br />
                <FormattedMessage
                    id="app.dev.community"
                    defaultMessage="Join DEV.to's React community"
                    values={{ devCommunity: "DEV.to" }}
                />
                <br />
                <FormattedDate
                    value={props.date}
                    year="numeric"
                    month="long"
                    day="numeric"
                    weekday="long"
                />
            </header>
        </div>
    );
}

export default App;
