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

    case ACTIONS_TYPES.POST_STUDIO_SUCCESS:
      return {...state, studios: [...state.studios, payload], 
        isFetching: false};
      
    case ACTIONS_TYPES.PUT_STUDIO_SUCCESS:
      return {...state, studios: [state.studios.map((studio) => studio.id !== payload.id ? payload : studio)], 
        isFetching: false};
      
    case ACTIONS_TYPES.DELETE_STUDIO_SUCCESS:
      return {...state, studios: [state.studios.filter((studio) => studio.id !== payload)], 
        isFetching: false};

    case ACTIONS_TYPES.GET_STUDIOS_REQUEST:
    case ACTIONS_TYPES.POST_STUDIO_REQUEST:
    case ACTIONS_TYPES.PUT_STUDIO_REQUEST:
    case ACTIONS_TYPES.DELETE_STUDIO_REQUEST:
      return {...state, isFetching: true};

    case ACTIONS_TYPES.GET_STUDIOS_ERROR:
    case ACTIONS_TYPES.POST_STUDIO_ERROR:
    case ACTIONS_TYPES.PUT_STUDIO_ERROR:
    case ACTIONS_TYPES.DELETE_STUDIO_ERROR:
      return {...state, error: payload, isFetching: false};
    default: return state;
  }
}