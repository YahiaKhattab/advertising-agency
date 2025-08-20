import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import positivus from '../../images/positivus.png';
import './Navbar.css';

export default function MyNavbar() {
  return (
    <Navbar expand="md" bg="white" collapseOnSelect>
      <Container className='ps-3 py-4 p-md-5'>
        <img src={positivus} alt="positivus logo" />
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-md-4">
            <Nav.Link href="#about" className='linkHover' style={{color:"black"}}>About us</Nav.Link>
            <Nav.Link href="#services" className='linkHover' style={{color:"black"}}>Services</Nav.Link>
            <Nav.Link href="#cases" className='linkHover' style={{color:"black"}}>Use Cases</Nav.Link>
            <Nav.Link href="#pricing" className='linkHover' style={{color:"black"}}>Pricing</Nav.Link>
            <Nav.Link href="#blog" className='linkHover' style={{color:"black"}}>Blog</Nav.Link>
            <Button variant="outline-dark" size="lg"><span className='dashBtn'>Dashboard</span></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
