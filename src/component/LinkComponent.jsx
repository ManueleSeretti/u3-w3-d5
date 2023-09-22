import { Container, Nav } from "react-bootstrap";

const LinkComponent = () => {
  return (
    <Container className="mt-2">
      <Nav className="d-flex justify-content-around">
        <Nav.Link className="text-secondary fw-bold">Trending</Nav.Link>
        <Nav.Link className="text-secondary fw-bold">Podcast</Nav.Link>
        <Nav.Link className="text-secondary fw-bold">Mood and Genres</Nav.Link>
        <Nav.Link className="text-secondary fw-bold">New Releases</Nav.Link>
        <Nav.Link className="text-secondary fw-bold">Discover</Nav.Link>
      </Nav>
    </Container>
  );
};
export default LinkComponent;
