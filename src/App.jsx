import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import RouterNoteApp from './Router';
import ContextProvider from './context/ContextProvider';
import AosInit from './components/Aos';

export default function NoteApp() {
  return (
    <>
      <AosInit />
      <ContextProvider>
        <RouterProvider router={RouterNoteApp} />
      </ContextProvider>
    </>
  );
}
