import styled from "styled-components";
import {motion} from 'framer-motion'

export const StyledButton = styled(motion.button) `
    cursor: pointer;
    background-color: ${(props) => (props.bgColor? props.bgColor : 'orangered')} ;
    color: ${(props) => (props.color? props.color : 'black')};
    padding: 5px;
    border-radius: 1rem;
    transition: 0.25s;
    width: 100%;
    &:hover {
        scale: 1.1;
        transition: 0.25s;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: gray;
        &:hover {
            scale: 1.0;
        }
    }
`