import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Fullimg = ({ src }) => {
    return (
        <PhotoProvider>
            <PhotoView src={src}>
                <img src={src} alt="" />
            </PhotoView>
        </PhotoProvider>
    );
};

export default Fullimg;