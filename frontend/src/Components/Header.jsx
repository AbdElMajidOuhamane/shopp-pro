import {Nav,Navbar,Container} from "react-bootstrap"
import {FaShoppingCart , FaUser} from "react-icons/fa"
import {LinkContainer} from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>Shopp</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
            <Nav.Link> <FaShoppingCart/> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link><FaUser /> Sign Up</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
