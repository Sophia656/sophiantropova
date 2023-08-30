import React from 'react';
import { Wrapper } from './styled';
import img1 from '../../../../img/web/portraits/nastya/1.jpg';
import img2 from '../../../../img/web/portraits/nastya/2.jpg';
import img4 from '../../../../img/web/portraits/nastya/4.jpg';
import img5 from '../../../../img/web/portraits/nastya/5.jpg';
import MyImage from '../../../../components/UI/image/MyImage';

const Nastya = () => {
    return (
        <Wrapper>
            <MyImage cr_year='2022' w='true' backimg={`url(${img1})`} />
            <MyImage cr_year='2022' backimg={`url(${img2})`} />
            <MyImage cr_year='2022' backimg={`url(${img5})`} />
            <MyImage cr_year='2022' w='true' backimg={`url(${img4})`} />
        </Wrapper>
    );
};

export default Nastya;