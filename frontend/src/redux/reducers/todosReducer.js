const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_TODOS':
    return action.todo.data;
  case 'ADD_TODO':
    return [...state, action.todo.data];
  case 'DELETE_TODO': {
    return state.filter(({ _id }) => _id !== action.todoId);
  }

  default:
    return state;
  }
};

export default todosReducer;
