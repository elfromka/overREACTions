import React from "react";

export default function Input(props) {
    const { onChangeAmount, amount } = props;
    return (
        <div>
            <input type="number" value={amount} onChange={onChangeAmount} />
        </div>
    );
}
