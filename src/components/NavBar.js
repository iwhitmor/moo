import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <NavBar>
        <Nav>
          <NavItem>
            <Nav.Link as={Link} to="/" className="navbar-link">About Me</Nav.Link>
          </NavItem>
        </Nav>
      </NavBar>
    </>
  )
}

export default NavBar;