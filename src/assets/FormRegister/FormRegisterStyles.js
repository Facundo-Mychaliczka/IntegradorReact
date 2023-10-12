import { Form } from "formik";
import styled from "styled-components";
import {Link} from 'react-router-dom'

export const StyledFormRegister = styled(Form) `
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: inset grey 5px;
    padding: 50px;
`

export const LinkStyled = styled(Link) `
    color: white;
    border-bottom: dotted blueviolet;
    transition: 0.25s;
    &:hover {
        color: blueviolet;
    }
`