import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


export function Navigationbar(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
         </LinkContainer>

         <LinkContainer to="/about">
          <Nav.Link>About Us</Nav.Link>
         </LinkContainer>

         <LinkContainer to="/contact">
          <Nav.Link>Contact Us</Nav.Link>
         </LinkContainer>
                     
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}