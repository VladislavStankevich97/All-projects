import React from "react";
import { connect } from "react-redux";
import {
  getCountryCode,
  getCityName,
  getTemp,
  getDescription,
  getWindSpeed,
} from "../../redux/Weather/selectors/selectors";

function Weather({ cityName, temp, description, windSpeed, countryCode }) {
  const world = "./weather/world.png";
  const city = "./weather/city.png";
  const wind = "./weather/wind.png";
  const temperature =
    parseFloat(temp) > 0
      ? "./weather/temperature.png"
      : "./weather/temperature-outside.png";

  var preciptionObject = {
    rain: "./weather/rain.png",
    snow: "./weather/snow.png",
    clouds: "./weather/clouds.png",
    haze: "./weather/haze.png",
    sky: "./weather/sun.png",
  };

  const entries = Object.entries(preciptionObject);
  const preciption = description
    ? entries
        .filter((el) => description.toLowerCase().includes(el[0]))
        .pop()
        .pop()
    : "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <img className="icons" src={world} alt={"not found"} />
        <h2>{countryCode}</h2>
      </div>

      <div>
        <img className="icons" src={city} alt={"not found"} />
        <h2>{cityName}</h2>
      </div>

      <div>
        <img className="icons" src={temperature} alt={"not found"} />
        <h2>{temp}</h2>
      </div>

      <div>
        <img
          className="icons"
          src={preciption || preciptionObject.clouds}
          alt={"not found"}
        />
        <h2>{description}</h2>
      </div>

      <div>
        <img className="icons" src={wind} alt={"not found"} />
        <h2>{windSpeed}</h2>
      </div>
      <style jsx>{`
        .icons {
          width: 170px;
          height: 170px;
        }
      `}</style>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countryCode: getCountryCode(state),
    cityName: getCityName(state),
    temp: getTemp(state),
    description: getDescription(state),
    windSpeed: getWindSpeed(state),
  };
}

export default connect(mapStateToProps, null)(Weather);
