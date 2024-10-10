'use client'
import React from 'react';
import swms from '../../../Assets/Project/swms.png'
import ybm from '../../../Assets/Project/ybm.png';
import aiwriting from "../../../Assets/Project/aiwriting.png";

import Link from 'next/link';
import Edit from './EditModal/index';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>

      <Edit isVisible={showModal} close={() => setShowModal(false)} />
      <h1 className="heading pt-24">What I have done?</h1>






      <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16  md:mt-24  pt-20">

        {/* Smart waste management system */}

        <ProjectCard
          title="SWMS"
          description="Smart Waste Management System"
          linkText="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/"
          alt='swms'
          src={swms} />


        {/* YBM */}
        <ProjectCard
          title="YBM"
          description="Your Buisness Matter"
          linkText="https://ybm.vercel.app/"
          alt='ybm'
          src={ybm} />


        {/* YBM ADMIN */}
        <ProjectCard
          title="AI Services"
          description="AI Writing Services"
          linkText="https://www.aiwriter.services/"
          alt='ybm'
          src={aiwriting}
        />






      </div>

      <div
        onClick={() => setShowModal(true)}
        className="flex justify-center mt-4 md:mt-6">
        <Link href="" class="inline-flex items-center px-6 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See all</Link>
      </div>


    </>
  );
}

export default Portfolio
