import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">All About Shuvo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/About">About</NavLink>
            <NavLink  className='nav-link' to="/Links">Links</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;