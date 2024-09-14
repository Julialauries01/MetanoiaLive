
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ProjectDetailsArea from './ProjectDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const ProjectDetails = () => {
  return (
    <>
      <Breadcrumb title="Project Details" subtitle="Project Details" />
      <ProjectDetailsArea />
      <FooterOne />
    </>
  );
};

export default ProjectDetails;