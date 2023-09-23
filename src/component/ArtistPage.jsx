import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setArtist } from "../redux/action";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import LinkComponent from "./LinkComponent";
import Player from "./Player";

const ArtistPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.content);
  const [tracks, setTracks] = useState([]);

  const fetchArtist = async () => {
    try {
      const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + params.id, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "5926b4e21bmshe935e080d850140p1d29fcjsnfbc1ca989294",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      const data = await resp.json();
      dispatch(setArtist(data));
    } catch (error) {}
  };
  const fetchTracks = async () => {
    const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist.name, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5926b4e21bmshe935e080d850140p1d29fcjsnfbc1ca989294",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const data = await resp.json();
    setTracks(data.data);
  };

  useEffect(() => {
    fetchArtist();
    fetchTracks();
  }, []);

  return (
    <Container>
      <LinkComponent />
      <Row className="justify-content-center mt-5">
        <Col xs={5}>
          <h1 className="text-white">{artist.name}</h1>
          <span className="text-white">{artist.nb_fan} follower</span>
          <div className="mt-3">
            <Button className="main-btn mx-2" variant="success">
              Play
            </Button>
            <Button className="main-btn mx-2" variant="outline-light">
              Follow
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        {" "}
        <h2 className="text-white text-start fw-bold mt-3">Tracks</h2>
        {tracks.map((song) => (
          <Col xs={4} key={song.id}>
            <Card className="bg-transparent border-none">
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

      <Player />
    </Container>
  );
};
export default ArtistPage;
