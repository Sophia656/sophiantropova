import React, { useState } from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/personal/hasard/1.jpg';
import img2 from '../../../../img/web/personal/hasard/2.jpg';
import img3 from '../../../../img/web/personal/hasard/3.jpg';
import img4 from '../../../../img/web/personal/hasard/4.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Hasard = () => {

    return (
        <Wrapper>
            <MyImage cr_year='2021' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2021' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2021' backimg={`url(${img4})`} />
        </Wrapper>
    );
};

export default Hasard;