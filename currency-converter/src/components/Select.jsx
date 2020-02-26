import React from "react";

export default function Select(props) {
    const {
        currencyOptions,
        selectedCurrency,
        disabledCurrency,
        onChangeCurrency
    } = props;

    return (
        <div>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions
                    .filter(x => x !== disabledCurrency)
                    .map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
}
