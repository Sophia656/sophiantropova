import styled from 'styled-components';

export const ImageWrapper = styled.div`
    position: relative;
`

export const ImageItem = styled.div`
    height: 85vh;
    width: 37vw;
    margin: 10vh 0;
    background-image: ${props => props.backimg || 'none'};
    background-size: cover;
    ${props => props.w && `
        width: 66vw;
    `}  
`