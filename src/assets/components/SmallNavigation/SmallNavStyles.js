import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledNav = styled.div `
    display: ${({hidden}) => 
       hidden? 'none' : 'flex' };
    flex-direction: column;
    min-width: 200px;
    border-color: orangered;
    z-index: 2;
    position: fixed;
    background-color: black;
    top: 50px;
    left: 5px;
    text-align: center;
    margin: 10px;
    padding: 10px;
    border-bottom: solid orangered;
    border-radius: 2rem;
    max-height: 90%;
    gap: 10px;
`

export const StyledOlNav = styled.ol `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const NavLinkStyledNav = styled(NavLink) `
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