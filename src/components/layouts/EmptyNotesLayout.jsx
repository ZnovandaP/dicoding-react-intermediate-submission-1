import * as React from 'react';
import PropTypes from 'prop-types';

export default function EmptyNotesLayout({ image, text }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="Ilustrasi Catatan Tidak Ada"
        loading="lazy"
        height="290"
        className="w-80 h-80 sm:h-72 opacity-60"
      />
      <h3 className="font-medium text-2xl opacity-80 text-textNormal tracking-wide pb-8">
        {text}
      </h3>
    </div>
  );
}

EmptyNotesLayout.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
