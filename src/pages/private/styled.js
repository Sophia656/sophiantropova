import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ROBOTO, RED} from '../../components/css-settings/index';

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: fit-content;
    display: flex;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: ${props => props.mt || '0'};
`

export const SeriesWrap = styled.div`
    height: 80vh;
    width: 35vw;
    background: ${RED};
    margin: 10vh 0;
    color: red;
    background-image: ${props => props.backimg || 'none'};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SeriesTitle = styled(Link)`
    padding: 0.4vw 0.9vh;
    text-decoration: none;
    color: ${RED};
    width: 27vw;
    cursor: pointer;
    font-weight: 700;
    font-size: 2.3rem;
    border-radius: 4px;
    text-align: center;
    line-height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    text-transform: uppercase;
    &:hover {
        width: 30vw;
        font-size: 2.6rem;
        line-height: 5.5vh;
        backdrop-filter: blur(4px);
    }
    ${props => props.rus && `
        font-weight: 800;
        font-size: 1.3rem;
        font-family: ${ROBOTO};
    `};
`