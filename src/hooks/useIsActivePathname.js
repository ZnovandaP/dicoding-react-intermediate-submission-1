import { useLocation } from 'react-router-dom';

const useIsActivePathname = (pathname) => {
  const { pathname: basePathname } = useLocation();
  const urlOfArray = basePathname.split('/');
  const newPathname = `/${urlOfArray[1]}`;

  return pathname === newPathname;
};

export default useIsActivePathname;
