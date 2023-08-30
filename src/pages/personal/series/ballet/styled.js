import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Image = styled.div`
    height: 85vh;
    width: 37vw;
    margin: 10vh 0;
    background-image: ${props => props.backimg || 'none'};
    background-size: cover;
    ${props => props.w && `
        width: 66vw;
    `}
`