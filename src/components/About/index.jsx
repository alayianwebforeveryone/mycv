"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import About from "./../../../Assets/Images/About.png"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS (Tailwind , Bootsrtap)</li>
        <li>JavaScript</li>
        <li>React js</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering</li>
        <p className="text-sm"> From Mirpur University of Science and Technology</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to HTML5 (Coursera)</li>
        <li>Introduction to CSS3 (Coursera)</li>
        <li>Interactivity with JavaScript (Coursera)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    if (id !== tab) {
      startTransition(() => {
        setTab(id);
      });
    }
  };

  return (
    <section className=" w-full my-20 " id="about">
      <div className="py-8 px-12 flex-col  mb-56   md:flex-row    gap-4  flex md:gap-48 justify-between">
        <div className="rounded-t-full md:w-[25%] mt-16 md:mt-0 w-[80%]  mx-auto   ">
        <Image src={About} alt="profile"  className="rounded-t-full  object-contain"/>
        </div>
        <div className="mt-8 md:w-[50%] md:mt-0 text-left flex flex-col h-full">
          <h2 className=" font-bold  text-2xl md:text-4xl  text-center    text-[#304B69]  mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
          As a passionate software engineer currently immersed in the dynamic field of web development, 
          I thrive on transforming ideas into functional and visually appealing digital solutions. With a 
          keen eye for detail and a commitment to staying at the forefront of technology, I bring a wealth 
          of expertise to every project. My journey in the world of coding has equipped me with a diverse skill
           set, allowing me to navigate the complexities of web development seamlessly.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
