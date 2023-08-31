import styled from 'styled-components';
import { ROBOTO } from '../../../../components/css-settings/index'

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    width: 70vw;
    height: fit-content;
    color: white;
    margin-top: 6vh;
    font-size: 2rem;
    line-height: 4.5vh;
    text-align: justify;
    margin-bottom: 10vh;
    ${props => props.rus && `
        font-weight: 200;
        font-size: 1.9rem;
        font-family: ${ROBOTO};
    `};
`