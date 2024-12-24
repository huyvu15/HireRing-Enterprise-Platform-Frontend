import React from "react";
import './gallery.css';
const Gallery = () => {
    return (
        <div className="gallery">
        <div className="gallery__image">
            <img src="https://assets.codepen.io/10414/IMG_3410.jpg" alt="" />
        </div>
        
        <div className="gallery__image">
            <img src="https://assets.codepen.io/10414/IMG_3876.jpg" alt="" />
        </div>
        
        <div className="gallery__image">
            <img src="https://assets.codepen.io/10414/IMG_2021.jpg" alt="" />
        </div>
        </div>
    );
};
export default Gallery;
