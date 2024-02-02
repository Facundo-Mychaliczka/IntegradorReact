import React from 'react'
import { VerifyBox, VerifyWrapper } from './VerifyStyles'
import VerifyForm from '../../components/VerifyForm/VerifyForm'

const Verify = () => {
  return (
    <VerifyWrapper>
      <VerifyBox>
        <VerifyForm/>
      </VerifyBox>
    </VerifyWrapper>
  )
}

export default Verify