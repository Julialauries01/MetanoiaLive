

import React from 'react';
import HeroAreaHomeOne from './HeroAreaHomeOne'; 
import AboutAreaHomeOne from './AboutAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CounterAreaHomeOne from './CounterAreaHomeOne';

const HomeOne = () => {
  return (
    <>
       <HeroAreaHomeOne />
     {/*  <CounterAreaHomeOne /> */}
       <AboutAreaHomeOne />
       <FooterOne />
    </>
  );
};

export default HomeOne;