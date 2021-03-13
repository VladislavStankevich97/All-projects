import { combineReducers } from "redux";
import putCharacters from "./putCharacters";
import filterCharacters from "./filterCharacters";
// import loader from "./loader";
import modal from "./modal";
import changeTodos from "../../ToDo-List/reducers/changeTodos";
import filterTodos from "../../ToDo-List/reducers/filterTodos";
import ui from "../../Weather/reducers/ui";
import loader from "../../Weather/reducers/loader";
import putWeatherServer from "../../Weather/reducers/putWeatherServer";

const reducer = combineReducers({
  modal,
  loader,
  putCharacters,
  filterCharacters,
  changeTodos,
  filterTodos,
  ui,
  loader,
  putWeatherServer,
});
export default reducer;