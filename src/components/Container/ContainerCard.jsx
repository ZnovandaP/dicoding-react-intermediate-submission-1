import * as React from 'react';
import PropTypes from 'prop-types';

export default function ContainerCard({ children, ...other }) {
  return (
    <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 xl:grid-cols-3 pb-10" {...other}>
      {children}
    </div>
  );
}

ContainerCard.propTypes = {
  children: PropTypes.node.isRequired,
};
