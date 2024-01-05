/* eslint-disable no-alert */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiArchiveIn, BiArchiveOut, BiEditAlt } from 'react-icons/bi';
import { GoTrash } from 'react-icons/go';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';
import useNotesContext from '../../hooks/useNotesContext';

export default function MenuDetailNote({ data, isArchived = false }) {
  const { dispatch } = useNotesContext();
  const navigate = useNavigate();

  const handleDeleteCard = (e) => {
    e.stopPropagation();
    const deletePermissions = window.confirm('Apakah anda yakin untuk menhapus catatan ini?');

    if (deletePermissions) {
      dispatch({
        type: 'DELETE_NOTE',
        payload: { id: data.id },
      });

      toast.success('Catatan berhasil dihapus');
      navigate('/');
    } else {
      toast.warn('Catatan tidak jadi dihapus');
    }
  };

  const handleChangeStateArchived = (e) => {
    e.stopPropagation();
    dispatch({
      type: 'TOGGLE_ARCHIVE_STATE',
      payload: { id: data.id },
    });
    toast.success(isArchived ? 'Catatan dikeluarkan dari arsip' : 'Catatan berhasil diarsipkan');
  };

  return (
    <div className={clsxm(
      'fixed bottom-36 right-8 flex flex-col divide-y',

      'bg-stone-900 rounded-lg ring-1 ring-primary divide-primary',

      isArchived && 'ring-archived divide-archived',
    )}
    >
      <button
        type="button"
        className="flex items-center gap-2 py-3 px-6  text-sky-500 hover:opacity-75"
        onClick={() => navigate(`/catatan/sunting/id-${data.id}`)}
      >
        <span className="text-2xl">
          <BiEditAlt />
        </span>
        Edit Catatan
      </button>

      <button
        type="button"
        className="flex items-center gap-2 py-3 px-6  text-red-600 hover:opacity-75"
        onClick={(e) => handleDeleteCard(e)}
      >
        <span className="text-2xl">
          <GoTrash />
        </span>
        Hapus Catatan
      </button>

      <button
        type="button"
        className="flex items-center gap-2 py-3 px-6 text-archived hover:opacity-75"
        onClick={(e) => handleChangeStateArchived(e)}
      >
        <span className="text-2xl">
          { data.archived ? (<BiArchiveIn />) : (<BiArchiveOut />) }
        </span>
        { data.archived ? 'Keluarkan dari arsip' : 'Arsipkan catatan' }
      </button>
    </div>
  );
}

MenuDetailNote.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  }).isRequired,
  isArchived: PropTypes.bool,
};

MenuDetailNote.defaultProps = {
  isArchived: false,
};
