import * as React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import AppShell from '../components/AppShell';
import NotesPage from '../pages/Notes';
import ArchivePage from '../pages/Archive';
import NoteDetailPage from '../pages/Note/NoteDetailPage';
import CreateNotePage from '../pages/Note/CreateNotePage';
import PageNotFound from '../pages/_404';
import EditNotePage from '../pages/Note/EditNotePage';

const RouterNoteApp = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppShell />} errorElement={<PageNotFound />}>
      <Route index element={<NotesPage />} />
      <Route path="arsip">
        <Route index element={<ArchivePage />} />
        <Route path="modebaca/:id" element={<NoteDetailPage />} />
      </Route>
      <Route path="/catatan">
        <Route index element={<NotesPage />} />
        <Route path="modebaca/:id" element={<NoteDetailPage />} />
        <Route path="sunting/:id" element={<EditNotePage />} />
        <Route path="baru" element={<CreateNotePage />} />
      </Route>
    </Route>,
  ),
);

export default RouterNoteApp;
