import ACTIONS_TYPES from "../actions/actionsTypes";

//Get all
export const getAllStudiosAction = () => {
  return {
    type: ACTIONS_TYPES.GET_STUDIOS_ACTION,
  }
}
export const getAllStudiosRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_STUDIOS_REQUEST,
  }
}
export const getAllStudiosSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_STUDIOS_SUCCESS,
    payload,
  }
}
export const getAllStudiosError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_STUDIOS_ERROR,
    payload,
  }
}

//Get by id
export const getStudioAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_STUDIO_ACTION,
    payload
  }
} 
export const getStudioRequest = () => {
  return {
    type: ACTIONS_TYPES.GET_STUDIO_REQUEST,
  }
} 
export const getStudioSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_STUDIO_SUCCESS,
    payload
  }
} 
export const getStudioError = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_STUDIO_ERROR,
    payload
  }
}

//Create
export const createStudioAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_STUDIO_ACTION,
    payload
  }
} 
export const createStudioRequest = () => {
  return {
    type: ACTIONS_TYPES.POST_STUDIO_REQUEST,
  }
} 
export const createStudioSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_STUDIO_SUCCESS,
    payload
  }
} 
export const createStudioError = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_STUDIO_ERROR,
    payload
  }
}

//Update
export const updateStudioAction = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_STUDIO_ACTION,
    payload
  }
} 
export const updateStudioRequest = () => {
  return {
    type: ACTIONS_TYPES.PUT_STUDIO_REQUEST,
  }
} 
export const updateStudioSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_STUDIO_SUCCESS,
    payload
  }
} 
export const updateStudioError = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_STUDIO_ERROR,
    payload
  }
}

//Delete
export const deleteStudioAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_STUDIO_ACTION,
    payload
  }
} 
export const deleteStudioRequest = () => {
  return {
    type: ACTIONS_TYPES.DELETE_STUDIO_REQUEST,
  }
} 
export const deleteStudioSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_STUDIO_SUCCESS,
    payload
  }
} 
export const deleteStudioError = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_STUDIO_ERROR,
    payload
  }
}