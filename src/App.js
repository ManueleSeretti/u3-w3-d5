import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./component/NavBar";

import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumsPage from "./component/AlbumPage";
import ArtistPage from "./component/ArtistPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid className="p-0 m-0">
          <Row>
            <Col xs={2}>
              <NavBar />
            </Col>
            <Col xs={10}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<AlbumsPage />} />
                <Route path="/artist/:id" element={<ArtistPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
