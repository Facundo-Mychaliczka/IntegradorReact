import styled from "styled-components";

export const ProductsPageWrapper = styled.div `
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    gap: 50px;
    width: 100%;
    background-color: black;
`

export const ProductsWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    gap: 20px;
    text-align: center;
    font-size: 15px;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const ProductCard = styled.div `
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 1rem;
    margin: 10px;
    padding: 10px;
    &:hover {
        scale: 1.1;
        transition: 0.5s;
        background-color: blueviolet;
    }
    & p {
        max-width: 200px;
    }
    & img{
        width: 200px;
    }
`