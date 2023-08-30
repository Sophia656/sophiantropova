import React, { useContext } from 'react';
import { SeriesTitle, SeriesWrap, Wrapper } from './styled';
import ballet from '../../img/web/private/ballet_cover.jpg';
import wedd_day from '../../img/web/private/wedd-day_cover.jpg';
import centrifugal_force from '../../img/web/private/centrifugal_force_cover.jpg';
import { PagesContext } from '../../components/context/context';

const PrivatePage = () => {
    const { handleClick } = useContext(PagesContext)

    return (
        <Wrapper>
            <SeriesWrap backimg={`url(${wedd_day})`}>                
                <SeriesTitle onClick={handleClick} to='/private/wedd_day'>WEDD-DAY</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${ballet})`}>                
                <SeriesTitle onClick={handleClick} to='/private/ballet_class'>Ballet class</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${centrifugal_force})`}>                
                <SeriesTitle onClick={handleClick} to='/private/centrifugal_force'>centrifugal force</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PrivatePage;