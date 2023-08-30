import React, { useContext } from 'react';
import { SeriesTitle, SeriesWrap, Wrapper } from './styled';
import hasard from '../../img/web/personal/hasard_cover.jpg';
import cities from '../../img/web/personal/cities_cover.jpg';
import destrudo from '../../img/web/personal/destrudo_cover.jpg';
import { PagesContext } from '../../components/context/context';

const PersonalPage = () => {
    const { handleClick } = useContext(PagesContext)

    return (
        <Wrapper>
            <SeriesWrap backimg={`url(${hasard})`}>
                <SeriesTitle onClick={handleClick} to='/personal/hasard'>HASARD OBJECTIF</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${cities})`}>                
                <SeriesTitle onClick={handleClick} to='/personal/between_the_city_yes_and_the_city_no'>Between the city Yes and the city No</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${destrudo})`}>                
                <SeriesTitle onClick={handleClick} to='/personal/destrudo'>destrudo</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PersonalPage;