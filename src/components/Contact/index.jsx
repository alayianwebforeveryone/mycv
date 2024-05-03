"use client";
import React, { useState } from "react";
import GithubIcon from "../../../Assets/Icons/github-icon.svg"
import LinkedinIcon from "../../../Assets/Icons/linkedin-icon.svg";
import phone from "../../../Assets/Icons/phone.svg"
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid  md:grid-cols-2 my-12 md:my-2 py-36 md:gap-8   xl:gap-4  lg:gap-24 relative md:px-8 lg:px-16 xl:px-24"
    >
      <div className="  z-10 px-8 md:px-0">
        <h5 className="text-[36px] md:text-left  text-[#304B69] text-left font-bold  my-2">
          Get in Touch
        </h5>
        <p className=" mb-4 max-w-md text-justify">
          
          I&apos;m passionate about crafting digital experiences that leave a lasting impact. 
          Whether you&apos;re looking to bring your ideas to life, enhance your online presence, 
          or optimize existing web solutions, I&apos;m here to help. Let us discuss how we can collaborate 
          to turn your vision into a seamlessly functional and visually stunning website. Reach out, 
          and let&apos;s embark on a journey to elevate your online presence together.
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com" className="">
            <Image src={phone} className = "h-12 w-14" alt="phone Icon" />
          </Link>
        </div>
      </div>
      <div className = "mt-16 px-8 md:px-0">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className=" block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className=" block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#00B1EC] hover:bg-primary-600 text-white  font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
