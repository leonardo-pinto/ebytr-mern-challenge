/* eslint-disable react/no-multi-comp */
import React from 'react';

export function AddIcon() {
  return (
    <svg
      data-testid="add-icon"
      className="text-white w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function DeleteIcon() {
  return (
    <svg
      data-testid="delete-icon"
      className="w-10 h-10 p-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5
        7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
}

export function EditIcon() {
  return (
    <svg
      data-testid="edit-icon"
      className="w-10 h-10 p-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2
         2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}

export function CancelEditIcon() {
  return (
    <svg
      data-testid="cancel-edit-icon"
      className="w-10 h-10 p-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function ConfirmEditIcon() {
  return (
    <svg
      data-testid="confirm-edit-icon"
      className="w-10 h-10 p-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function SortDesIcon() {
  return (
    <svg
      data-testid="sort-des-icon"
      className="text-white w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      value="des"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
      />

    </svg>
  );
}

export function SortAscIcon() {
  return (
    <svg
      data-testid="sort-asc-icon"
      className="text-white w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      value="asc"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
      />

    </svg>
  );
}

export function todoIcon() {
  return (
    <svg
      data-testid="todo-icon"
      className="w-16 h-16 p-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2
      2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002
      2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />

    </svg>

  );
}

export function signOutIcon() {
  return (
    <svg
      data-testid="signout-icon"
      className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={ 2 }
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0
        01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}
