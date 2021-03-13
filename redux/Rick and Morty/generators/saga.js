import { takeEvery, put, call, select } from "redux-saga/effects";
import { putCharacters } from "../actions/loadAndPutCharacters";
import { LOAD_CHARACTERS } from "../actions/constants";
import {showLoader, hideLoader} from '../actions/loader'

const fetchData = (page, status, species, gender) => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${page}
      ${status ? `&status=${status}` : ""}
      ${species ? `&species=${species}` : ""}
      ${gender ? `&gender=${gender}` : ""}`
  ).then((respone) => respone.json());
};

function* workerLoadData1({ page }) {
  yield put(showLoader());
  const status = yield select((state) => state.filterCharacters.status);
  const species = yield select((state) => state.filterCharacters.species);
  const gender = yield select((state) => state.filterCharacters.gender);
  const data = yield call(fetchData, page, status, species, gender);
  yield put(putCharacters(data));
  yield put(putCharacters(data));
  yield put(hideLoader());
}

export default function* watchLoadData1() {
  yield takeEvery(LOAD_CHARACTERS, workerLoadData1);
}
