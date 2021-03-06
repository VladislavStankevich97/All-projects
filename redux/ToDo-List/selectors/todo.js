import { getTodo, getFilter } from "./globalSelectors";
import { SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/constants";

const getSortedTodos = (state) => {
  const mas = getTodo(state);
  const filter = getFilter(state);
  return mas.filter((item) => {
    if (filter === SHOW_ACTIVE) {
      return !item.completed;
    }
    if (filter === SHOW_COMPLETED) return item.completed;
    return true;
  });
};

export default getSortedTodos;
