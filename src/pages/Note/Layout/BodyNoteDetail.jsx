import * as React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export default function BodyNoteDetail({ data }) {
  return (
    <article className="mt-8 text-lg sm:text-xl hyphens-auto">
      {parse(data.body)}
    </article>
  );
}

BodyNoteDetail.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};
