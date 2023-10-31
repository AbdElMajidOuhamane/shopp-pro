import {Nav,Navbar,Container, Badge, NavDropdown} from "react-bootstrap"
import {FaShoppingCart , FaUser} from "react-icons/fa"
import {LinkContainer} from "react-router-bootstrap"
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Header = () => {
  const {cartItems}=useSelector((state)=>state.cart)
  const {userInfo}=useSelector((state)=>state.auth)
  const [logoutApiCall]=useLogoutMutation()

  const dispatch =useDispatch()
  const navigate =useNavigate()


  const logoutHanler=async()=>{
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate("/login")
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>Shopp</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
            <Nav.Link> 
              <FaShoppingCart/>
               Cart
               {cartItems.length>0 &&(
                <Badge pill bg='success' style={{marginLeft:'5px'}}>
                    {cartItems.reduce((a,c)=>a+c.qty,0)}
                </Badge>
               )}
               </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="name">
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHanler}>
                    Logout
                  </NavDropdown.Item>
                
              </NavDropdown>
            ):(
              <LinkContainer to="/login">
              <Nav.Link><FaUser /> Sign Up</Nav.Link>
              </LinkContainer>
            )

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
