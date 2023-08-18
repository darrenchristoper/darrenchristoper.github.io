
import React from 'react';
import ImageSlider from "./ImageSlider";

export default function DefaultCarousel() {
    const images = [
        "/hello.svg",
        "/&.svg",
        "/welcome.svg",

    ];
    return (
            <ImageSlider>
                {images.map((imageUrl, i) => (
                    <img key={i} src={imageUrl} className="mx-8" style={{width:"480px",height:"200px",   borderRadius:"2rem" }} />
                ))}
            </ImageSlider>
    )
}


