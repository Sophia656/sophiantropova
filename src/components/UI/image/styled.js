import styled from 'styled-components';
import { device } from '../../css-settings/styles/sizes';

export const ImageWrapper = styled.div`
    position: relative;
`

export const ImageItem = styled.div`
    height: 85vh;
    width: 36vw;
    ${props => props.w && `
        width: 66vw;
    `} 
    margin: 10vh 0;
    background-image: ${props => props.backimg || 'none'};
    background-size: cover;

    @media ${device.laptop} {
        height: 90vh;
        width: 90vw;
    }
    @media ${device.tablet} {

    }
    @media ${device.mobileL} {

    }
`