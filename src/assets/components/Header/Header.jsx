import React from 'react'
import { HeaderContainer, HeaderImgContainer, HeaderLogo, HeaderStyled, NavLinkStyled, StyledUserIcon, StyledOlHeader, ProductsCartNumber, CartIcons, StyledCartIcon, UserHeaderSection, UserLink } from './HeaderStyles'
import LogoHeader from '../../images/Logos e icons/logoHeader.png'
import AccountIcon from '../../images/Logos e icons/logo-login.png'
import CartIcon from '../../images/Logos e icons/Cart-icon.png'
import Cart from '../CartDisplay/Cart'
import {useDispatch, useSelector} from 'react-redux'
import { toggleHiddenCart } from '../../../redux/cart/cartSlice'



const Header = () => {

  const dispatch = useDispatch()

  const cartProducts = useSelector((state) => state.cart.cartItems)

  const totalCartProducts =  cartProducts.reduce((acc, item) => 
  (acc + item.quantity), 0)
  

  return (
    <>
    <HeaderStyled>
        <HeaderLogo src={LogoHeader}/>
        <HeaderContainer>
            <StyledOlHeader>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                <NavLinkStyled to="/products">Productos</NavLinkStyled>
                <NavLinkStyled to="/membership">Membresía</NavLinkStyled>
            </StyledOlHeader>
            <HeaderImgContainer>
                <CartIcons onClick={() => dispatch(toggleHiddenCart())}>
                  <StyledCartIcon src={CartIcon} />
                  <ProductsCartNumber>{totalCartProducts}</ProductsCartNumber>
                </CartIcons>
                <UserHeaderSection>
                  <UserLink to={"/login"}>Iniciar Sesión</UserLink>
                  <StyledUserIcon src={AccountIcon}/>
                </UserHeaderSection>
            </HeaderImgContainer>
        </HeaderContainer>
    </HeaderStyled>
    <Cart/>
    </>
  )
}

export default Header