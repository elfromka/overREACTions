import React from "react";

export default function CountryFlag(props) {
    const { localeLanguage, onClick } = props;

    return (
        <span className="py-10">
            <img
                src={`../images/country_flags/${localeLanguage}.png`}
                alt="Language"
                className="hoverZoom"
                onClick={onClick}
            />
        </span>
    );
}
