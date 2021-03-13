import { SHOW_STATUS, SHOW_SPECIES, SHOW_GENDER } from "../actions/constants";

const initialState = {
  status: "",
  species: "",
  gender: "",
};

const filterCharacters = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STATUS:
      return {
        ...state,
        status: action.payload,
        species: "",
        gender: "",
      };
    case SHOW_SPECIES:
      return {
        ...state,
        ststus: "",
        species: action.payload,
        gender: "",
      };
    case SHOW_GENDER:
      return {
        ...state,
        ststus: "",
        species: "",
        gender: action.payload,
      };
    default:
      return state;
  }
};

export default filterCharacters;
