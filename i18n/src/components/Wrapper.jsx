import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../languages/en-US.json";
import Hungarian from "../languages/hu-HU.json";
import Romanian from "../languages/ro-RO.json";

export const Context = React.createContext();
const local = navigator.language; // current locale of the user's PC/OS

let language;
if (local === "en-US") {
    language = English;
} else if (local === "hu-HU") {
    language = Hungarian;
} else {
    language = Romanian;
}

export default function Wrapper(props) {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(language);

    function selectLanguage(e) {
        const newLocale = e.target.lang;
        setLocale(newLocale);
        if (newLocale === "hu-HU") {
            setMessages(Hungarian);
        } else if (newLocale === "ro-RO") {
            setMessages(Romanian);
        } else {
            setMessages(English);
        }
    }

    return (
        <Context.Provider value={{ locale, selectLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}
