import React from 'react'
import { BuyError, BuyPageWrapper, BuyProductsContainer, CartBuyContainer, ErrorButton, FormContainer } from './BuyPageStyles'
import { useSelector } from 'react-redux'
import CartToBuy from './CartToBuy'
import Form from '../../components/Form/Form'

const BuyPage = () => {

    const cartProducts = useSelector((state) => state.cart.cartItems)

    

    const totalPrice = cartProducts.reduce((acc, product) => {
        return (acc + product.value * product.quantity)
      }, 0)

  return (
    <BuyPageWrapper>
        {
            cartProducts.length
             ? ( 
                 <>
                        <FormContainer>

                            <Form/>
                            
                        </FormContainer>
                        
                        <CartBuyContainer>
                            <BuyProductsContainer>
                                {
                                    cartProducts.map((product) => {
                                        return <CartToBuy key={product.id} {...product} />
                                    })
                                }
                            </BuyProductsContainer>
                            TOTAL: ${totalPrice}
                        </CartBuyContainer>
                </>)
             : ( <BuyError>
                <h1>LO SENTIMOS, ACTUALMENTE SU CARRITO ESTÁ VACÍO</h1>
                <ErrorButton to={"/products"}>VER TODOS LOS PRODUCTOS</ErrorButton>
             </BuyError>
             )
        }
        
         
    </BuyPageWrapper>
  )
}

export default BuyPage