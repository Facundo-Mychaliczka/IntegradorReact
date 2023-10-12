import React from 'react'
import { CartButtonsContainer, CartProductDescription, CartProductsContainer, QuantityButton, TrashCanIcon } from './CartStyles'
import TrashCanImage from '../../images/Logos e icons/closed-trash-can.png'
import { useDispatch } from 'react-redux'
import { addQuantityToCart, removeFromCart, removeQuantityFromCart } from '../../../redux/cart/cartSlice'


const CartCard = (product) => {

    const dispatch = useDispatch()

 let {image, id, name, value, quantity} = product
  return (
        <CartProductsContainer key={id}> 
            <img src={image} />
            <CartProductDescription>
                <p>{name}</p>
                <p>${value}</p>
            </CartProductDescription>
            <CartButtonsContainer>
              <QuantityButton bgColor='red' onClick={() => dispatch(removeQuantityFromCart(id))}>-</QuantityButton>              
              <p>{quantity}</p>
              <QuantityButton bgColor='green' onClick={() => dispatch(addQuantityToCart(product))}>+</QuantityButton>
              <TrashCanIcon src={TrashCanImage} onClick={() => dispatch(removeFromCart(id))}/>
            </CartButtonsContainer>
        </CartProductsContainer>  
        );
};

export default CartCard