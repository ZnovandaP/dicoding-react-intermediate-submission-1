/* eslint-disable no-use-before-define */
import * as React from 'react';
// * icons
import { SlNotebook } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Container from '../Container';
import clsxm from '../../utils/clsxm';
import useIsActivePathname from '../../hooks/useIsActivePathname';
import NavLink from './NavLink';

export default function Navbar() {
  const isArchivePathname = useIsActivePathname('/arsip');
  const isNotesPathname = useIsActivePathname('/');

  return (
    <nav
      className={clsxm(
        'h-[5rem] bg-white/5 px-8 backdrop-blur-2xl border-b-[1px] border-primary',

        isArchivePathname && 'border-archived',
      )}
    >
      <Container className="flex items-center justify-between h-full">
        <h1>
          <Link
            to="/"
            className={clsxm(
              'flex gap-2 text-primary font-script font-extrabold text-3xl hover:underline underline-offset-[10px] decoration-wavy',

              isNotesPathname && 'underline underline-offset-[10px] decoration-wavy sm:no-underline',

              isArchivePathname && 'text-archived',
            )}
          >
            <SlNotebook />
            Catatanku
          </Link>
        </h1>

        <ul className="flex items-center gap-8">
          {
            navLinks.map((nav) => (
              <li key={nav.label}>
                <NavLink label={nav.label} to={nav.to} />
              </li>
            ))
          }
        </ul>
      </Container>
    </nav>
  );
}

const navLinks = [
  {
    label: 'Catatan',
    to: '/',
  },
  {
    label: 'Arsip',
    to: '/arsip',
  },
];
