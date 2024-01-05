import * as React from 'react';
import { FaPlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsxm from '../../utils/clsxm';

export default function ButtonAddNote({ isArchived = false }) {
  return (
    <Link
      to="/catatan/baru"
      type="button"
      name="Button Add Note"
      title="Tambahkan Catatan"
      className={clsxm(
        'fixed bottom-8 right-8 p-4 sm:p-5 rounded-full bg-primary hover:opacity-75 transition-all duration-300',

        isArchived && 'bg-archived',

      )}
    >
      <span className="text-3xl text-stone-100">
        <FaPlus />
      </span>
    </Link>
  );
}

ButtonAddNote.propTypes = {
  isArchived: PropTypes.bool,
};

ButtonAddNote.defaultProps = {
  isArchived: false,
};
