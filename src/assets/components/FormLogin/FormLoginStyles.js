import styled from "styled-components";
import { Form } from "formik";

export const StyledFormLogin =styled(Form) `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 10px;
    border: outset gray 5px;
    border-radius: 1rem;
`

export const LoginSubmitButton = styled.button `
    cursor: pointer;
    width: auto;
    background-color: black;
    border: solid orangered 1px;
    padding: 5px;
    border-radius: 1rem;
    transition: 0.5s;
    &:hover {
        scale: 1.1;
        background-color: orangered;
        border: none;
        color: black;
    }
`