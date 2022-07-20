import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  directors: [],
  isFetching: false,
  error: null
}

export default function directorsReducer(state = initialState, {type, payload}) {
  switch(type) {
    case ACTIONS_TYPES.GET_DIRECTORS_SUCCESS:
      return {...state, directors: payload, isFetching:false};
    case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
      return {...state, error: payload, isFetching: false}
    default: return state;
  }
}