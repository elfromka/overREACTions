import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Wrapper from "./components/Wrapper";

ReactDOM.render(
    <Wrapper>
        <App date={Date.now()} />
    </Wrapper>,
    document.getElementById("root")
);
