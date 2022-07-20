import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  actors: [],
  isFetching: false,
  error: null
}

export default function actorsReducer(state = initialState, {type, payload}) {
  switch(type) {
    case ACTIONS_TYPES.GET_ACTORS_SUCCESS:
      return {...state, actors: payload, isFetching: false};
      case ACTIONS_TYPES.GET_ACTORS_REQUEST:
        return {...state, isFetching: true};
    case ACTIONS_TYPES.GET_ACTORS_ERROR:
      return {...state, isFetching: false, error: payload};
    default: return state;
  }
}