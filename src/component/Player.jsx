import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const audioObj = useSelector((state) => state.audio.content);

  return (
    <Container fluid className="player bg-dark p-0">
      <Row className="justify-content-center">
        <Col xs={6} className="offset-2 text-secondary">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <div className=" d-flex align-items-center mt-1">
              <i class="bi bi-shuffle mx-3" style={{ fontSize: "12px" }}></i>
              <i class="bi bi-skip-backward-fill mx-3" style={{ fontSize: "12px" }}></i>
              <i class="bi bi-play-fill fs-2  mx-3"></i>
              <i class="bi bi-skip-forward-fill mx-3" style={{ fontSize: "12px" }}></i>
              <i class="bi bi-repeat mx-3" style={{ fontSize: "12px" }}></i>
            </div>
            <ProgressBar style={{ height: "3px", width: "100%" }} className="mt-1" striped variant="info" now={80} />
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <img src={audioObj.album.cover_small} alt="img-album" />
            <div className="text-start ms-3">
              <span className="text-white text-start">{audioObj.title}</span>
              <br />
              <span className="text-white text-start">{audioObj.artist.name}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
