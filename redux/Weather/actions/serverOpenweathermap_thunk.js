import { PUT_WEATHER_SERVER_OPENWEATHERMAP } from "./constants";
import { showLoader, hideLoader } from "./loadingIndicator";
import { errMessage } from "./serverWeatherbit_saga";
import { API_KEY_SERVER_OPENWEATHERMAP } from "./constantsApi";

export const putWeatherServerOpenweathermap = (dataFromServer) => {
  return {
    type: PUT_WEATHER_SERVER_OPENWEATHERMAP,
    payload: dataFromServer,
  };
};

export const loadWeatherServerOpenweathermap = (city, country) => (
  dispatch
) => {
  dispatch(showLoader());
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${
      country || ""
    }&appid=13779e5118e361b5c9eb287d195b8225
    &units=metric`
  )
    .then((respone) => respone.json())
    .then((json) => {
      if (json.cod >= 200 && json.cod < 400) {
        dispatch(putWeatherServerOpenweathermap(json));
      } else {
        dispatch(errMessage(json));
      }
      dispatch(hideLoader());
    });
};
