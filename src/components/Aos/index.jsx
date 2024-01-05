import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return null;
}
