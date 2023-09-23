import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./component/NavBar";

import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumsPage from "./component/AlbumPage";
import ArtistPage from "./component/ArtistPage";
import SearchPage from "./component/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid className=" p-0 m-0">
          <Row className="m-0">
            <Col xs={2} style={{ zIndex: "1" }} className="bg-black p-0 m-0">
              <NavBar />
            </Col>
            <Col xs={10} className="sfondo container-rigth m-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/album/:id" element={<AlbumsPage />} />
                <Route path="/artist/:id" element={<ArtistPage />} />
                <Route path="/search/:query" element={<SearchPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
