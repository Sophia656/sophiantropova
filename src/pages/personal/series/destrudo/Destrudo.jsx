import React, { useState } from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/personal/destrudo/1.jpg';
import img2 from '../../../../img/web/personal/destrudo/2.jpg';
import img3 from '../../../../img/web/personal/destrudo/3.jpg';
import img4 from '../../../../img/web/personal/destrudo/4.jpg';
import img5 from '../../../../img/web/personal/destrudo/5.jpg';
import img6 from '../../../../img/web/personal/destrudo/6.jpg';
import img8 from '../../../../img/web/personal/destrudo/8.jpg';
import img9 from '../../../../img/web/personal/destrudo/9.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Destrudo = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2023' w='true' backimg={`url(${img8})`} />
            {/* <MyImage cr_year='2022' w='true' backimg={`url(${img2})`} /> */}
            <MyImage cr_year='2022' backimg={`url(${img3})`} />
            <MyImage cr_year='2023' backimg={`url(${img4})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img6})`} />
            {/* <MyImage cr_year='2022' backimg={`url(${img7})`} />
            <MyImage cr_year='2023' w='true' backimg={`url(${img8})`} /> */}
            <MyImage cr_year='2023' w='true' backimg={`url(${img9})`} />
            {/* <MyImage cr_year='2022' backimg={`url(${img1})`} />
            <MyImage cr_year='2022' backimg={`url(${img2})`} /> */}
        </Wrapper>
    );
};

export default Destrudo;