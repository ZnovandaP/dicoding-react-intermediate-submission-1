import * as React from 'react';
import { FaPlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import clsxm from '../../../utils/clsxm';
import MenuDetailNote from '../../../components/MenuDetailNote/MenuDetailNote';

export default function ButtonOpenMenu({ data, isArchived = false }) {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      {openMenu && (
      <MenuDetailNote data={data} isArchived={isArchived} />
      )}

      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          type="button"
          title="menu"
          className={clsxm(
            'p-4 sm:p-5 rounded-full bg-primary hover:opacity-75 transition-all duration-300',

            isArchived && 'bg-archived',

            openMenu && 'rotate-45 ',
          )}
        >
          <span className="text-3xl text-stone-100">
            <FaPlus />
          </span>
        </button>
      </div>
    </>
  );
}

ButtonOpenMenu.propTypes = {
  isArchived: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)]),
  }).isRequired,
};

ButtonOpenMenu.defaultProps = {
  isArchived: false,
};
