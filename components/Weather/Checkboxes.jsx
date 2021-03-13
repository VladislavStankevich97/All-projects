import { Checkbox } from "@material-ui/core";
import { connect } from "react-redux";
import {
  handleChangeCheckboxServerOpenweathermap,
  handleChangeCheckboxServerWeatherbit,
} from "../../redux/Weather/actions/ui";
import {getCheckboxServerOpenweathermap, getCheckboxServerWeatherbit} from '../../redux/Weather/selectors/selectors'

function Checkboxs(props) {
  const {
    isCheckboxServerWeatherbit,
    isCheckboxServerOpenweathermap,
    onHandleChangeCheckboxServerWeatherbit,
    onHandleChangeCheckboxServerOpenweathermap,
  } = props;

  return (
    <div className="checkbox">
      <span>Server 1:</span>
      <Checkbox
        checked={isCheckboxServerOpenweathermap}
        onChange={onHandleChangeCheckboxServerOpenweathermap}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        title="Show weather from server 1"
      />
      <br />
      <span>Server 2:</span>
      <Checkbox
        checked={isCheckboxServerWeatherbit}
        onChange={onHandleChangeCheckboxServerWeatherbit}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        title="Show weather from server 2"
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isCheckboxServerOpenweathermap: getCheckboxServerOpenweathermap(state),
    isCheckboxServerWeatherbit: getCheckboxServerWeatherbit(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleChangeCheckboxServerOpenweathermap: () =>
      dispatch(handleChangeCheckboxServerOpenweathermap()),
    onHandleChangeCheckboxServerWeatherbit: () =>
      dispatch(handleChangeCheckboxServerWeatherbit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxs);
