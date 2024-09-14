
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import BlogArea from './BlogArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Blog = () => {
  return (
    <>
    <Breadcrumb title="Latest Blog" subtitle="Blog"  />
    <BlogArea />
    <FooterOne />      
    </>
  );
};

export default Blog;