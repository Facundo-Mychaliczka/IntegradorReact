import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledCart = styled.div `
    display: ${({hidden}) => 
       hidden? 'none' : 'flex' };
    flex-direction: column;
    min-width: 200px;
    border-color: orangered;
    z-index: 2;
    position: fixed;
    background-color: black;
    top: 50px;
    right: 5px;
    text-align: center;
    margin: 10px;
    padding: 10px;
    border-bottom: solid orangered;
    border-radius: 2rem;
    max-height: 90%;
    gap: 10px;
`

export const CartProducts = styled.div `
    display: flex;
    flex-direction: column;
    
    overflow-y: auto;
    gap: 10px;
`

export const CloseCartIcon = styled.img `
        cursor: pointer;
        transition: 0.25s;
        height: 25px;
        background-color: red;
        padding: 5px;
        border-radius: 1rem;
        &:hover {
            transform: scale(1.1);
            transition: 0.25s;
            }
`


export const CartProductsContainer = styled.div `
    display: flex;
    flex-direction: row;
    border: solid 2px orangered;
    min-width: 100px;
    max-width: 500px;
    & img {
        width: 70px;
    }
    @media screen and ( max-width : 557px) {
        flex-direction: column;
        align-items: center;
    }
    
`

export const CartProductDescription = styled.div `
    display: flex;
    gap: 20px;
    align-items: center;
    @media screen and ( max-width : 557px) {
        flex-direction: column;
    }
`

export const CartButtonsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const QuantityButton = styled.button `
    background-color: ${(props) => (props.bgColor? props.bgColor : 'orangered')} ;
    padding: 10px;
    margin: 20px;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        scale: 1.1;
    }
`

export const TrashCanIcon = styled.img `
        cursor: pointer;
        transition: 0.25s;
        background-color: red;
        height: 50px;
        margin: 4%;
        border-radius: 1rem;
        &:hover {
            transform: scale(1.1);
            transition: 0.25s;
            }
`

export const StyledLink = styled(Link) `
    width: 100%;
`