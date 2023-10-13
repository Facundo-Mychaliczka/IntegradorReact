import styled from "styled-components";
import {Link} from 'react-router-dom'


export const InputStyledLogin = styled.input `
    background-color: black;
    border: solid 1px;
    border-color: ${({isError}) => (isError ? 'red' : 'white')};
    width: 300px;
    text-align: center;
`
export const ErrorMessageStyledLogin= styled.p `
color: red;
`

export const InputBoxLogin = styled.div `
    display: flex;
    flex-direction: column;
`

export const StyledButton = styled(Link) `
    border-bottom: dotted blueviolet;
    transition: 0.2s;
    &:hover {
        color: blueviolet;
    }
`