import * as React from 'react';
import { NotesDispatchContext, NotesStateContext } from '../context/NotesContext';

const useNotesContext = () => {
  const state = React.useContext(NotesStateContext);
  const dispatch = React.useContext(NotesDispatchContext);
  return { state, dispatch };
};

export default useNotesContext;
