import React from "react";

export default function Image({ image }) {
    return (
        <div className="file-item">
            <img className="file-img" src={image.src} alt="img" />
        </div>
    );
}
