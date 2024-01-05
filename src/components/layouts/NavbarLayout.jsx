import * as React from 'react';
// * components
import Navbar from '../navbar/Navbar';

export default function NavbarLayout() {
  return (
    <header className="fixed z-10 min-w-full">
      <Navbar />
    </header>
  );
}
