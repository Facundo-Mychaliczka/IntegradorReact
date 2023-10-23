import React from 'react'
import { CartProducts, CloseCartIcon,  StyledCart, StyledLink, } from './CartStyles'
import CloseCartImage from '../../images/Logos e icons/close-icon.png'
import { StyledButton } from '../UI/Button/ButtonStyles'
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'

const Cart = () => {

  const isHiddenCart = useSelector((state) => state.cart.cartHidden)

  const cartProducts = useSelector((state) => state.cart.cartItems)

  const totalPrice =  cartProducts.reduce((acc, product) => {
    return (acc + product.value * product.quantity)
  }, 0)


  const dispatch = useDispatch()
  
  return (
    
    // EN HIDDEN, AL ESTAR EN TRUE, SE OCULTA, AL ESTAR EN FALSE, HACE DISPLAY FLEX
    <StyledCart hidden={isHiddenCart}>
      
        <div>
            <CloseCartIcon src={CloseCartImage} onClick={() => dispatch(toggleHiddenCart())}/>
            <p>Mi carrito</p>            
        </div>
        <CartProducts>
            {
              cartProducts.length ? (
                cartProducts.map((product) => {
                  return <CartCard key={product.id} {...product}/>
                })
              ) : (
                  <p>ACTUALMENTE, SU CARRITO ESTÁ VACÍO</p>
              )
            }
         </CartProducts>
        
        <p>TOTAL:{totalPrice}</p>
        <StyledLink to={"/BuyPage"} onClick={() => dispatch(toggleHiddenCart())}><StyledButton disabled={!cartProducts.length} bgColor='greenyellow' >COMPRAR</StyledButton></StyledLink>
        <StyledButton disabled={!cartProducts.length} bgColor='red' onClick={() => {dispatch(clearCart()), dispatch(toggleHiddenCart())} }>VACIAR CARRITO</StyledButton>
    </StyledCart>
  )
}

export default Cart