import React from 'react'
import Logo from '../../images/Logos e icons/logoHeader.png'
import { ContactUs, ContactUsDiv, FooterNav, FooterStyled, Privacy } from './FooterStyles'
import { NavLinkStyled} from '../Header/HeaderStyles'



const Footer = () => {
  return (
    <>
    
    <FooterStyled>
        <FooterNav>
            <img src={Logo} alt="" />
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
    </FooterStyled>
    </>
  )
}

export default Footer