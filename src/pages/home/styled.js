import styled from 'styled-components';
import image from '../../img/web/two_reclining.jpg';
import {TEXT_DARK, TEXT_LIGHT, RED, ROBOTO} from '../../components/css-settings/index';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const AgeModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const AgeModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25vw;
    height: 50vh;
    padding: 1vw;
    position: relative;
    backdrop-filter: blur(20px);
    border-radius: 15px;
`

export const ModalDesc = styled.div`
    color: ${TEXT_DARK};
    margin-bottom: 4vh;
    text-align: center;
    margin-top: 0vh;
    text-transform: uppercase;
    font-size: 1.1rem;
    ${props => props.rus && `
        margin-bottom: 4vh;
        font-family: ${ROBOTO};
        word-spacing: 1px;
        font-size: 1rem;
    `};
`

export const DescTitle = styled.div`
    color: ${RED};
    font-size: 1.5rem;
    margin-bottom: -4vh;
    ${props => props.rus && `
        font-size: 1.4rem;
        margin-bottom: -5vh;
        font-family: ${ROBOTO};
    `};
`

export const ModalBtn = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    color: ${TEXT_DARK};
    cursor: pointer;
    width: 15vw;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    &:last-child {
        margin-top: 1vh;
    }
    &:hover {
        background: ${RED};
        color: ${TEXT_LIGHT};
    }
    ${props => props.rus && `
        font-family: ${ROBOTO};
    `};
`