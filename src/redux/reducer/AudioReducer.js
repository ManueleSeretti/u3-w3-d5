import { SET_AUDIO } from "../action";

const initialState = {
  content: [],
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO:
      return {
        ...state,

        content: action.payload,
      };

    default:
      return state;
  }
};
export default audioReducer;
