
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CounterAreaHomeOne from '../homes/home/CounterAreaHomeOne';
import BlogAreaHomeOne from '../homes/home/BlogAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const AboutTwo = () => {
  return (
    <>

      <Breadcrumb title="About Us Two" subtitle="About Us Two" />
      <CounterAreaHomeOne style_3={true} />
      <BlogAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default AboutTwo;