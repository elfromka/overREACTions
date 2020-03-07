import React from "react";
import Image from "./Image";

export default function ImageList({ images }) {
    const renderImage = (image, index) => {
        return <Image image={image} key={image.id} />;
    };

    return <section className="file-list">{images.map(renderImage)}</section>;
}
