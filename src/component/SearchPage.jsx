import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setSearch } from "../redux/action";
import { useEffect } from "react";
import Player from "./Player";
import { Card, Col, Container, Row } from "react-bootstrap";
import LinkComponent from "./LinkComponent";

const SearchPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.content);

  const fetchSearch = async (artistName) => {
    try {
      let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "5926b4e21bmshe935e080d850140p1d29fcjsnfbc1ca989294",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        dispatch(setSearch(result));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSearch(params.query);
  }, [params.query]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="offset-1">
          <LinkComponent />
          <Row className="mb-5 gy-5 mt-5">
            <h2 className="text-white text-start fw-bold mt-3">Result</h2>
            {query.length !== 0 &&
              query.data.map((song) => (
                <Col xs={3} key={song.id}>
                  <Card className="bg-transparent border-0">
                    <Card.Img variant="top" src={song.album.cover} />
                    <Card.Body>
                      <Link to={"/album/" + song.album.id}>
                        <Card.Title className="text-truncate text-start text-white">{song.title}</Card.Title>
                      </Link>
                      <Link>
                        <Card.Text className="text-truncate text-start text-white">{song.album.title}</Card.Text>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
      <Player />
    </Container>
  );
};
export default SearchPage;
