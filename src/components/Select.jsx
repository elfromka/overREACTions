import React from "react";

export default function Select(props) {
    const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
    return (
        <div>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
