import * as React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import useNotesContext from '../../hooks/useNotesContext';
import HeadingNoteDetail from './Layout/HeadingNoteDetail';
import BodyNoteDetail from './Layout/BodyNoteDetail';
import ButtonOpenMenu from './Layout/ButtonOpenMenu';

export default function NoteDetailPage() {
  const { id } = useParams();
  const { state: notes } = useNotesContext();

  const currentNote = notes.find((note) => {
    const idParams = id.replace(/id-/, '');
    return note.id.toString() === idParams;
  });

  return (
    <>
      <div className="px-8 mt-4 sm:mt-6 pb-10" data-aos="fade-up">
        <Container>
          <h2 className="text-xl font-medium tracking-wider mb-4">
            #Detail Catatan
          </h2>

          <HeadingNoteDetail data={currentNote} isArchived={currentNote.archived} />

          <BodyNoteDetail data={currentNote} />

        </Container>
      </div>
      <ButtonOpenMenu data={currentNote} isArchived={currentNote.archived} />
    </>
  );
}
