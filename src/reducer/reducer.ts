import { combineReducers } from 'redux';
import { dataReducer } from './data/data';

export default combineReducers({
  data: dataReducer,
});
