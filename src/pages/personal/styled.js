import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {TEXT_LIGHT, ROBOTO, RED} from '../../components/css-settings/index';

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: fit-content;
    display: flex;
    // flex-direction: column;
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
    background: pink;
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
    width: 18vw;
    
    // backdrop-filter: blur(15px);
    cursor: pointer;
    font-weight: bold;
    font-size: 1.6rem;
    border-radius: 4px;
    text-align: center;
    line-height: 4.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    text-transform: uppercase;
    &:hover {
        width: 25vw;
        font-size: 2.4rem;
        line-height: 5.5vh;
        // border: ${props => props.border || `1px solid ${TEXT_LIGHT}`};
    }
    ${props => props.rus && `
        font-weight: 800;
        font-size: 1.3rem;
        font-family: ${ROBOTO};
    `};
`