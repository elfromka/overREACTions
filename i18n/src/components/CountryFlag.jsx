import React from "react";

export default function CountryFlag(props) {
    const { localeLanguage, onClick, isActive } = props;

    return (
        <span className="py-10">
            <img
                src={`../images/country_flags/${localeLanguage}.png`}
                alt={`${localeLanguage} language icon`}
                data-lang={localeLanguage}
                className={`language-icon zoom ${isActive ? "active" : ""}`}
                onClick={onClick}
            />
        </span>
    );
}
