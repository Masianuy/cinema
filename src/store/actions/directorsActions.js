import ACTIONS_TYPES from "./actionsTypes";

//Get all
export const getAllDirectorsAction = () => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_ACTION
  }
}
export const getAllDirectorsRequest= () => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_REQUEST
  }
}
export const getAllDirectorsSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_SUCCESS,
    payload
  }
}
export const getAllDirectorsError= (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTORS_ERROR,
    payload
  }
}

//Get by id
export const getDirectorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTOR_ACTION,
    payload
  }
}
export const getDirectorRequest= () => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTOR_REQUEST
  }
}
export const getDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTOR_SUCCESS,
    payload
  }
}
export const getDirectorError= (payload) => {
  return {
    type: ACTIONS_TYPES.GET_DIRECTOR_ERROR,
    payload
  }
}

//Create
export const createDirectorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_ACTION,
    payload
  }
}
export const createDirectorRequest= () => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_REQUEST
  }
}
export const createDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_SUCCESS,
    payload
  }
}
export const createDirectorError= (payload) => {
  return {
    type: ACTIONS_TYPES.POST_DIRECTOR_ERROR,
    payload
  }
}

//Updata
export const updateDirectorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_DIRECTOR_ACTION,
    payload
  }
}
export const updateDirectorRequest= () => {
  return {
    type: ACTIONS_TYPES.PUT_DIRECTOR_REQUEST
  }
}
export const updateDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS,
    payload
  }
}
export const updateDirectorError= (payload) => {
  return {
    type: ACTIONS_TYPES.PUT_DIRECTOR_ERROR,
    payload
  }
}

//Delete
export const deleteDirectorAction = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_ACTION,
    payload
  }
}
export const deleteDirectorRequest= () => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_REQUEST
  }
}
export const deleteDirectorSuccess = (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_SUCCESS,
    payload
  }
}
export const deleteDirectorError= (payload) => {
  return {
    type: ACTIONS_TYPES.DELETE_DIRECTOR_ERROR,
    payload
  }
}