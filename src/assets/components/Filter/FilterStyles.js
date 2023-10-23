import styled from "styled-components";


export const FilterContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and ( max-width : 577px) {
        flex-direction: row;
        overflow-x: scroll;
        padding: 20px;
    }
`

export const FilterButton = styled.div `
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    background-color: ${({selected}) => 
       selected? 'orangered' : 'transparent' };
    border: none;
    font-size: 15px;
    transition: 0.25s;
    cursor: pointer;
    padding: 10px;
    scale : ${({selected}) => 
       selected? '1.1' : '' };
    & img{
        max-width: 100px;
    }
    &:hover {
        background-color: orangered;
        scale: 1.2;
        transition: 0.25s;
    }
`
export const FilterWrapper = styled.div  `
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    text-align: center;
    content: auto;
    @media screen and ( max-width : 577px) {
        flex-direction: row;
        width: 95%;
    }
`
