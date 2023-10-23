 import { Link, NavLink } from "react-router-dom"
import {styled} from "styled-components"

 export const HeaderStyled = styled.header `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(64,64,64,1) 16%, rgba(255,255,255,1) 100%);
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 10px 20px;
    z-index: 2;
    position: fixed;
    @media screen and ( max-width : 577px) {
      justify-content: flex-end;
    }
 `

 export const HeaderLogo = styled.img `
        width: 120px;
        max-width: 120px;
        cursor: pointer;
        @media screen and ( max-width : 577px) {
         display: none;
        }
 `

 export const HeaderContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 20px;
 `

 export const StyledOlHeader = styled.ol `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
 `

 export const NavLinkStyled = styled(NavLink) `
   cursor: pointer;
    transition: 0.5s;
    color: white;
    &:hover {
        scale: 1.1;
        color: orangered;
        transition: 0.5s;
    }
    &.active {
      color: orangered;
    }
 `
 export const HeaderImgContainer = styled.div `
     display: flex;
     gap: 5px;
 `

  export const UserHeaderSection = styled.div `
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   margin-left: 5px;
 `

export const UserLink = styled(Link) `
   border-bottom: solid white 1px;
   transition: 0.25s;
   &:hover{ 
      scale: 1.06;
   }
`

 export const StyledUserIcon = styled.img `
    max-width: 25px;
    height: 30px;
    padding: 2px 0px 2px 0px;
    border-radius: 10px;
 `



 export const CartIcons = styled.div `
   display: flex;
   cursor: pointer;
   transition: 0.5s;
   border-radius: 1rem;
   &:hover {
        scale: 1.2;
        transition: 0.5s;
        background-color: orangered;
        
    }
 `

 export const StyledCartIcon = styled.img`
   max-width: 25px;
    height: 30px;
    cursor: pointer;
    transition: 0.5s;
    padding: 2px 0px 2px 0px;
    border-radius: 10px;
 `

 export const ProductsCartNumber = styled.p `
   background-color: green;
   border-radius: 3rem;
   align-items: center;
   justify-content: center;
   width: 25px;
   text-align: center;
 `


    
 