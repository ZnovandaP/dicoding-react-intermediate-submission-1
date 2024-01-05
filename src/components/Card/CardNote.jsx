/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
// * components
import ButtonDeleteCard from '../button/ButtonDeleteCard';
import ButtonArchiveCard from '../button/ButtonArchiveCard';
import clsxm from '../../utils/clsxm';
import { showFormattedDate } from '../../utils/initial-data';
import useNotesContext from '../../hooks/useNotesContext';
import ButtonEditNote from '../button/ButtonEditNote';

export default function CardNote({
  children, isArchive = false, to, id,
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      aria-label="Card"
      tabIndex="0"
      className={clsxm(
        'relative flex flex-col justify-between gap-4 max-w-full bg-transparent border rounded-md hover:shadow-2xl focus:shadow-2xl border-primary hover:shadow-primary focus:shadow-primary  transition-all duration-300 cursor-pointer',

        isArchive && 'border-archived hover:shadow-archived focus:shadow-archived',
      )}
    >
      {children}
      <ButtonEditNote
        isArchive={isArchive}
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/catatan/sunting/id-${id}`);
        }}
      />
    </div>
  );
}

CardNote.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isArchive: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

CardNote.defaultProps = {
  isArchive: false,
};

function Head({ title, date, isArchive = false }) {
  return (
    <section
      className="px-4 pt-4 flex flex-col gap-1"
    >
      <h3 className={clsxm(
        'flex items-center font-head text-xl tracking-wider text-primary',

        isArchive && 'text-archived',
      )}
      >
        <span className="line-clamp-1">{title}</span>
      </h3>
      <p className="text-textNormal font-medium tracking-wide line-clamp-1">
        {showFormattedDate(date)}
      </p>
    </section>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  isArchive: PropTypes.bool,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
};

Head.defaultProps = {
  isArchive: false,
};

function Body({ noteBody }) {
  return (
    <section className="px-4 pb-5">
      <p className="text-textMedium font-medium tracking-wider hyphens-auto line-clamp-[5]">
        {parse(noteBody)}
      </p>
    </section>
  );
}

Body.propTypes = {
  noteBody: PropTypes.string.isRequired,
};

function Foot({ id, isArchive = false }) {
  const { dispatch } = useNotesContext();

  const handleDeleteCard = (e) => {
    e.stopPropagation();
    const deletePermissions = window.confirm('Apakah anda yakin untuk menhapus catatan ini?');

    if (deletePermissions) {
      dispatch({
        type: 'DELETE_NOTE',
        payload: { id },
      });

      toast.success('Catatan berhasil dihapus');
    } else {
      toast.warn('Catatan tidak jadi dihapus');
    }
  };

  const handleChangeStateArchived = (e) => {
    e.stopPropagation();
    dispatch({
      type: 'TOGGLE_ARCHIVE_STATE',
      payload: { id },
    });

    toast.success(isArchive ? 'Catatan dikeluarkan dari arsip' : 'Catatan berhasil diarsipkan');
  };

  return (
    <section
      className={clsxm(
        'divide-x flex items-center border-t-[1px] divide-primary/60 border-primary/60',

        isArchive && 'divide-archived/60 border-archived/60',
      )}
    >
      <ButtonDeleteCard onClick={(e) => handleDeleteCard(e)} />
      <ButtonArchiveCard onClick={(e) => handleChangeStateArchived(e)} isArchive={isArchive} />
    </section>
  );
}

Foot.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isArchive: PropTypes.bool,
};

Foot.defaultProps = {
  isArchive: false,
};

CardNote.Head = Head;
CardNote.Body = Body;
CardNote.Foot = Foot;
