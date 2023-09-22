import { SET_SINGLE_ALBUM } from "../action";

const initialState = {
  content: {},
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_ALBUM:
      return {
        ...state,

        content: action.payload,
      };

    default:
      return state;
  }
};
export default albumReducer;
