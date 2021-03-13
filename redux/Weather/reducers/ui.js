import {
  CITY,
  COUNTRY,
  CHECKBOX_SERVER_WEATHERBIT,
  CHECKBOX_SERVER_OPENWEATHERMAP,
} from "../actions/constants";

const initialState = {
  city: "",
  country: "",
  checkboxServerOpenweathermap: false,
  checkboxServerWeatherbit: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case CITY:
      return {
        ...state,
        city: action.payload,
      };
    case COUNTRY:
      return {
        ...state,
        country: action.payload.toUpperCase().slice(0, 2),
      };
    case CHECKBOX_SERVER_OPENWEATHERMAP:
      return {
        ...state,
        checkboxServerOpenweathermap: true,
        checkboxServerWeatherbit: false,
      };
    case CHECKBOX_SERVER_WEATHERBIT:
      return {
        ...state,
        checkboxServerOpenweathermap: false,
        checkboxServerWeatherbit: true,
      };
    default:
      return state;
  }
};

export default ui;
