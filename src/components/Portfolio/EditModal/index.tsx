"use clients"
import React from "react";
import { Fragment, useState } from "react";
import Image from "next/image";
import backarrowicon from '../../../../Assets/Icons/backarrow.svg'
import Link from 'next/link';
import swms from '../../../../Assets/Project/swms.png'
import sss from "../../../../Assets/Project/sss.png"
import ybm from '../../../../Assets/Project/ybm.png';
import essay from '../../../../Assets/Project/essay.png';


const Edit = ({ isVisible, close }: any) => {




    const handleClose = (e: any) => {
        if (e.target.id === "conatiner") close();
    }

    if (!isVisible) return null;

    return (



        <div
            id="conatiner"
            onClick={handleClose}
            className="  fixed inset-0  bg-black/25 flex justify-center items-center">

            <div className="  w-[90%] lg:w-[70%] overflow-y-scroll hideScrollbar max-h-[70%] py-4 bg-white rounded-xl px-5  ">
                {/* From */}

                {/* Top header */}
                <div className=" flex justify-between px-0 py-3  top-0  border-b-2">
                    <div className="flex gap-3 ">
                        <div className="mt-2">
                            <Image
                                src={backarrowicon}
                                alt="arrowicon"
                                onClick={close}
                                className=" cursor-pointer h-[11px] w-[11px]"
                            />
                        </div>
                        <div >
                            <div>
                                <p className="text-[20px] text-[#000000]  font-medium">
                                    All Projects
                                </p>
                            </div>
                            <div>
                                <p className="text-[14px] text-[#969BA0] font-normal py-1">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1 leading-none">
                        <button
                            type="button"
                            onClick={close}
                            className=" bg-[#D0DFF1] text-[#1A64BA] lg:text-[14px] px-3 rounded-lg text-[14px] font-semibold w-[83px] h-[45px]"
                        >
                            Cancel
                        </button>

                    </div>
                    
                </div>
           

            <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16 mt-24  pt-20">

                {/* AI writing */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-6">
                        <Link href="https://ybm-admin.vercel.app/dashboard" className="m-2"> <Image src={sss} alt="soe" className='rounded-[10px]' /></Link>
                        <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">SSS</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">S Software Solutions</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link href="https://ybm-admin.vercel.app/dashboard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
                        </div>
                    </div>
                </div>

             
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-6">
                        <Link href="https://ybm-admin.vercel.app/dashboard" className="m-2"> <Image src={ybm} alt="soe" className='rounded-[10px]' /></Link>
                        <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">YBM</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">YBM Admin Pannel</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link href="https://ybm-admin.vercel.app/dashboard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-6">
                        <Link href="https://ybm-admin.vercel.app/dashboard" className="m-2"> <Image src={ybm} alt="soe" className='rounded-[10px]' /></Link>
                        <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">YBM</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">YBM Admin Pannel</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link href="https://ybm-admin.vercel.app/dashboard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16 mt-24  pt-20">

                {/* Smart waste management system */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-6">
                        <Link href="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/" className="m-2 "> <Image src={swms} alt="soe" className='rounded-[10px]' /></Link>
                        <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">SWMS</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Smart Waste Management System</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link href="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
                        </div>
                    </div>
                </div>
                {/* YBM ADMIN */}

                
                {/* Essay */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-6">
                        <Link href="https://ybm-admin.vercel.app/dashboard" className="m-2"> <Image src={essay} alt="soe" className=' h-[175px] rounded-[10px]' /></Link>
                        <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">Essay</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Essay Writing Services</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link href="https://ybm-admin.vercel.app/dashboard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-6">
                        <Link href="https://ybm-admin.vercel.app/dashboard" className="m-2"> <Image src={essay} alt="soe" className=' h-[175px] rounded-[10px]' /></Link>
                        <h5 className="mb-1 mt-4 text-3xl font-medium text-gray-900 dark:text-white">Essay</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Essay Writing Services</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link href="https://ybm-admin.vercel.app/dashboard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Vist</Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        </div>









    );
};
export default Edit;