"use clients"
import React from "react";
import { Fragment, useState } from "react";
import Image from "next/image";
import backarrowicon from '../../../Assets/Icons/backarrow.svg'
import Link from 'next/link';
import resume from "../../../Assets/Images/resume.png"


const Edit = ({ isVisible, close }) => {

 


    const handleClose = (e) => {
        if (e.target.id === "conatiner") close();
    }

    if (!isVisible) return null;

    return (



        <div
            id="conatiner"
            onClick={handleClose}
            className="fixed inset-0  z-50  bg-black/25 flex  justify-center items-center">

            <div className="  w-[90%] lg:w-[50%] overflow-y-scroll hideScrollbar max-h-[70%] py-4 bg-white rounded-xl px-5  z-10 ">
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
                        {/* <div >
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
                        </div> */}
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

            <div>
                <Image src={resume} className="w-[100%]" alt = "Resume" />
            </div>


            </div>

        </div>









    );
};
export default Edit;