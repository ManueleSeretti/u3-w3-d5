import { ADD_TO_LIST, DEL_TO_LIST, SET_SINGLE_ALBUM } from "../action";

const initialState = {
  content: [],
};

const playListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case DEL_TO_LIST:
      return {
        ...state,

        content: state.content.filter((title) => title !== action.payload),
      };

    default:
      return state;
  }
};
export default playListReducer;
