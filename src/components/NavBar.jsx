import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand to ="/" className="mr-auto" as={NavLink}>Ceramica Roma</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link to="/category/tazas" as={NavLink}>Tazas</Nav.Link>
            <Nav.Link to="/category/pocillos" as={NavLink}>Pocillos</Nav.Link>
            <Nav.Link to="/category/platos" as={NavLink}>Platos</Nav.Link>
            <CartWidget />
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
};
