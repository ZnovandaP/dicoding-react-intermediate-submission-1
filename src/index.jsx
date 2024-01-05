import * as React from 'react';
import ReactDOM from 'react-dom/client';
import NoteApp from './App';
// * style
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
);
