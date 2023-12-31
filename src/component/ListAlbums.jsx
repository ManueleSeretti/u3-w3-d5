import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListAlbums = (props) => {
  const homeAlbums = useSelector((state) => state.home.content);
  let albums = [];
  if (props.title === "Rock Classic") {
    albums = homeAlbums.slice(0, 4);
  } else if (props.title === "Pop Culture") {
    albums = homeAlbums.slice(4, 8);
  } else if (props.title === "#HipHop") {
    albums = homeAlbums.slice(8, 12);
  }

  return (
    <Container className="mt-3  mb-5 ">
      <h2 className=" text-start text-white ">{props.title}</h2>
      <Row>
        {albums.map((album) => (
          <Col xs={3} key={album.id}>
            <Card className="bg-transparent border-0 ">
              <Card.Img variant="top" src={album.album.cover} />
              <Card.Body>
                <Link to={"/album/" + album.album.id}>
                  <Card.Title className="text-truncate text-start text-white">{album.album.title}</Card.Title>
                </Link>
                <Link to={"/artist/" + album.artist.id}>
                  <Card.Text className="text-truncate text-start text-white">{album.artist.name}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ListAlbums;
