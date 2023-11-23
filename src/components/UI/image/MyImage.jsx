import React, { useState } from 'react';
import Copyright from '../copyright/Copyright';
import { ImageItem, ImageWrapper } from './styled';

const MyImage = ({cr_year, w, backimg}) => {
    const [showCr, setShowCr] = useState(false)

    const onHandleRightClick = (e) => {
        e.preventDefault()
        setShowCr(true)
        setTimeout(() => {
            setShowCr(false)
        }, 1500);
    }

    return (
        <ImageWrapper>
            {showCr && <Copyright year={cr_year}  />}
            <ImageItem
            backimg={backimg}
            onContextMenu={onHandleRightClick} 
            w={w}
            />
        </ImageWrapper>
    );
};

export default MyImage;