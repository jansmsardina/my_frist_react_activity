import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {



 return(

   
   <Navbar expand="lg" className="bg-body-tertiary" bg='dark'>
      <h1 className='headerLogo'>Heber Trading</h1>
   <Container>
    
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav>
         <Nav.Link href="/home">Home</Nav.Link>
         <Nav.Link href="/about">About Us</Nav.Link>
         <Nav.Link href="/contact">Contact Us</Nav.Link>
         <Nav.Link href="/blog">Blog</Nav.Link>
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
   )
  

}

export default Header;