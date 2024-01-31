import React from 'react'
import { HeaderContainer, HeaderImgContainer, HeaderLogo, HeaderStyled, NavLinkStyled, StyledUserIcon, StyledOlHeader, ProductsCartNumber, CartIcons, StyledCartIcon, UserHeaderSection, UserLink, MenuIcon } from './HeaderStyles'
import LogoHeader from '../../images/Logos e icons/logoHeader.png'
import AccountIcon from '../../images/Logos e icons/logo-login.png'
import CartIcon from '../../images/Logos e icons/Cart-icon.png'
import Cart from '../CartDisplay/Cart'
import {useDispatch, useSelector} from 'react-redux'
import { toggleHiddenCart, toggleHiddenNav } from '../../../redux/cart/cartSlice'
import IconMenu from '../../images/Logos e icons/menuicon.png'
import SmallNav from '../SmallNavigation/SmallNav'



const Header = () => {

  const dispatch = useDispatch()

  const cartProducts = useSelector((state) => state.cart.cartItems)

  const totalCartProducts =  cartProducts.reduce((acc, item) => 
  (acc + item.quantity), 0)

  const currentUser = useSelector((state) => state.user.currentUser)
  
  return (
    <>
    <SmallNav/>
    <HeaderStyled>
        <HeaderLogo src={LogoHeader}/>
        <MenuIcon onClick={() => dispatch(toggleHiddenNav())} src={IconMenu}/>
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
                      {
                        currentUser ?   
                        // ${currentUser.nombre}
                        <UserLink to={`/user`}>{currentUser.user.nombre}</UserLink>              
                       :<UserLink to={"/login"}>Iniciar Sesión</UserLink>        
                        }
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