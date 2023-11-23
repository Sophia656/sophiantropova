import React, { useContext } from 'react';
import { SeriesTitle, SeriesWrap, Wrapper } from './styled';
import threeMirrors from '../../img/web/personal/hasard_cover.jpg';
import cities from '../../img/web/personal/cities_cover.jpg';
import { PagesContext } from '../../components/context/context';

const PersonalPage = () => {
    const { handleClick } = useContext(PagesContext)

    return (
        <Wrapper>
            <SeriesWrap backimg={`url(${threeMirrors})`}>
                <SeriesTitle onClick={handleClick} to='/personal/three_mirrors_without_amalgam'>THREE MIRRORS WITHOUT AMALGAM</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${cities})`}>                
                <SeriesTitle onClick={handleClick} to='/personal/between_the_city_yes_and_the_city_no'>Between the city Yes and the city No</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PersonalPage;