import React from 'react';
import { Image, Wrapper } from './styled';
import img1 from '../../../../img/web/personal/cities/1.jpg';
import img2 from '../../../../img/web/personal/cities/2.jpg';
import img3 from '../../../../img/web/personal/cities/3.jpg';
import img4 from '../../../../img/web/personal/cities/4.jpg';
import img5 from '../../../../img/web/personal/cities/5.jpg';

const Cities = () => {
    
    return (
        <Wrapper>
            <Image w='true' backimg={`url(${img1})`} />
            <Image w='true' backimg={`url(${img2})`} />
            <Image backimg={`url(${img3})`} />
            <Image backimg={`url(${img4})`} />
            <Image w='true' backimg={`url(${img5})`} />
        </Wrapper>
    );
};

export default Cities;