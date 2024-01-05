import * as React from 'react';
// * router
import { useRouteError, Link } from 'react-router-dom';
// * assets
import ilustrationNotFound from '../../assets/ilustration/404-dark.svg';
// * custom hooks

export default function PageNotFound() {
  const routeError = useRouteError();
  const statusError = routeError.statusText;
  const messageError = routeError.error.message;

  return (
    <section className="min-h-screen bg-background p-8 flex flex-col justify-center items-center gap-4">
      <img
        src={ilustrationNotFound}
        alt="Ilustration 404 page not found"
        className="w-full h-full sm:h-60"
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-3xl text text-neutral-500 font-bold tracking-wider animate-pulse dark:text-neutral-200">
          {statusError}
        </h2>
        <p className="text-center font-medium tracking-wide text-neutral-700 dark:text-neutral-300">
          {messageError}
        </p>
        <p className="flex justify-center gap-1 items-center -mt-2 text-center font-medium tracking-wide text-neutral-700 dark:text-neutral-300">
          Silahkan Kembali kehalaman
          {' '}
          <Link
            to="/"
            className="flex justify-center items-center  underline font-semibold min-h-[44px] min-w-[44px] underline-offset-4 decoration-wavy decoration-secondary text-primary dark:text-dark-primary dark:decoration-dark-tertiary"
          >
            {' '}
            Catatan
          </Link>
        </p>
      </div>
    </section>
  );
}
