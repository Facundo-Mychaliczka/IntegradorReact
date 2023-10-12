import { Link } from "react-router-dom";
import styled from "styled-components";


export const UserProfileWrapper = styled.div `
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    text-align: center;
    width: 100%;
    height: 90vh;
    background-color: black;
`

export const ProfileWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

export const LogOutButton = styled(Link) `
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.25s;
    &:hover {
        scale: 1.1;
    }
`

export const LogOutIcon = styled.img `
    width: 30px;
`