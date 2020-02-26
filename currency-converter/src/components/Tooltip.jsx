import React from "react";

export default function Tooltip(props) {
    const { message } = props;

    return <span className="tooltiptext">{message}</span>;
}
