import React, { useContext } from 'react';
import { SeriesTitle, SeriesWrap, Wrapper } from './styled';
import hasard from '../../img/web/personal/hasard_cover.jpg';
import cities from '../../img/web/personal/cities_cover.jpg';
import ballet from '../../img/web/personal/ballet_cover.jpg';
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
            <SeriesWrap backimg={`url(${ballet})`}>                
                <SeriesTitle onClick={handleClick} to='/personal/ballet_class'>Ballet class</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PersonalPage;