const API_BASE_URL = "https://api.exchangeratesapi.io/latest";

export function loadData() {
    return fetch(API_BASE_URL).then(res => res.json());
}

export function loadSelectedData(fromCurrency, toCurrency) {
    return fetch(
        `${API_BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`
    ).then(res => res.json());
}
