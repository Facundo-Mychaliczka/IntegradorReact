import { Link } from "react-router-dom"
import styled from "styled-components"



export const BuyError = styled.div `
    height: 100vh;
    width: 100%;
    text-align: center;
`

export const ErrorButton = styled(Link) `
    background-color: green;
    border-radius: 1rem;
    padding: 10px;
    transition: 1s;
    &:hover {
        transition: 0.25s;
        color: gray;
        background-color: orangered;
    }
`


export const BuyPageWrapper = styled.div `
    display: flex;
    flex-direction: row;
    background-color: black;
    padding-top: 60px;
    justify-content: space-evenly;
    min-height: 90vh;
`

export const FormContainer = styled.div `
`


export const CartBuyContainer = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const BuyProductsContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow: auto;
    overflow-y: scroll;
    @media screen and ( max-width : 577px) {
      flex-direction: row;
      overflow-x: scroll;
      width: 50vw;
      overflow-y: hidden;
    }
`

export const CartProductContainer = styled.div `
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border: solid orangered;
    margin: 10px;
    @media screen and ( max-width : 577px) {
     flex-direction: column ;
    }
`

export const ProductToBuyImage = styled.img `
    width: 100px;
`

export const ProductName = styled.p `
    max-width: 120px;
`

export const ProductValue = styled.p `
    color: green;
`

export const QuantitysContainer = styled.div `
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`

