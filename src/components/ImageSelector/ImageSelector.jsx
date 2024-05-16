import React from "react";
import "./ImageSelector.scss";


const ImageSelector = ({ predeterminedImages, handleImageSelect }) => {
    return (
        <div className="image-selector">
            {predeterminedImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    onClick={() => handleImageSelect(image)}
                />
            ))}
        </div>
    );
};

export default ImageSelector;
