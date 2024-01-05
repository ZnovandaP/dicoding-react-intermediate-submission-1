import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavbarLayout from '../layouts/NavbarLayout';
import FooterLayout from '../layouts/FooterLayout';
import ScrollToTop from '../ScrollToTop';

import 'react-toastify/dist/ReactToastify.css';

export default function AppShell() {
  return (
    <>
      <ScrollToTop />

      <NavbarLayout />

      <main className="bg-background text-base font-common min-h-screen pt-[6.5rem] text-stone-100">
        <Outlet />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>

      <FooterLayout />
    </>
  );
}
