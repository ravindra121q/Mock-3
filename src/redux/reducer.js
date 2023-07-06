import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  TOGGLE_TODO,
} from "./actionTypes";

const initialState = { todo: [], isLoading: false, isError: false };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_DATA_SUCCESS:
      console.log(state, "sa");
      return { ...state, todo: payload, isLoading: false, isError: false };
    case GET_DATA_FAILURE:
      return { ...state, isLoading: false, isError: false };
    case ADD_TODO_REQUEST:
      return { ...state };
    case ADD_TODO_SUCCESS:
      return { ...state, todo: [...state.todo, payload] };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload),
      };
    case TOGGLE_TODO:
      console.log(state.todo);
      console.log(payload);
      return {
        ...state,
        todo: state.todo.map((todos, i) =>
          i === Number(payload) ? { ...todos, status: !todos.status } : todos
        ),
      };
    default:
      return state;
  }
};
