

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import BlogDetailsArea from './BlogDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Complete sua Inscrição" subtitle="Complete sua Inscrição" />
      <BlogDetailsArea />
      <FooterOne />
    </>
  );
};

export default BlogDetails;