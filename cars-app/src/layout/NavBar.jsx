import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">Car App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/cars">Cars</Nav.Link>
        <Nav.Link href="/add">Add Cars</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>

  );
};
export default NavBar;
