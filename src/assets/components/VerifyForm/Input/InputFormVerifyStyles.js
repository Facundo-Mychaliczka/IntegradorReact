import styled from "styled-components";

export const ErrorMessageVerify = styled.p `
    color: red;
`

export const InputBoxVerify = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const InputVerify = styled.input `
    background-color: black;
    border-color: ${({isError}) => isError ? 'red' : 'white'};
`