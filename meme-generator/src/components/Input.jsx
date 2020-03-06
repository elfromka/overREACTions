import React from "react";

export default function Input(props) {
    const { value, name, placeholder, handleChange } = props;

    return (
        <input
            type="text"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}
