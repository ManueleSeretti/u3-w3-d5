import { useDispatch, useSelector } from "react-redux";
import { addList, delList, setAudio } from "../redux/action";

const SingleTrack = ({ track }) => {
  const playList = useSelector((state) => state.list.content);
  const controll = playList.find((elem) => elem === track.title);
  const dispatch = useDispatch();
  return (
    <div
      key={track.id}
      onClick={() => dispatch(setAudio(track))}
      className="d-flex justify-content-between align-items-center mt-3"
    >
      <div className="d-flex justify-content-between align-items-center">
        {controll ? (
          <i onClick={() => dispatch(delList(track.title))} className="bi bi-heart-fill text-danger mx-3"></i>
        ) : (
          <i onClick={() => dispatch(addList(track.title))} className="bi bi-heart text-white mx-3"></i>
        )}
        <p className="text-white m-0">{track.title}</p>
      </div>
      <span className="text-white">{(track.duration / 60).toFixed(2)}</span>
    </div>
  );
};
export default SingleTrack;
