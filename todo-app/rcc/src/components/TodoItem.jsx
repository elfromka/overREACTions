import React from "react";

export default function TodoItem(props) {
    const {
        todoInfo: { id, text, completed },
        handleChange
    } = props;

    const completedStyle = {
        color: "grey",
        textDecoration: "line-through"
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                name={id}
                checked={completed}
                onChange={() => handleChange(id)}
            />
            <label htmlFor={id} style={completed ? completedStyle : null}>
                {text}
            </label>
            <br />
        </div>
    );
}
