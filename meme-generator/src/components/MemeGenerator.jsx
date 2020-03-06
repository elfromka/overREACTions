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

    const handleChange = e => {
        e.target.name === "topText"
            ? setTopText(e.target.value)
            : setBottomText(e.target.value);
    };

    const handleGenerate = e => {
        e.preventDefault();
        const randomMeme =
            allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
        const { url: newMeme } = randomMeme;
        setRandomImage(newMeme);
    };

    return (
        <div>
            <form className="meme-form">
                <input
                    type="text"
                    value={topText}
                    name="topText"
                    placeholder="Top text"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    value={bottomText}
                    name="bottomText"
                    placeholder="Bottom text"
                    onChange={handleChange}
                />
                <button onClick={handleGenerate}>Generate</button>
            </form>
            <div className="meme">
                <img src={randomImage} alt="" />
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>
        </div>
    );
}
