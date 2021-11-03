const initialState = {
  todos: [],
  sort: {
    parameter: 'createdAt',
    order: 'asc',
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_TODOS':
    return {
      ...state,
      todos: action.todo,
    };
  case 'ADD_TODO':
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  case 'DELETE_TODO': {
    const filteredTodos = state.todos.filter(({ _id }) => _id !== action._id);
    return {
      ...state,
      todos: filteredTodos,
    };
  }
  case 'UPDATE_TODO': {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo._id === action._id) {
          return {
            ...todo,
            todo: action.todo,
            status: action.status,
            createdAt: action.createdAt,
          };
        }
        return todo;
      }),
    };
  }
  case 'SORT_TODO': {
    return {
      ...state,
      sort: {
        ...state.sort,
        parameter: action.parameter,
        order: action.order,
      },
    };
  }
  default:
    return state;
  }
};

export default todosReducer;
