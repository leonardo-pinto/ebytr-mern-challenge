/* eslint-disable react-func/max-lines-per-function */
import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import {
  screen, fireEvent, cleanup,
} from '@testing-library/react';
import { apiUrl, setHeaders } from '../services/todosServices';
import Todo from '../components/todos/Todo';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  todos: {
    todos: [],
    sort: {
      parameter: 'createdAt',
      order: 'asc',
    },
  },
};

const todoExample = {
  _id: 'todo id',
  userId: 'user id',
  todo: 'test todo',
  status: 'done',
  createdAt: 'test createdAt',
};

const todoTextEditedExample = 'test todo edited';

const todoTextId = 'todo-text';
const todoStatusId = 'todo-status';
const todoCreatedAtId = 'todo-createdat';
const deleteTodoBtnId = 'delete-btn';
const deleteTodoIconId = 'delete-icon';
const editTodoBtnId = 'edit-btn';
const editTodoIconId = 'edit-icon';
const editTodoTextInputId = 'edit-todo-text-input';
const editStatusSelectId = 'edit-status-select';
const confirmEditBtnId = 'confirm-edit-todo-btn';
const cancelEditBtnId = 'cancel-edit-todo-btn';

jest.mock('axios');

beforeEach(() => renderWithRouterAndRedux(
  <Todo todo={ todoExample } />, { route: '/' }, initialState,
));

afterEach(cleanup);

describe('Todo component', () => {
  it('renders todo text, status and createdAt attributes', () => {
    const todoText = screen.getByTestId(todoTextId);
    const todoStatus = screen.getByTestId(todoStatusId);
    const todoCreatedAt = screen.getByTestId(todoCreatedAtId);
    expect(todoText).toBeInTheDocument();
    expect(todoStatus).toBeInTheDocument();
    expect(todoCreatedAt).toBeInTheDocument();
  });

  it('renders delete and edit todo button containing an icon', () => {
    const deleteTodoBtn = screen.getByTestId(deleteTodoBtnId);
    const deleteTodoIcon = screen.getByTestId(deleteTodoIconId);
    const editTodoBtn = screen.getByTestId(editTodoBtnId);
    const editTodoIcon = screen.getByTestId(editTodoIconId);
    expect(deleteTodoBtn).toBeInTheDocument();
    expect(deleteTodoIcon).toBeInTheDocument();
    expect(editTodoBtn).toBeInTheDocument();
    expect(editTodoIcon).toBeInTheDocument();
  });

  it('renders an edit todo text input and status after clicking on edit button', () => {
    const editTodoBtn = screen.getByTestId(editTodoBtnId);
    fireEvent.click(editTodoBtn);

    const editTodoTextInput = screen.getByTestId(editTodoTextInputId);
    const editStatusSelect = screen.getByTestId(editStatusSelectId);
    expect(editTodoTextInput).toBeInTheDocument();
    expect(editStatusSelect).toBeInTheDocument();
  });

  it('renders a confirm and cancel edit button after cliking on edit button', () => {
    const editTodoBtn = screen.getByTestId(editTodoBtnId);
    fireEvent.click(editTodoBtn);

    const confirmEditBtn = screen.getByTestId(confirmEditBtnId);
    const cancelEditBtn = screen.getByTestId(cancelEditBtnId);
    expect(confirmEditBtn).toBeInTheDocument();
    expect(cancelEditBtn).toBeInTheDocument();
  });

  it('user is able to fill todo text input', () => {
    const editTodoBtn = screen.getByTestId(editTodoBtnId);
    fireEvent.click(editTodoBtn);

    const editTodoTextInput = screen.getByTestId(editTodoTextInputId);
    fireEvent.change(editTodoTextInput, { target: { value: todoTextEditedExample } });

    expect(editTodoTextInput.value).toBe('test todo edited');
  });

  it('todo text is not edited if user click on cancel button', () => {
    const editTodoBtn = screen.getByTestId(editTodoBtnId);
    fireEvent.click(editTodoBtn);

    const editTodoTextInput = screen.getByTestId(editTodoTextInputId);
    fireEvent.change(editTodoTextInput, { target: { value: todoTextEditedExample } });

    const cancelEditBtn = screen.getByTestId(cancelEditBtnId);
    fireEvent.click(cancelEditBtn);

    const originalTodoText = screen.getByTestId(todoTextId);
    expect(originalTodoText).toBeInTheDocument();
  });

  it('the correct endpoint is called after deleting a todo', () => {
    localStorage.setItem('token', 'token example');

    axios.delete.mockResolvedValueOnce();

    const deleteTodoBtn = screen.getByTestId(deleteTodoBtnId);
    fireEvent.click(deleteTodoBtn);

    expect(axios.delete)
      .toHaveBeenCalledWith(`${apiUrl}/todos/${todoExample._id}`, setHeaders());
  });

  it('the correct endpoint is called after updating a todo', () => {
    localStorage.setItem('token', 'token example');

    axios.put.mockResolvedValueOnce();

    const editTodoBtn = screen.getByTestId(editTodoBtnId);
    fireEvent.click(editTodoBtn);

    const editTodoTextInput = screen.getByTestId(editTodoTextInputId);
    const confirmEditBtn = screen.getByTestId(confirmEditBtnId);
    fireEvent.change(editTodoTextInput, { target: { value: todoTextEditedExample } });
    fireEvent.click(confirmEditBtn);

    const { _id, status, createdAt } = todoExample;

    expect(axios.put)
      .toHaveBeenCalledWith(`${apiUrl}/todos/${_id}`,
        { todo: todoTextEditedExample, status, createdAt }, setHeaders());
  });
});
