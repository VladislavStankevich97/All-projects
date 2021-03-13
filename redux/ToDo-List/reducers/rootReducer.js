import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  headerReducer,
  filterReducer,
});
