import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actiontypes";




export const Add = (newMovie) => {
    return {
        type: ADD_MOVIE,
        payload : newMovie
    }
}


export const Delete = (id) => {
    return {
        type: DELETE_MOVIE,
        payload : id
    }
}

export const Edit = (editMovie) => {
    return {
        type : EDIT_MOVIE,
        payload: editMovie
    }
}