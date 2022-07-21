import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Nav>
        <NavBar>
          <NavItem>
            <Nav.Link as={Link} to="/" className="navbar-link">About Me</Nav.Link>
        </NavItem>
      </NavBar>
    </Nav>
    </>
  )
}

export default NavBar;