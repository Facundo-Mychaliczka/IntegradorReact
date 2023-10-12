import React from 'react'
import { ProductCard, ProductsPageWrapper, ProductsWrapper } from './ProductsStyles'
// import { Products } from '../../data/Products/ProductsData';
import { AddBtn } from '../../components/ProductosDestacados/DestacadosStyles';
import Filters from '../../components/Filter/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantityToCart } from '../../../redux/cart/cartSlice';



const ProductsPage = () => {

  let products = useSelector((state) => state.products.products)
  


  const {selectedCategory} = useSelector((state) => state.categories)
  if (selectedCategory !== null) {
    products = { [selectedCategory] : products[selectedCategory] }
  }

  const dispatch = useDispatch();

    
  return (
    
    <ProductsPageWrapper>
      
            <Filters/>
            <ProductsWrapper>
                {
                Object.entries(products).map(([, productsArray]) => {
                    return productsArray.map((product) => {
                        const {id, image, name, value} = product
                        return <ProductCard key={id}>
                            <p>{name}</p>
                            <img src={image} alt="" />
                            <p>${value} USD</p>
                            <AddBtn onClick={() => dispatch(addQuantityToCart({id, image, name, value}))}>Añadir al carrito</AddBtn>
                        </ProductCard>
                    })
                })
                
                }
            </ProductsWrapper>
    </ProductsPageWrapper>    
  )
}

export default ProductsPage