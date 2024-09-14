
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutArea from './AboutArea';
import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutArea />
      <FooterOne />
    </>
  );
};

export default About;