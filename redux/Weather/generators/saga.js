import { takeEvery, put, call } from "redux-saga/effects";
import { showLoader, hideLoader } from "../actions/loadingIndicator";
import {
  errMessage,
  putWeatherServerWeatherbit,
} from "../actions/serverWeatherbit_saga";
import { LOAD_WEATHER_SERVER_WEATHERBIT } from "../actions/constants";
import { API_KEY_SERVER_WEATHERBIT } from "../actions/constantsApi";

const fetchData = (city, country) => {
  return fetch(
    `https://api.weatherbit.io/v2.0/current?&city=${city}&country=${country.toUpperCase()}&key=2e207e78e6e446dfb761302d6fbc17f4`
  ).then((respone) => respone.json());
};

function* workerLoadData2({ city, country }) {
  try {
    yield put(showLoader());
    const data = yield call(fetchData, city, country);
    if (data.error || (data.status > 200 && data.status < 400)) {
      yield put(errMessage(data));
    } else {
      yield put(putWeatherServerWeatherbit(data));
    }
    yield put(hideLoader());
  } catch (err) {
    const data = {
      error: "city not found",
    };
    console.log(data);
    yield put(errMessage(data));
    yield put(hideLoader());
  }
}

export default function* watchLoadData2() {
  yield takeEvery(LOAD_WEATHER_SERVER_WEATHERBIT, workerLoadData2);
}
