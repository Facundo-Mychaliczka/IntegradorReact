import React from 'react'
import { NavLinkStyledNav, StyledNav, StyledOlNav } from './SmallNavStyles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenNav } from '../../../redux/cart/cartSlice'

const SmallNav = () => {

    const isHiddenNav = useSelector((state) => state.cart.smallNavHidden)

    const dispatch = useDispatch()

  return (
    <StyledNav hidden={isHiddenNav}>
        <StyledOlNav>
                <NavLinkStyledNav onClick={() => dispatch(toggleHiddenNav())} to="/">Home</NavLinkStyledNav>
                <NavLinkStyledNav onClick={() => dispatch(toggleHiddenNav())} to="/products">Productos</NavLinkStyledNav>
                <NavLinkStyledNav onClick={() => dispatch(toggleHiddenNav())} to="/membership">Membresía</NavLinkStyledNav>
                <NavLinkStyledNav onClick={() => dispatch(toggleHiddenNav())} to="/myOrders">Mis Órdenes</NavLinkStyledNav>
            </StyledOlNav>
    </StyledNav>
  )
}

export default SmallNav