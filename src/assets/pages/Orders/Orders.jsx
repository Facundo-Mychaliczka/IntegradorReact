import React from 'react'
import { OrdersWrapper } from './OrdersStyles'
import { getOrders } from '../../../axios/axiosOrders'
import { useSelector } from 'react-redux'

const Orders =  () => {
  const currentUser = useSelector((state) => state.user.currentUser)
   const orders = async () => await getOrders(currentUser)
   console.log(orders);
  return (
    <OrdersWrapper>
        
    </OrdersWrapper>
  )
}

export default Orders