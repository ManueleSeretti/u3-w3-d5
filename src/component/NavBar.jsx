import { Button, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/Spotify_Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-black  m-0 " style={{ height: "100vh" }}>
      <Container className="d-flex flex-column  align-items-between justify-content-between">
        <div>
          <Navbar.Brand href="#home">
            <img className="mt-3" src={logo} width={"120px"} alt="logo" />
          </Navbar.Brand>
          <Nav.Link className="text-white" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="#link">
            Link
          </Nav.Link>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            <Button variant="outline-secondary" id="button-addon2">
              GO
            </Button>
          </InputGroup>
        </div>

        <div>
          <Button className="signup-btn">Sing Up</Button>
          <Button className="login-btn">Login</Button>
          <div className="d-flex">
            <Link className="text-decoration-none text-secondary"> Privacy |</Link>
            <Link className="text-decoration-none text-secondary"> Cookie Policy </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBar;
