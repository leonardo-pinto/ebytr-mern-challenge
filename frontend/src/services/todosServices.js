export const apiUrl = 'http://localhost:5000';

export function setHeaders() {
  const header = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return header;
}

export function getSortedTodos(state) {
  const { sort: { parameter, order } } = state.todos;
  const { todos } = state.todos;

  return todos.sort((a, b) => (
    (order === 'asc')
      ? a[parameter].localeCompare(b[parameter])
      : b[parameter].localeCompare(a[parameter])
  ));
}
