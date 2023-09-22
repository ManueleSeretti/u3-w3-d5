import { SET_ALBUM } from "../action";

const initialState = {
  content: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return {
        ...state,

        content: [...state.content, action.payload],
      };

    default:
      return state;
  }
};
export default homeReducer;
