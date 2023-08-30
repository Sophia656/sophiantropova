import React from 'react';
import { Image, Wrapper } from './styled';
import img1 from '../../../../img/web/personal/hasard/1.jpg';
import img2 from '../../../../img/web/personal/hasard/2.jpg';
import img3 from '../../../../img/web/personal/hasard/3.jpg';
import img4 from '../../../../img/web/personal/hasard/4.jpg';

const Hasard = () => {
    return (
        <Wrapper>
            <Image backimg={`url(${img1})`} />
            <Image backimg={`url(${img2})`} />
            <Image backimg={`url(${img3})`} />
            <Image backimg={`url(${img4})`} />
        </Wrapper>
    );
};

export default Hasard;