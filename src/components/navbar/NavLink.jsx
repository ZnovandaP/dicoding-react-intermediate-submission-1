import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useIsActivePathname from '../../hooks/useIsActivePathname';
import clsxm from '../../utils/clsxm';

export default function NavLink({ label, to }) {
  const isActiveNavByPathname = useIsActivePathname(to);

  return (
    <Link
      to={to}
      className={clsxm(
        'text-xl text-stone-100 font-medium hover:underline underline-offset-4 decoration-2 active:scale-100 relative',

        label === 'Catatan' && 'hidden sm:block',

        isActiveNavByPathname && 'active-nav',
      )}
    >
      {label}
    </Link>
  );
}

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
