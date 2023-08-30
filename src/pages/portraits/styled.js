import styled from 'styled-components';
// import {TEXT_LIGHT, ROBOTO} from '../../colors/index';

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
    width: 40vw;
    background: lightblue;
    margin: 10vh 0;
    color: red;
`