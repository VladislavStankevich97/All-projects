import { combineReducers } from "redux";
import putCharacters from "./putCharacters";
import filterCharacters from "./filterCharacters";
// import loader from "./loader";
import modal from './modal';
import headerReducer from '../../ToDo-List/reducers/headerReducer'
import filterReducer from '../../ToDo-List/reducers/filterReducer'
import ui from '../../Weather/reducers/ui'
import loader from '../../Weather/reducers/loader'
import putWeatherServer from '../../Weather/reducers/putWeatherServer'

 const reducer =combineReducers({
  modal,
  loader,
  putCharacters,
  filterCharacters,
  headerReducer,
  filterReducer,
  ui,
  loader,
  putWeatherServer,
});
export default reducer;