import styled from "styled-components";


export const DestacadosWrapper = styled.div `
    display: flex;
    flex-direction: row;
    max-width: 90%;
    height: 400px;
    overflow-x: scroll;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
`

export const DestacadoCardStyled = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: 0.25s;
    padding: 10px;
    border-radius: 1rem;
    &:hover {
        scale: 1.1;
        transition: 0.25s;
        background-color: blueviolet;
    }
`
export const CardImg = styled.img ` 
    width: 150px;
    max-width: 300px;
`
export const AddBtn = styled.button `
    width: fit-content;
    background-color: transparent;
    color: orangered;
    cursor: pointer;
    transition: 0.25s;
    border: none;
    padding: 5px;
    border-radius: 2rem;
    &:hover {
        scale: 1.1;
        transition: 0.25s;
        background-color: orangered;
        color: black;
    }
`

export const SeeMoreBtn = styled.button `
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 20px;
    border-radius: 2rem;
    transition: 0.5s;
    &:hover {
        background-color: orangered;
        scale: 1.2;
        transition: 0.5s;
        color: black;
    }
`
