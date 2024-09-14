
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FaqArea from './FaqArea';
import FooterOne from '@/layouts/footers/FooterOne';


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const Faq = () => {
  return (
    <>
      <Breadcrumb title="Faq" subtitle="Faq" />
      <FaqArea />
      <FooterOne />
    </>
  );
};

export default Faq;