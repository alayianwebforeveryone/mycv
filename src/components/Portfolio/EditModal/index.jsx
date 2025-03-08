"use clients";
import React from "react";
import Image from "next/image";
import backarrowicon from "../../../../Assets/Icons/backarrow.svg";
import festifyCo from "../../../../Assets/Project/festify co.png";
import swms from "../../../../Assets/Project/swms.png";
import techClan from "../../../../Assets/Project/tech-clan.png";
import ybm from "../../../../Assets/Project/ybm.png";
import essay from "../../../../Assets/Project/essay.png";
import aiwriting from "../../../../Assets/Project/aiwriting.png";
import ProjectCard from "../ProjectCard";

const Edit = ({ isVisible, close }) => {
  const projectShort = [
    {
      title: "SWMS",
      description: "Smart Waste Management System",
      linkText:
        "https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/",
      src: swms,
      isVideo: false,
    },
    {
      title: "Your Buisness Matter",
      description: "Your Buisness Matter",
      linkText: "https://ybm.vercel.app/",
      src: ybm,
      isVideo: false,
    },
    {
      title: "I tech Inventory System",
      description: "AI Writing Services",
      linkText: "https://itechpk-inventory.vercel.app/",
      src: "/inventory.mp4",
      isVideo: true,
    },

    {
      title: "Essay",
      description: "Essay Writing Services",
      linkText:"https://essay-writing-services-7yaf.vercel.app/",
        
      src: essay,
      isVideo: false,
    },
    {
      title: "The Tech Clan",
      description: "A portfolio site of a IT Complany",
      linkText: "https://www.thetechclan.org/",
      src: techClan,
      isVideo: false,
    },
    {
      title: "Festify Co",
      description: "Event Management System",
      linkText: "https://festifyco.vercel.app/",
      src: festifyCo,
      isVideo: false,
    },
  ];

  const handleClose = (e) => {
    if (e.target.id === "conatiner") close();
  };

  if (!isVisible) return null;

  return (
    <div
      id="conatiner"
      onClick={handleClose}
      className="  fixed inset-0 z-50  bg-black/25 flex justify-center items-center"
    >
      <div className="  w-[90%] lg:w-[80%] overflow-y-scroll hideScrollbar max-h-[85%] py-4 bg-white rounded-xl px-5    ">

        {/* Top header */}
        <div className=" flex justify-between px-0 py-3 sticky z-50 bg-white  top-0  border-b-2">
          <div className="flex gap-3 ">
            <div className="mt-2">
              <Image
                src={backarrowicon}
                alt="arrowicon"
                onClick={close}
                className=" cursor-pointer h-[11px] w-[11px]"
              />
            </div>
            <div>
              <div>
                <p className="text-[20px] text-[#000000]  font-medium">
                  All Projects
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

        <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16 flex-wrap   pt-12">
          {projectShort.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                linkText={project.linkText}
                src={project.src}
                isVideo={project.isVideo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Edit;
