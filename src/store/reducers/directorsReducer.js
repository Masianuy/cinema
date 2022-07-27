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

    case ACTIONS_TYPES.POST_DIRECTOR_SUCCESS:
      return {...state, directors: [...state.directors, payload], isFetching: false};

    case ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS:
      return {...state, directors: [...state.directors.map((director) => director.id !== payload.id ? payload : director)],
        isFetching: false};

    case ACTIONS_TYPES.DELETE_DIRECTOR_SUCCESS:
      return{...state, 
        directors: [...state.directors.filter((director) => director.id !== payload)] , 
        isFetching: false}

    case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
    case ACTIONS_TYPES.POST_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.PUT_DIRECTOR_REQUEST:
    case ACTIONS_TYPES.DELETE_DIRECTOR_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
    case ACTIONS_TYPES.POST_DIRECTOR_ERROR:
    case ACTIONS_TYPES.PUT_DIRECTOR_ERROR:
    case ACTIONS_TYPES.DELETE_DIRECTOR_ERROR:
      return {...state, error: payload, isFetching: false}
    default: return state;
  }
}