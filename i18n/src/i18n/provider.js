import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import descriptions from "./descriptions";

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        descriptions={descriptions[locale]}
    >
        {children}
    </IntlProvider>
);

export default Provider;
