import React from 'react'
import Logo from '../../images/Logos e icons/logoHeader.png'
import { ContactUs, ContactUsDiv, FooterDiv, FooterImage, FooterNav, FooterStyled, Privacy, StyledFooterP } from './FooterStyles'
import { NavLinkStyled} from '../Header/HeaderStyles'



const Footer = () => {
  return (
    <>
    
    <FooterStyled>
        <FooterDiv>
            <FooterNav>
            <FooterImage src={Logo}/>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/products">Productos</NavLinkStyled>
            <NavLinkStyled to="/membership">Membresía</NavLinkStyled>
        </FooterNav>
        <ContactUs>
            <ContactUsDiv>
                <strong>Soporte Online:</strong>
                <a href="https://esupport.gigabyte.com/Login/Index?ReturnUrl=%2f">ESUPPORT</a>
            </ContactUsDiv>
            <ContactUsDiv>
                <strong>Soporte Técnico:</strong>
                <p>(+5411) 6091-2350</p>
            </ContactUsDiv>
            <ContactUsDiv>
                <strong>E-MAIL:</strong>
                <p>rma_argentina@gigabyte.com</p>
            </ContactUsDiv>
        </ContactUs>
        <Privacy>
                <a href="https://profile.gigabyte.com/TermsOfUse.aspx">Terminos de Uso</a>
                <a href="https://profile.gigabyte.com/PrivacyPolicy.aspx">Aviso de Privacidad</a>
        </Privacy>
        </FooterDiv>
        
        <StyledFooterP>Los derechos de autor de los contenidos de este sitio web pertenecen a sus respectivos propietarios. Este sitio fue un proyecto personal de estudio y no está asociado con ninguna empresa.</StyledFooterP>
        
    </FooterStyled>
    </>
  )
}

export default Footer