import React from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckOutSteps = ({step1,step2,step3,step4}) => {
  return (
    <Nav>
      <Nav.Item>
        {step1?
        (
            <LinkContainer to="/login">
                <NavLink>Sign In</NavLink>
            </LinkContainer>
        ):(
            <NavLink disabled>Sign In</NavLink>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2?
        (
            <LinkContainer to="/shipping">
                <NavLink>Shipping</NavLink>
            </LinkContainer>
        ):(
            <NavLink disabled>Shipping</NavLink>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3?
        (
            <LinkContainer to="/payment">
                <NavLink>Payment</NavLink>
            </LinkContainer>
        ):(
            <NavLink disabled>Payment</NavLink>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4?
        (
            <LinkContainer to="/placeorder">
                <NavLink>Place Order</NavLink>
            </LinkContainer>
        ):(
            <NavLink disabled>Place Order</NavLink>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckOutSteps
