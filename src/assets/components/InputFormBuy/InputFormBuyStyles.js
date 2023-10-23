import styled from "styled-components";



export const InputBox = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`   

export const InputLabel = styled.label `

`

export const InputStyled =  styled.input `
    background-color: black;
    border: solid 1px;
    border-color: ${({isError}) => isError ? 'red' : 'white'};
    text-align: center;
    @media screen and ( max-width : 577px) {
     width: 60% ;
    }
`

export const StyledButtonSubmit = styled.button `
    cursor: pointer;
    width: auto;
    background-color: green;
    padding: 5px;
    border-radius: 1rem;
    transition: 0.5s;
    &:hover{
        scale: 1.1;
    }

`

export const ErrorMessageStyled= styled.p `
    color: red;
`