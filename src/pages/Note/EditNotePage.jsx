import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa6';
import Container from '../../components/Container';
import clsxm from '../../utils/clsxm';
import FloatButton from '../../components/button/FloatButton';
import useNotesContext from '../../hooks/useNotesContext';

export default function EditNotePage() {
  const { state: notes, dispatch } = useNotesContext();
  const { id } = useParams();

  const currentNote = notes.find((note) => {
    const idParams = id.replace(/id-/, '');
    return note.id.toString() === idParams;
  });

  const noteBodyRef = React.useRef(null);

  const navigate = useNavigate();

  const [inputNote, setInputNote] = React.useState({
    title: currentNote.title,
    body: currentNote.body,
    archived: currentNote.archived ? 'YES_ARCHIVE' : 'NOT_ARCHIVE',
  });

  const handleEditNote = () => {
    if (inputNote.title.length < 3 || inputNote.body.length < 3) {
      toast.error('Gagal, tolong isi form diatas');
      return;
    }

    dispatch({
      type: 'EDIT_NOTE',
      payload: {
        note: {
          id: currentNote.id,
          title: inputNote.title,
          body: inputNote.body,
          archived: inputNote.archived === 'YES_ARCHIVE',
          createdAt: new Date(),
        },
      },
    });

    toast.success('Berhasil menyunting catatan');

    const redirectTo = inputNote.archived === 'YES_ARCHIVE' ? '/arsip' : '/';
    navigate(redirectTo);
  };

  React.useEffect(() => {
    noteBodyRef.current.innerHTML = inputNote.body;
  }, []);
  return (
    <>
      <div className="px-8 mt-4 sm:mt-6 pb-10" data-aos="fade-up">
        <Container>
          <h2 className="text-xl font-medium tracking-wider">
            #Sunting Catatan
          </h2>

          <input
            placeholder="Untitle"
            onChange={(e) => setInputNote({ ...inputNote, title: e.target.value })}
            value={inputNote.title}
            required
            className={clsxm(
              'text-4xl sm:text-6xl text-primary font-extrabold hyphens-auto w-full bg-transparent placeholder:text-primary py-2',

              inputNote.archived === 'YES_ARCHIVE' && 'text-archived placeholder:text-archived',
            )}
          />

          <div
            className="mt-4 sm:mt-8 flex flex-col text-lg gap-y-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <label htmlFor="archive" className="flex items-center gap-3">
              <input
                type="radio"
                name="archive"
                id="archive"
                value="YES_ARCHIVE"
                checked={inputNote.archived === 'YES_ARCHIVE'}
                onChange={(e) => setInputNote({ ...inputNote, archived: e.target.value })}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <BiArchiveIn className="text-3xl text-archived" />
              Arsipkan Catatan
            </label>

            <label htmlFor="not-archive" className="flex items-center gap-3">
              <input
                type="radio"
                name="archive"
                id="not-archive"
                value="NOT_ARCHIVE"
                checked={inputNote.archived === 'NOT_ARCHIVE'}
                onChange={(e) => setInputNote({ ...inputNote, archived: e.target.value })}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <BiArchiveOut className="text-3xl text-amber-700" />
              Catatan tidak diarsipkan
            </label>
          </div>

          <div
            ref={noteBodyRef}
            className="min-h-[15rem] mt-8 tracking-wide text-lg sm:text-xl hyphens-auto"
            contentEditable
            data-placeholder="Tuliskan Catatan mu disini...."
            onInput={(e) => setInputNote({ ...inputNote, body: e.target.innerHTML })}
          />
        </Container>
      </div>

      <FloatButton
        label="Sunting Catatan"
        isArchived={inputNote.archived === 'YES_ARCHIVE'}
        icon={<FaCheck />}
        onClick={handleEditNote}
      />
    </>
  );
}
