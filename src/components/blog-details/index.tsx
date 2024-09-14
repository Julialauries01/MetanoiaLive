

import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import BlogDetailsArea from './BlogDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <FooterOne />
    </>
  );
};

export default BlogDetails;