import React from 'react'
import { CartProductContainer, ProductName, ProductToBuyImage, ProductValue, QuantitysContainer } from './BuyPageStyles'
import { QuantityButton } from '../../components/CartDisplay/CartStyles'
import { useDispatch } from 'react-redux'
import { addQuantityToCart, removeQuantityFromCart } from '../../../redux/cart/cartSlice'

const CartToBuy = (product) => {
    const dispatch = useDispatch()
    const {image, id, value, name, quantity } = product
  return (
    <CartProductContainer id={id}>
        <ProductToBuyImage src={image} />
        <ProductName>{name}</ProductName>
        <ProductValue>${value}</ProductValue>
        <QuantitysContainer>
            <QuantityButton bgColor='red' onClick={() => dispatch(removeQuantityFromCart(id))}>-</QuantityButton> 
            <p>Cantidad: {quantity}</p>
            <QuantityButton bgColor='green' onClick={() => dispatch(addQuantityToCart(product))}>+</QuantityButton>
        </QuantitysContainer>
    </CartProductContainer>
  )
}

export default CartToBuy