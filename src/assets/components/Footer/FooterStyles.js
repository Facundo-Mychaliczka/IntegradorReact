import styled from "styled-components";

export const FooterStyled = styled.footer `
    display: flex;
    width: 100%;
    gap: 50px;
    flex-direction: column;
    background-color: grey;
    align-items: center;
    padding: 20px 0px 20px 0px;
    @media screen and ( max-width : 577px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
    }
`

export const FooterDiv = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    @media screen and ( max-width : 577px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
    }
`

export const FooterNav =styled.div `
    display: flex;
    flex-direction: column;

`

export const FooterImage = styled.img `
    
`

export const ContactUs = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const ContactUsDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    & a {
        text-decoration: underline;
    }
`


export const Privacy = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    & a {
        padding: 10px;
        border-left: 3px solid black;
        border-right: 3px solid black;
    }
`

export const StyledFooterP = styled.p `
    color: #ff0000;
    background-color: white;
    padding: 5px;
    margin: 5px;
    text-align: center;
`

