import React, { useCallback } from "react";
import Dropzone from "./components/Dropzone";

import "./App.css";

function App() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    return (
        <div className="App">
            <h1 className="text-center">Image upload with Drag and Drop</h1>
            <Dropzone onDrop={onDrop} accept={"image/*"} />
        </div>
    );
}

export default App;
