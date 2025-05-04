import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {TEXT_LIGHT, RED, ROBOTO} from '../css-settings/colors';
import px2vw from '../css-settings/utils';
import {device} from '../css-settings/styles/sizes'

export const Wrapper = styled.div`
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 500;
    display: none;
    ${props => props.show &&`
        display: block;
    `}
    @media ${device.mobileL} {
        // height: 90vh;
        // margin: 5vh 0;
        background-size: 257vw 100vh;
    }
`
export const BurgerWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: inline-block;
    width: 80px;
    height: 80px;
    vertical-align: middle;
    line-height: 80px;
    text-align: right;
    cursor: pointer;
    z-index: 1000;
    @media ${device.mobileL} {
        // height: 90vh;
        margin-top: 1vh;
        // background-size: 257vw 100vh;
    }
    
`

export const BurgerItemTop = styled.span`
    background: ${props => props.dotback || TEXT_LIGHT};
    position: absolute;
    width: 40px;
    height: 8px;
    border-radius: 4px;
    left: 35px;
    top: 26px;
    width: 8px;
    transition: all 1s ease;
	text-align: center;
	font-size: 1.5em;
    ${props => props.active&&`
        background: ${RED};
        transform: rotate(45deg);
        top: 46px;
    `};
`
export const BurgerItemBottom = styled.span`
    background: ${props => props.dotback || TEXT_LIGHT};
    position: absolute;
    width: 40px;
    height: 8px;
    border-radius: 4px;
    left: 35px;
    bottom: 26px;
    width: 8px;
    transition: all 1s ease;
	text-align: center;
	font-size: 1.5em;
    ${props => props.active&&`
        background: ${RED};
    `};
`

export const BurgerMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    margin-top: 84vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 16vh;
    padding: 1vh 0;
    backdrop-filter: blur(15px);
    width: 100vw;
    // position: relative;
    opacity: 0;
    display: none;
    transition-duration: 0.6s;
    transition-timing-function: easy-in-out;
    ${props => props.active&&`
        opacity: 1;
        display: flex;
    `};
    @media ${device.tablet} {
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        margin-top: 0;
        padding: 0;
    }
    @media ${device.mobileL} {
        height: 100vh;
        margin: 0;
        padding: 13vh 0;
        background-size: 257vw 100vh;
    }
`

export const BurgerItem = styled.div`
    width: 20vw;
    height: 14vh;
    background: ${RED};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    @media ${device.tablet} {
        width: 100vw;
        height: 24vh;
        flex-direction: column;
        margin-top: 0;
        padding: 0;
        background: black;
    }
    @media ${device.mobileL} {
        width: 100vw;
        height: 18vh;
        flex-direction: column;
        margin-top: 0;
        padding: 0;
        background: black;
    }
`

export const BurgerItemTitle = styled(Link)`
    padding: 0.4vw 0.9vh;
    text-decoration: none;
    color: ${props => props.col || TEXT_LIGHT};
    width: 15vw;
    height: 8vh;
    backdrop-filter: blur(15px);
    cursor: pointer;
    font-weight: 400;
    font-size: 1.4rem;
    border-radius: 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        border: ${props => props.border || `1px solid ${TEXT_LIGHT}`};
    }
    ${props => props.rus && `
        font-weight: 800;
        font-size: 1.3rem;
        font-family: ${ROBOTO};
    `};
`