import { PUT_CHARACTERS, REMEMBER_PAGE } from "../actions/constants";

const initialState = {
  pages: null,
  page: 1,
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
    case REMEMBER_PAGE:
      console.log(action.page)
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default putCharacters;
