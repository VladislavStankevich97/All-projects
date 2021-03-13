import {
  SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED,
} from '../actions/constants';

const initialState = {
  filter: SHOW_ALL,
  show: 0,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        filter: SHOW_ALL,
        show: 0,
      };
    case SHOW_ACTIVE:
      return {
        ...state,
        filter: SHOW_ACTIVE,
        show: 1,
      };
    case SHOW_COMPLETED:
      return {
        ...state,
        filter: SHOW_COMPLETED,
        show: 2,
      };
    default:
      return state;
  }
}
