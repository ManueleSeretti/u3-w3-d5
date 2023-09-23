import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setSearch } from "../redux/action";
import { useEffect } from "react";

const SearchPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

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
  }, []);

  return;
};
export default SearchPage;
