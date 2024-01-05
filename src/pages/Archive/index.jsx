import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../../components/Container';
import SearchLayout from '../../components/layouts/SearchLayout';
import useNotesContext from '../../hooks/useNotesContext';
import NoteArchiveCards from './Layout/NoteArchiveCards';
import ButtonAddNote from '../../components/button/ButtonAddNote';

export default function ArchivePage() {
  const [searchParams] = useSearchParams();
  const { state: notes } = useNotesContext();

  const notesAfterSearchByTitle = notes?.filter((note) => {
    const titleLowerCase = note.title.toLowerCase();
    const getSearchTitle = searchParams.get('query');
    const searchTitleLowerCase = typeof getSearchTitle === 'string'
      ? getSearchTitle.toLowerCase() : '';

    return titleLowerCase.includes(searchTitleLowerCase);
  });

  return (
    <>
      <div className="px-8" data-aos="fade-up">
        <Container>
          <SearchLayout
            label="Mencari Catatan (Arsip)"
            isArchive
          />
          <NoteArchiveCards data={notesAfterSearchByTitle} />
        </Container>
      </div>
      <ButtonAddNote isArchived />
    </>
  );
}
