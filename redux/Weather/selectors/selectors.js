export const getCountryCode = (state) => {
  return state.putWeatherServer.countryCode;
};

export const getCityName = (state) => {
  return state.putWeatherServer.city;
};

export const getTemp = (state) => {
  return state.putWeatherServer.temp;
};

export const getDescription = (state) => {
  return state.putWeatherServer.description;
};

export const getWindSpeed = (state) => {
  return state.putWeatherServer.windSpeed;
};

export const getCity = (state) => {
  return state.ui.city;
};

export const getCountry = (state) => {
  return state.ui.country;
};

export const getErrMessage = (state) => {
  return state.putWeatherServer.errMessage;
};

export const getCheckboxServerWeatherbit = (state) => {
  return state.ui.checkboxServerWeatherbit;
};

export const getCheckboxServerOpenweathermap = (state) => {
  return state.ui.checkboxServerOpenweathermap;
};

export const getLoader = (state) => {
  return state.loader.loading;
};
