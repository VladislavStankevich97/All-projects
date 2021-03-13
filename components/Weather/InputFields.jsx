import React from "react";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import {
  handleChangeInputCity,
  handleChangeInputCountry,
} from "../../redux/Weather/actions/ui";
// import classes from "./inputFields.module.css";
import {
  getCity,
  getCountry,
  getErrMessage,
} from "../../redux/Weather/selectors/selectors";

function InputField(props) {
  const {
    city,
    country,
    errMessage,
    onHandleChangeInputCity,
    onHandleChangeInputCountry,
  } = props;

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "120px",
          marginTop: "65px",
        }}
      >
        <TextField
          error={errMessage ? true : false}
          style={{ width: "270px" }}
          helperText={
            errMessage ? <Alert severity="error">{errMessage}</Alert> : null
          }
          label={errMessage ? "This city does not exist" : "Сity ​​name"}
          variant="outlined"
          value={city}
          onChange={onHandleChangeInputCity}
        />
      </div>
      <div
        style={{
          width: "300px",
          height: "120px",
          marginTop: "65px",
          marginRight: "10px",
        }}
      >
        <TextField
          style={{ width: "270px" }}
          placeholder="For example: BY"
          label="Country code"
          variant="outlined"
          type="text"
          value={country}
          onChange={onHandleChangeInputCountry}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    city: getCity(state),
    country: getCountry(state),
    errMessage: getErrMessage(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleChangeInputCity: (value) =>
      dispatch(handleChangeInputCity(value.target.value)),
    onHandleChangeInputCountry: (value) =>
      dispatch(handleChangeInputCountry(value.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
