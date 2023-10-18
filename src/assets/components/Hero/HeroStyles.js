import {styled} from "styled-components";


export const HeroWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 70px;

    & h1 {
        font-size: 25px;
    }
`
export const HeroImage = styled.img `
    width: 100%;
`
