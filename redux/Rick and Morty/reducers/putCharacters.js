import {PUT_CHARACTERS} from "../actions/constants";

const initialState = {
  modal: false,
  pages: null,
  characters: [],
};

const putCharacters = (state = initialState, action) => {
  switch (action.type) {
    case PUT_CHARACTERS:
      return {
        ...state,
        pages: action.payload.info.pages,
        characters: action.payload.results.splice(0, 10),

      };
    default:
      return state;
  }
};

export default putCharacters;
