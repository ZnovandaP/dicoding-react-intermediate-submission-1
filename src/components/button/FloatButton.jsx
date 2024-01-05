import * as React from 'react';
import PropTypes from 'prop-types';
import clsxm from '../../utils/clsxm';

export default function FloatButton({
  isArchived = false, icon, label, onClick,
}) {
  return (
    <button
      type="button"
      name={label}
      title={label}
      onClick={onClick}
      className={clsxm(
        'fixed bottom-8 right-8 p-4 sm:p-5 rounded-full bg-primary hover:opacity-75 transition-all duration-300',

        isArchived && 'bg-archived',

      )}
    >
      <span className="text-3xl text-stone-100">
        {icon}
      </span>
    </button>
  );
}

FloatButton.propTypes = {
  isArchived: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

FloatButton.defaultProps = {
  isArchived: false,
};
