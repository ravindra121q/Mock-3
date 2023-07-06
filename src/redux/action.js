import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const Add_TODO_Fun = (payload) => (dispatch) => {
  console.log(payload);
  //   dispatch({ type: ADD_TODO_REQUEST });
  dispatch({ type: ADD_TODO_SUCCESS, payload });
};

export const Delete_todo = (payload) => (dispatch) => {
  dispatch({ type: DELETE_TODO, payload });
};

export const Toggle_Todo_fun = (payload) => (dispatch) => {
  dispatch({ type: TOGGLE_TODO, payload });
};

export const filter_handler=()=>(dispatch)=>{}