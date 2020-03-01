import React from "react";
import "./reset.min.css";
import addIcon from "./resources/icons/addIcon.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <input
                    type="text"
                    placeholder="Enter an activity.."
                    id="item"
                />
                <button id="add">
                    <img alt="addIcon" className="add-icon" src={addIcon} />
                </button>
            </header>

            <div className="container-app">
                <ul className="todo" id="todo"></ul>

                <ul className="todo" id="completed"></ul>
            </div>
        </div>
    );
}

export default App;
