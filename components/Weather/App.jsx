import Сontainer from "./Сontainer";
import Weather from "./DisplaysTheWeather";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getLoader } from "../../redux/Weather/selectors/selectors";

function App({ loader }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Сontainer />
      {loader ? <CircularProgress /> : <Weather />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loader: getLoader(state),
  };
}

export default connect(mapStateToProps)(App);
