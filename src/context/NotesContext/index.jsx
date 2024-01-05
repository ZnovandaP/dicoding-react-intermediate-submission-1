import * as React from 'react';
import PropTypes from 'prop-types';
import { getInitialData } from '../../utils/initial-data';

export const NotesStateContext = React.createContext(null);
export const NotesDispatchContext = React.createContext(null);

const notesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_NOTE':
      return [
        ...state,
        payload.note,
      ];

    case 'DELETE_NOTE':
      return state.filter((note) => note.id.toString() !== payload.id.toString());

    case 'TOGGLE_ARCHIVE_STATE':
      return state.map((note) => {
        if (note.id.toString() === payload.id.toString()) {
          return {
            ...note,
            archived: !note.archived,
          };
        }
        return note;
      });

    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id.toString() === payload.note.id.toString()) {
          return {
            ...note,
            ...payload.note,
          };
        }
        return note;
      });

    default:
      throw new Error('action undefined');
  }
};

const initialState = JSON.parse(localStorage.getItem('NOTES_DATA')) ?? getInitialData();

export default function NotesContext({ children }) {
  const [state, dispatch] = React.useReducer(notesReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem('NOTES_DATA', JSON.stringify(state));
  }, [state]);

  return (
    <NotesStateContext.Provider value={state}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  );
}

NotesContext.propTypes = {
  children: PropTypes.node.isRequired,
};
