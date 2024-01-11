import ImageGallery from "react-image-gallery";
import React from 'react';

type Gallery = {
    projectGallery: [],
}


const Gallery = ({projectGallery}:any) => {
    return (
        <ImageGallery items={projectGallery}/>
    );
};

export default Gallery;