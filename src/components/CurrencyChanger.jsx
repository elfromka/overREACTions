import React, { useState, useEffect } from "react";
import logo from "../assets/money.png";
import Select from "./Select";
import Input from "./Input";

const API_BASE_URL = "https://api.exchangeratesapi.io/latest";

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

    const dataService = {
        loadData: fetch(API_BASE_URL).then(res => res.json())
    };

    // load data from API
    useEffect(() => {
        dataService.loadData().then(response => {
            console.log(response);
            // const currencyOptions = [data.base, ...Object.keys(data.rates)];
            // const secondCurrencySelect = setToCurrency(
            //     Object.keys(data.rates)[8]
            // ); // get RON currency as second selected currency for the convert process
            // // console.log(secondCurrencySelect);
            // const fromCurrencies = currencyOptions.filter(function(value) {
            //     return value !== secondCurrencySelect;
            // });
            // const toCurrencies = currencyOptions.filter(function(value) {
            //     return value !== data.base;
            // });
            // setCurrencyOptionsNoFrom(fromCurrencies);
            // setCurrencyOptionsNoTo(toCurrencies);
            // setFromCurrency(data.base); // first, base currency returned from the API
            // setExchangeRate(data.rates[secondCurrencySelect]);
        });
    }, []);

    // change on input
    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${API_BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]));
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
                    <button className="btn" id="swap">
                        Swap
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
