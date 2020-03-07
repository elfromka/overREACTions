import React, { useState, useCallback } from "react";
import Dropzone from "./components/Dropzone";
import cuid from "cuid";

import "./App.css";

function App() {
    const [images, setImages] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(image => {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImages(prevState => [
                    ...prevState,
                    { id: cuid(), src: e.target.result }
                ]);
            };
            reader.readAsDataURL(image);
            return image;
        });
    }, []);

    console.log(images);

    return (
        <div className="App">
            <h1 className="text-center">Image upload with Drag and Drop</h1>
            <Dropzone onDrop={onDrop} accept={"image/*"} />
        </div>
    );
}

export default App;
