import React from 'react';
import TeamArea from './TeamArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';


const Team = () => {
  return (
    <>
      <Breadcrumb title="Our Team" subtitle="Team" />
      <TeamArea />
      <FooterOne />
    </>
  );
};

export default Team;