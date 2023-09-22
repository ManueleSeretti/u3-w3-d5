import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setArtist } from "../redux/action";

const ArtistPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.content);

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

  useEffect(() => {
    fetchArtist();
  }, []);
  return <div></div>;
};
export default ArtistPage;
