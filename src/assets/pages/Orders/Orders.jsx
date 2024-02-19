import React from 'react'
import { OrdersList, OrdersWrapper } from './OrdersStyles'
import { useSelector } from 'react-redux'

const Orders = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <OrdersWrapper>
      <OrdersList>
      </OrdersList>
    </OrdersWrapper>
  )
}

export default Orders