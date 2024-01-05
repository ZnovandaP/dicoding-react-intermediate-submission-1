import * as React from 'react';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import PropTypes from 'prop-types';

export default function ButtonArchiveCard({ onClick, isArchive = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[44px] min-h-[44px] w-full text-yellow-600 flex items-center justify-center gap-2 font-[500] tracking-wide hover:opacity-75"
    >
      <span className="text-xl">
        {!isArchive ? (<BiArchiveIn />) : (<BiArchiveOut />)}
      </span>
      {!isArchive ? 'Arsipkan' : 'Keluarkan'}
    </button>
  );
}

ButtonArchiveCard.propTypes = {
  isArchive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ButtonArchiveCard.defaultProps = {
  isArchive: false,
};
