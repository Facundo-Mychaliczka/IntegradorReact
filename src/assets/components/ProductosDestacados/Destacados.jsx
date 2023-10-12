import React from 'react'
import { AddBtn, CardImg, DestacadoCardStyled, DestacadosWrapper, SeeMoreBtn } from './DestacadosStyles'
import destacadosProducts from '../../data/Products/DestacadosProducts'
import {Link} from 'react-router-dom'

import { addQuantityToCart } from '../../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'




const DestacadoCard = ({id,name, value, garantía, image}) => {
  const dispatch = useDispatch()
    return ( 
        <DestacadoCardStyled>
            <p>{name}</p>
            <CardImg src={image}/>
            <p>${value} USD</p>
            <p>Garantía: {garantía}</p>
            <AddBtn onClick={() => dispatch(addQuantityToCart({id, image, name, value}))}>Añadir al carrito</AddBtn>
        </DestacadoCardStyled>
    )
}


const Destacados = () => {
  return (
    <>
    <h3>Productos Destacados</h3>
    <DestacadosWrapper>
        {  destacadosProducts.map((destacado) => {
        return <DestacadoCard key={destacado.id} {...destacado}/>
    })
    }
    </DestacadosWrapper>
    <Link to="/products"><SeeMoreBtn>VER TODOS LOS PRODUCTOS</SeeMoreBtn></Link>
    </>
  )
}

export default Destacados