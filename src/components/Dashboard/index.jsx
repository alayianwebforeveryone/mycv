"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import professional from "../../../Assets/Images/practice.png";


const Home = () => {
  return (
    <section >
      <div className="lg:pt-44 px-2 py-12 md:py-36 mt-12 md:mt-0  lg:px-16 bg-[#c8dce6] w-[100%] ">
        <div className="grid grid-cols-1   sm:grid-cols-12 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className=" text-[#304B69] mb-4 text-3xl   lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-[#4a3692]  ">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Alayian Saeed",
                  1000,
                  "Software Engineer",
                  1000,
                  "Frontend Developer",
                  1000,

                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#1d1e1e]  text-base sm:text-lg  mb-6 lg:text-xl">
              <span className="text-[#4a3692] lg:text-2xl text-md    underline font-bold">INNOVATE, CREATE, CAPTIVATE  </span>

              Journey into web development
              with <span className="text-[#4a3692]  sm:text-md underline font-bold uppercase">Alayian Saeed.</span>
            </p>
            <div className="  ">
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#4b7ba8] text-white mt-3"
              >
                <span className="block bg-[#00ABE4] mx-20   md:mx-0  rounded-full px-8 py-2">
                  Open CV
                </span>
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#4b7ba8] text-white mt-3"
              >
                <span className="block bg-[#00ABE4] mx-20 md:mx-0  rounded-full px-8 py-2">
                  Hire me
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className=" xl:mt-16 sm:h-52 sm:w-52  bg-white relative xl:h-[450px] xl:w-[450px] h-[300px] w-[300px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px]  rounded-full">
              <Image
                src={professional}
                alt="hero image"
                className="sm:h-44 sm:w-44 absolute xl:top-8 top-2 xl:left-16 left-6 object-fill h-64 w-64 lg:h-64 md:h-40 md:w-40 lg:w-64 xl:h-[350px] xl:w-[350px]"

              />

            </div>

          </motion.div>
        </div>

      </div>

        <div className="py-8 px-4  mx-auto  bg-[#c8dce6]  border-t-2    mt-24   font-bold sm:py-16 xl:px-16 w-full">
          <h2 className="text-4xl  text-center    text-[#304B69]">Ready to Boost your Business ?</h2>
          <p className="mt-8  mx-4  text-lg  font-medium text-justify lg:w-"> Cultivating Innovation, 
          Building Excellence. Welcome to a digital realm where creativity meets functionality. We donot 
          just create websites; we craft digital experiences that resonate. Elevate your online
           presence with us – where every click tells a story, and every pixel paints a masterpiece. 
           In a rapidly evolving digital landscape, the key to success lies in staying ahead.
            Our tailored solutions are designed to propel your business to new heights, leveraging
            cutting-edge strategies and innovative technologies. Whether you're aiming to enhance your
            online presence, optimize operations, or reach a broader audience, we're here to navigate the
            digital realm with you.</p>
        </div>
    </section>
  );
};

export default Home;
