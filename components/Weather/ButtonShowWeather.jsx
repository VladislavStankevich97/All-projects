import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { loadWeatherServerWeatherbit } from "../../redux/Weather/actions/serverWeatherbit_saga";
import { loadWeatherServerOpenweathermap } from "../../redux/Weather/actions/serverOpenweathermap_thunk";
import {
  getCity,
  getCountry,
  getCheckboxServerWeatherbit,
  getCheckboxServerOpenweathermap,
} from "../../redux/Weather/selectors/selectors";

function ShowWeather(props) {
  const {
    city,
    country,
    isCheckboxServerWeatherbit,
    isCheckboxServerOpenweathermap,
    onLoadWeatherServerWeatherbit,
    onLoadWeatherServerOpenweathermap,
  } = props;

  const inactiveСheckboxes =
    !isCheckboxServerOpenweathermap && !isCheckboxServerWeatherbit;

  return (
    <div className="userButton">
      <Button
        variant="contained"
        color={inactiveСheckboxes ? "secondary" : "primary"}
        disabled={inactiveСheckboxes}
        onClick={
          isCheckboxServerOpenweathermap
            ? onLoadWeatherServerOpenweathermap(city, country)
            : onLoadWeatherServerWeatherbit(city, country)
        }
      >
        {inactiveСheckboxes ? "select server" : "show weather"}
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    city: getCity(state),
    country: getCountry(state),
    isCheckboxServerWeatherbit: getCheckboxServerWeatherbit(state),
    isCheckboxServerOpenweathermap: getCheckboxServerOpenweathermap(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadWeatherServerOpenweathermap: (city, country) => () =>
      dispatch(loadWeatherServerOpenweathermap(city, country)),
    onLoadWeatherServerWeatherbit: (city, country) => () =>
      dispatch(loadWeatherServerWeatherbit(city, country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowWeather);
