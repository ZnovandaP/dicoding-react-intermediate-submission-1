import * as React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';

export default function ButtonEditNote({ onClick, isArchive }) {
  return (
    <button
      type="button"
      name="edit note"
      title="Edit Catatan"
      onClick={onClick}
      className={`min-w-[44px] min-h-[44px] absolute bottom-7 right-1/2 translate-x-1/2 rounded-full text-sky-500 flex bg-neutral-800 items-center justify-center gap-2 font-[500] tracking-wide ring-1 hover:ring-sky-500 ${!isArchive ? 'ring-primary/60' : 'ring-archived/60'}`}
    >
      <span className="text-xl">
        <BiEditAlt />
      </span>
    </button>
  );
}
ButtonEditNote.propTypes = {
  isArchive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ButtonEditNote.defaultProps = {
  isArchive: false,
};
