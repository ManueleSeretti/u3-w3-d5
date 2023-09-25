import { Button, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/Spotify_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HouseAddFill } from "react-bootstrap-icons";

const NavBar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleQuery = () => {
    navigate("/search/" + query);
    setQuery("");
  };

  return (
    <Navbar expand="lg" className="bg-black m-0 " style={{ height: "100vh", zIndex: "1" }}>
      <Container
        style={{
          height: " 100%",
        }}
        className="d-flex flex-column  align-items-between justify-content-between"
      >
        <div>
          <Link to={"/"}>
            <Navbar.Brand className="mb-5">
              <img className="mt-3" src={logo} width={"120px"} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Link to={"/"} className="text-decoration-none">
            <Nav.Link className="text-secondary text-start mt-5" href="#home">
              <i className="bi bi-house-fill text-secondary fs-4 mx-2"></i>
              Home
            </Nav.Link>
          </Link>
          <Nav.Link className="text-secondary text-start">
            <i className="bi bi-book-fill text-secondary fs-4 mx-2"></i>
            Your Library
          </Nav.Link>
          <InputGroup className="mt-3">
            <Form.Control
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button
              onClick={() => {
                handleQuery();
              }}
              variant="outline-secondary"
              id="button-addon2"
            >
              GO
            </Button>
          </InputGroup>
        </div>

        <div className="mb-5">
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
