import { ADD_COUNTER, SET_AUDIO, SET_COUNTER, SET_PLAY } from "../action";

const initialState = {
  content: [],
  counter: 0,
  isPlay: false,
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO:
      return {
        ...state,

        content: action.payload,
        counter: 0,
        isPlay: false,
      };
    case SET_COUNTER:
      return {
        ...state,

        counter: 0,
      };
    case ADD_COUNTER:
      return {
        ...state,

        counter: state.counter + 1,
      };
    case SET_PLAY:
      return {
        ...state,

        isPlay: action.payload,
      };
    default:
      return state;
  }
};
export default audioReducer;
