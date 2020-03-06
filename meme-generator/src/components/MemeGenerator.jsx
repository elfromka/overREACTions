import React, { useState, useEffect } from "react";

export default function MemeGenerator() {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [randomImage, setRandomImage] = useState(
        "http://i.imgflip.com/1bij.jpg"
    );
    const [allMemeImages, setAllMemeImages] = useState([]);

    async function fetchData() {
        const response = await fetch("https://api.imgflip.com/get_memes");
        response.json().then(response => {
            const { memes } = response.data;
            setAllMemeImages(memes);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>fdjgdkflgjdkfgdkjlf</h1>
        </div>
    );
}
