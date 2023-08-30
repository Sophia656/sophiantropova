import React from 'react';
import { Image, Wrapper } from './styled';
import img1 from '../../../../img/web/personal/cities/1.jpg';
import img2 from '../../../../img/web/personal/cities/2.jpg';

const Cities = () => {
    return (
        <Wrapper>
            <Image backimg={`url(${img1})`} />
            <Image backimg={`url(${img2})`} />
        </Wrapper>
    );
};

export default Cities;