const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    console.log('initialState', state);
    console.log(action.todo.data);
    return [...state, action.todo.data];
  default:
    return state;
  }
};

export default todosReducer;
