import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import actorsReducer from './actorsReducer';
import directorsReducer from './directorsReducer';
import studiosReducer from './studiosReducer';

export default combineReducers({
  movieList: moviesReducer,
  actorList: actorsReducer,
  directorList: directorsReducer,
  studioList: studiosReducer,
})