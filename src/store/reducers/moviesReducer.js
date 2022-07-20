import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  movies: [],
  isFetching: false,
  error: null
}

export default function moviesReducer(state = initialState, {type, payload}) {
  switch(type) {
    case ACTIONS_TYPES.GET_MOVIES_SUCCESS:
      return {...state, movies: payload, isFetching: false};
    case ACTIONS_TYPES.GET_MOVIES_REQUEST:
      return {...state, isFetching: true};
    case ACTIONS_TYPES.GET_MOVIES_ERROR:
      return {...state, isFetching: false, error: payload};

    default: return state;
  }
}