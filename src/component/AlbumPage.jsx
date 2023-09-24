import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAudio, setSingleAlbum } from "../redux/action";
import LinkComponent from "./LinkComponent";
import Player from "./Player";

const AlbumsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleAlbum = useSelector((state) => state.album.content);

  const fetchArtist = async () => {
    try {
      const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + params.id, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "5926b4e21bmshe935e080d850140p1d29fcjsnfbc1ca989294",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      const data = await resp.json();
      dispatch(setSingleAlbum(data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <Container>
      <LinkComponent />
      <Row className="mt-5">
        <Col xs={9} className="offset-1">
          <Row>
            <Col xs={4}>
              <img className="mt-3" src={singleAlbum.cover_medium} alt="cover" />
              <h2 className="text-white">{singleAlbum.title}</h2>
              <p className="text-white"> {singleAlbum.artist.name}</p>
              <Button className="btn-play" variant="success">
                Play
              </Button>
            </Col>
            <Col xs={8}>
              {singleAlbum.tracks.data.map((track) => (
                <div
                  onClick={() => dispatch(setAudio(track))}
                  className="d-flex justify-content-between align-items-center mt-3"
                >
                  <p className="text-white m-0">
                    <i class="bi bi-heart mx-3"></i>
                    {track.title}
                  </p>
                  <span className="text-white">{(track.duration / 60).toFixed(2)}</span>
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Player />
    </Container>
  );
};
export default AlbumsPage;
