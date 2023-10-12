import styled from "styled-components";


export const InputBoxRegister = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const LabelStyled = styled.label `

`

export const InputRegister = styled.input `
    background-color: black;
    border-color: ${({isError}) => isError ? 'red' : 'white'};
`

export const ErrorMessageRegister = styled.p `
    color: red;
`