import React, { useState, useEffect } from "react";
import logo from "../assets/money.png";
import Select from "./Select";
import Input from "./Input";
import Tooltip from "./Tooltip";
import { loadData, loadSelectedData } from "../agent";

export default function CurrencyChanger() {
    const [currencyOptionsNoFrom, setCurrencyOptionsNoFrom] = useState([]);
    const [currencyOptionsNoTo, setCurrencyOptionsNoTo] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true); // returns boolean accordingly to the change of the first(true) or the second(false) input

    // check which input changed and modify amount accordingly
    let fromAmount, toAmount;
    if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = (amount * exchangeRate).toFixed(2);
    } else {
        toAmount = amount;
        fromAmount = (amount / exchangeRate).toFixed(2);
    }

    // load data from API
    useEffect(() => {
        loadData().then(data => {
            const currencyOptions = [data.base, ...Object.keys(data.rates)];

            const fromCurrencies = currencyOptions.filter(function(value) {
                return value !== Object.keys(data.rates)[8];
            });

            const toCurrencies = currencyOptions.filter(function(value) {
                return value !== data.base;
            });

            setFromCurrency(data.base); // first, base currency returned from the API
            setToCurrency(Object.keys(data.rates)[8]); // get RON currency as second selected currency for the convert process
            setCurrencyOptionsNoFrom(fromCurrencies);
            setCurrencyOptionsNoTo(toCurrencies);

            setExchangeRate(data.rates[Object.keys(data.rates)[8]]);
        });
    }, []);

    // change on input
    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            loadSelectedData(fromCurrency, toCurrency).then(data =>
                setExchangeRate(data.rates[toCurrency])
            );
        }
    }, [fromCurrency, toCurrency]);

    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }

    function handleSwap(e) {
        e.preventDefault();

        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    return (
        <div>
            <img src={logo} alt="Currency Changer" className="money-img" />
            <h1>Currency Converter</h1>
            <p>
                Select the currency and add the amounts to get the calculation
            </p>

            <div className="container">
                <div className="currency">
                    <Select
                        currencyOptions={currencyOptionsNoFrom}
                        selectedCurrency={fromCurrency}
                        onChangeCurrency={e => setFromCurrency(e.target.value)}
                    />
                    <Input
                        onChangeAmount={handleFromAmountChange}
                        amount={fromAmount}
                    />
                </div>

                <div className="swap-rate-container">
                    <button
                        className="btn tooltip"
                        id="swap"
                        onClick={handleSwap}
                    >
                        Swap
                        <Tooltip
                            message={`Click to swap between ${fromCurrency} and ${toCurrency}`}
                        >
                            tooltip
                        </Tooltip>
                    </button>

                    <div className="rate" id="rate">
                        1 {fromCurrency} = {exchangeRate} {toCurrency}
                    </div>
                </div>

                <div className="currency">
                    <Select
                        currencyOptions={currencyOptionsNoTo}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={e => setToCurrency(e.target.value)}
                    />
                    <Input
                        onChangeAmount={handleToAmountChange}
                        amount={toAmount}
                    />
                </div>
            </div>
        </div>
    );
}
