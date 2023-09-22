import { SET_ARTIST } from "../action";

const initialState = {
  content: {},
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return {
        ...state,

        content: action.payload,
      };

    default:
      return state;
  }
};
export default artistReducer;
