import * as React from 'react';
import PropTypes from 'prop-types';
import NotesContext from './NotesContext';

export default function ContextProvider({ children }) {
  return (
    <NotesContext>
      {children}
    </NotesContext>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
