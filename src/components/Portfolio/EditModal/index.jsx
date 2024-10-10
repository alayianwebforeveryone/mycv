"use clients"
import React from "react";
import Image from "next/image";
import backarrowicon from '../../../../Assets/Icons/backarrow.svg'
import expensesTracker from '../../../../Assets/Project/expensetracker.png'
import Link from 'next/link';
import swms from '../../../../Assets/Project/swms.png'
import sss from "../../../../Assets/Project/sss.png"
import ybm from "../../../../Assets/Project/ybm.png"
import essay from '../../../../Assets/Project/essay.png';
import aiwriting from "../../../../Assets/Project/aiwriting.png";
import ProjectCard from "../ProjectCard";

const Edit = ({ isVisible, close }) => {




    const handleClose = (e) => {
        if (e.target.id === "conatiner") close();
    }

    if (!isVisible) return null;

    return (



        <div
            id="conatiner"
            onClick={handleClose}
            className="  fixed inset-0 z-50  bg-black/25 flex justify-center items-center">

            <div className="  w-[90%] lg:w-[70%] overflow-y-scroll hideScrollbar max-h-[70%] py-4 bg-white rounded-xl px-5   ">
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
                            {/* <div>
                                <p className="text-[14px] text-[#969BA0] font-normal py-1">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div> */}
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

                {/* row 1 */}
                <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16   pt-12">

                    {/* SSS */}

                    <ProjectCard
                        title="3S"
                        description="S Software Solution"
                        src={sss}
                        linkText="https://alayianwebforeveryone.github.io/portfolio/"

                    />

                    {/* AI Writing */}
                    <ProjectCard
                        title="AI Services"
                        description="AI Writing Services"
                        linkText="https://www.aiwriter.services/"
                        alt='ybm'
                        src={aiwriting}
                    />

                    {/* Essay Writing Services */}



                    <ProjectCard
                        title="Essay"
                        description="Essay Writing Services"
                        src={essay}
                        linkText="https://essay-writing-services-7yaf.vercel.app/"

                    />




                </div>

                {/* row 2 */}
                <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16 mt-8  pt-8">

                    {/* Smart waste management system */}
                    <ProjectCard
                        title="SWMS"
                        description="Smart Waste Management System"
                        linkText="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/"
                        alt='swms'
                        src={swms} />



                    {/* expense tracker */}

                    <ProjectCard
                        title="Expense Tracker"
                        description="Track your daily expenses"
                        linkText="https://track-expenses-three.vercel.app/"
                        alt='expense'
                        src={expensesTracker}
                    />
                    {/* YBM ADMIN */}

                    <ProjectCard
                        title="YBM"
                        description="Your Buisness Matter"
                        linkText="https://ybm.vercel.app/"
                        alt='ybm'
                        src={ybm} />


                </div>


            </div>
        </div>









    );
};
export default Edit;