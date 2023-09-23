import { Col, Container, Row } from "react-bootstrap";
import LinkComponent from "./LinkComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlbum } from "../redux/action";
import ListAlbums from "./ListAlbums";
import Player from "./Player";

const Home = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  let rockRandomArtists = [];
  let popRandomArtists = [];
  let hipHopRandomArtists = [];
  const dispatch = useDispatch();

  const handleArtist = async (artistName) => {
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
        dispatch(setAlbum(result.data[0]));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const artistGenerator = async () => {
    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++) await handleArtist(rockRandomArtists[j]);

    for (let k = 0; k < popRandomArtists.length; k++) await handleArtist(popRandomArtists[k]);

    for (let l = 0; l < hipHopRandomArtists.length; l++) await handleArtist(hipHopRandomArtists[l]);
  };

  useEffect(() => {
    artistGenerator();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="offset-1">
          <LinkComponent />
          <ListAlbums title="Rock Classic" />
          <ListAlbums title="Pop Culture" />
          <ListAlbums title="#HipHop" />
        </Col>
      </Row>

      <Player />
    </Container>
  );
};
export default Home;
