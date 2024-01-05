import * as React from 'react';
import PropsTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function Line({
  size = 'sm', className = '', borderStyle = 'border-solid', isArchive = false,
}) {
  return (
    <hr
      className={clsxm(
        'border-primary/80 rounded-xl ',

        isArchive && 'border-archived/80',

        borderStyle,

        size === 'sm' && 'border',

        size === 'md' && 'border-2',

        size === 'lg' && 'border-[3px]',

        className,
      )}
    />
  );
}

Line.propTypes = {
  size: PropsTypes.oneOf(['sm', 'md', 'lg']),
  borderStyle: PropsTypes.oneOf(['border-solid', 'border-dashed', 'border-dotted']),
  className: PropsTypes.string,
  isArchive: PropsTypes.bool,
};

Line.defaultProps = {
  size: 'sm',
  borderStyle: 'border-solid',
  className: '',
  isArchive: false,
};
