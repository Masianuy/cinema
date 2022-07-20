import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  studios: [],
  isFetching: false,
  error: null
}

export default function studiosReducer(state = initialState, {type, payload}) {
  switch(type) {
    case ACTIONS_TYPES.GET_STUDIOS_SUCCESS:
      return {...state, studios: payload, isFetching: false};
    case ACTIONS_TYPES.GET_STUDIOS_REQUEST:
      return {...state, isFetching: true};
    case ACTIONS_TYPES.GET_STUDIOS_ERROR:
      return {...state, error: payload, isFetching: false};
    default: return state;
  }
}