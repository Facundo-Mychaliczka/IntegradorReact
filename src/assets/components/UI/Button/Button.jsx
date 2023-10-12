
import React from 'react'
import { StyledButton } from './ButtonStyles'

const Button = ({
    children,
    disabled = 'true'
}) => {
  return (
    <StyledButton
        disabled={disabled}
    >
        {children}
    </StyledButton>
  )
}

export default Button