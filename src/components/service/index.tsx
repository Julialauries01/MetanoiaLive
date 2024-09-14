

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceArea from './ServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Service = () => {
  return (
    <>
      <Breadcrumb title="Service" subtitle="Service" />
      <ServiceArea />
      <FooterOne />
    </>
  );
};

export default Service;