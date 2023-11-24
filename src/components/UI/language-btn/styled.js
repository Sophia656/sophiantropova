import styled from 'styled-components';
import {device} from '../../css-settings/styles/sizes';

export const Btn = styled.div`
    width: 2vw;
    height: 2vw;
    background: rgba(0,0,0,0.7);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 1vw;
    color: #cabdb0;
    font-size: 1.2rem;
    z-index: 500;
    cursor: pointer;
    @media ${device.tablet} {
        margin: 4vh 6vw;
    }
    @media ${device.mobileL} {
        margin: 4vh 10vw;
    }
`