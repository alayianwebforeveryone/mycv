"use client";
import React from "react";
import swms from "../../../Assets/Project/swms.png";
import ybm from "../../../Assets/Project/ybm.png";

import Link from "next/link";
import Edit from "./EditModal/index";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);

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
  ];

  return (
    <>
      <Edit isVisible={showModal} close={() => setShowModal(false)} />
      <h1 className="heading pt-24">What I have done?</h1>

      <div className="flex flex-col md:flex-row px-8 md:px-4 justify-center gap-16  md:mt-24  pt-20">
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

      <div
        onClick={() => setShowModal(true)}
        className="flex justify-center mt-4 md:mt-6"
      >
        <Link
          href=""
          class="inline-flex items-center px-6 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See all
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
