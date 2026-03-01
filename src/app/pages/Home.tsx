import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from '../components/Hero';
import { Roadmap } from '../components/Roadmap';
import { Products } from '../components/Products';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#vision') {
      document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Roadmap />
      <Products />
    </>
  );
}
