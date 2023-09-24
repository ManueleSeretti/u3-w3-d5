import { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, setCounter, setPlay } from "../redux/action";

const Player = () => {
  const audioObj = useSelector((state) => state.audio.content);
  const counter = useSelector((state) => state.audio.counter);
  const isPlay = useSelector((state) => state.audio.isPlay);
  const [intervalId, setIntervalId] = useState(null);
  const [progress, setProgress] = useState(0);

  const audioElement = document.getElementById("audioElement");
  const dispatch = useDispatch();

  const finishedAudio = () => {
    dispatch(setCounter());
    dispatch(setPlay(false));
  };
  //cosa fare ogni secondo
  useEffect(() => {
    if (counter >= 30) {
      finishedAudio();
      //controllo se l'audio è arrivato alla fine e resetto il counter e isPlay=false
    } else {
      setProgress((counter * 100) / 60);
      //collego lo scorrere del tempo alla barra del progresso
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  // cosa fare ogni volta che cambia isPlay
  useEffect(() => {
    if (audioElement) {
      if (isPlay) {
        audioElement.play(); //parte l'audio
        const newIdTimer = setInterval(() => {
          dispatch(addCounter()); //counter dei secondi
        }, 1000);
        setIntervalId(newIdTimer);
      } else {
        clearInterval(intervalId); // fermo il timer
        audioElement.pause(); //metto l'audio in pausa
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  return (
    <Container fluid className="player bg-dark p-0">
      <Row className="justify-content-center">
        <Col xs={6} className="offset-2 text-secondary">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <div className=" d-flex align-items-center mt-1">
              <i className="bi bi-shuffle mx-3" style={{ fontSize: "12px" }}></i>
              <i className="bi bi-skip-backward-fill mx-3" style={{ fontSize: "12px" }}></i>
              {isPlay ? (
                <i onClick={() => dispatch(setPlay(!isPlay))} className="bi bi-pause-fill fs-2  mx-3"></i>
              ) : (
                <i onClick={() => dispatch(setPlay(!isPlay))} className="bi bi-play-fill fs-2  mx-3"></i>
              )}
              <i className="bi bi-skip-forward-fill mx-3" style={{ fontSize: "12px" }}></i>
              <i className="bi bi-repeat mx-3" style={{ fontSize: "12px" }}></i>
            </div>
            <div className="d-flex align-items-center">
              <span className="mx-2" style={{ fontSize: "12px" }}>
                0:{counter}
              </span>
              <ProgressBar
                style={{ height: "3px", width: "400px" }}
                className="mt-1"
                striped
                variant="info"
                now={progress}
              />
              <span className="mx-2" style={{ fontSize: "12px" }}>
                0:30
              </span>
            </div>
          </div>
        </Col>
        <Col xs={3}>
          {audioObj && (
            <div className="d-flex justify-content-center align-items-center mt-2">
              <img src={audioObj?.album?.cover_small} alt="img-album" />
              <div className="text-start ms-3">
                <span className="text-white text-start">{audioObj?.title}</span>
                <br />
                <span className="text-white text-start">{audioObj?.artist?.name}</span>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <audio id="audioElement" src={audioObj ? audioObj.preview : ""}></audio>
    </Container>
  );
};
export default Player;
