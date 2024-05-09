'use client'
import React from 'react';
import swms from '../../../Assets/Project/swms.png'
import sss from "../../../Assets/Project/sss.png"
import ybm from '../../../Assets/Project/ybm.png';
import essay from '../../../Assets/Project/essay.png';
import aiwriting from "../../../Assets/Project/aiwriting.png";

import Link from 'next/link';
import Image from 'next/image';
import Edit from './EditModal/index';
import { useState } from 'react';

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>

      <Edit isVisible={showModal} close={() => setShowModal(false)} />
      <h1 className="heading pt-24">What I have done?</h1>






      <div class="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16  md:mt-24  pt-20">

        {/* Smart waste management system */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-6">
            <Link href="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/" className="m-2 "> <Image src={swms} alt="soe" className='rounded-[10px]' /></Link>
            <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">SWMS</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Smart Waste Management System</span>
            <div className="flex mt-4 md:mt-6">
              <Link href="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
            </div>
          </div>
        </div>
        {/* YBM ADMIN */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-6">
            <Link href="https://ybm-admin.vercel.app/dashboard" className="m-2"> <Image src={ybm} alt="soe" className='rounded-[10px]' /></Link>
            <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">YBM</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">YBM Admin Pannel</span>
            <div className="flex mt-4 md:mt-6">
              <Link href="https://ybm-admin.vercel.app/dashboard" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
            </div>
          </div>
        </div>
        {/* AI writing */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-6">
            <Link href="https://www.aiwriter.services/" className="m-2"> <Image src={aiwriting} alt="soe" className=' h-[175px] rounded-[10px]' /></Link>
            <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">AI Services</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">AI Writing Services</span>
            <div className="flex mt-4 md:mt-6">
              <Link href="https://www.aiwriter.services/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
            </div>
          </div>
        </div>

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
