import React from 'react';
import { Image, Wrapper } from './styled';
import img1 from '../../../../img/web/personal/ballet/1.jpg';
import img2 from '../../../../img/web/personal/ballet/2.jpg';
import img3 from '../../../../img/web/personal/ballet/3.jpg';
import img4 from '../../../../img/web/personal/ballet/4.jpg';

const Ballet = () => {
    return (
        <Wrapper>
            <Image w='true' backimg={`url(${img1})`} />
            <Image w='true' backimg={`url(${img2})`} />
            <Image w='true' backimg={`url(${img3})`} />
            <Image backimg={`url(${img4})`} />
        </Wrapper>
    );
};

export default Ballet;