import { Col, Container, Row } from "react-bootstrap"


const Footer = () => {
    const currentYear=new Date().getFullYear();
  return (
    <div>
       <Container>
        <Row>
            <Col className="text-center py3">
            <p> Shopp &copy; {currentYear} </p>
            </Col>
        </Row>
        </Container> 
      
    </div>
  )
}

export default Footer
