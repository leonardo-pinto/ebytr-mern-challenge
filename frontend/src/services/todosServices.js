export const apiUrl = 'http://localhost:5000';

export function setHeaders() {
  const header = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return header;
}
