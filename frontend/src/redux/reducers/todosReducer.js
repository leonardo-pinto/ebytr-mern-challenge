const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_TODOS':
    return action.todo;
  case 'ADD_TODO':
    return [...state, action.todo];
  case 'DELETE_TODO': {
    return state.filter(({ _id }) => _id !== action._id);
  }
  case 'UPDATE_TODO': {
    return state.map((todo) => {
      if (todo._id === action._id) {
        return {
          ...state,
          todo: action.todo,
          status: action.status,
          createdAt: action.createdAt,
        };
      }
      return todo;
    });
  }
  default:
    return state;
  }
};

export default todosReducer;
