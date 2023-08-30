import React, { useContext } from 'react';
import { SeriesTitle, SeriesWrap, Wrapper } from './styled';
import { PagesContext } from '../../components/context/context';
import anton from '../../img/web/portraits/anton_cover.jpg';
import rina_anna from '../../img/web/portraits/rina_anna_cover.jpg';
import nadya from '../../img/web/portraits/nadya_cover.jpg';
import kaya from '../../img/web/portraits/kaya_cover.jpg';
import nastya from '../../img/web/portraits/nastya_cover.jpg';
import nastasya from '../../img/web/portraits/nastasya_cover.jpg';

const PortraitsPage = () => {
    const { handleClick } = useContext(PagesContext)
    return (
        <Wrapper>
            <SeriesWrap backimg={`url(${anton})`}>
                <SeriesTitle onClick={handleClick} to='/portraits/anton'>ANTON<br/>2023</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${kaya})`}>
                <SeriesTitle onClick={handleClick} to='/portraits/kaya'>KAYA KAN<br/>2022</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${rina_anna})`}>
                <SeriesTitle onClick={handleClick} to='/portraits/rina_anna'>RINA & ANNA<br/>2022</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${nadya})`}>
                <SeriesTitle onClick={handleClick} to='/portraits/nadya'>NADYA<br/>2022</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${nastasya})`}>
                <SeriesTitle onClick={handleClick} to='/portraits/nastasya'>NASTASYA<br/>2021</SeriesTitle>
            </SeriesWrap>
            <SeriesWrap backimg={`url(${nastya})`}>
                <SeriesTitle onClick={handleClick} to='/portraits/nastya'>NASTYA<br/>2020</SeriesTitle>
            </SeriesWrap>
        </Wrapper>
    );
};

export default PortraitsPage;