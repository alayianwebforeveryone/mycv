"use client";
import { useState } from "react";
import GithubIcon from "../../../Assets/Icons/github-icon.svg";
import LinkedinIcon from "../../../Assets/Icons/linkedin-icon.svg";
import phone from "../../../Assets/Icons/phone.svg";
import Link from "next/link";
import Image from "next/image";
import contactFormValidation from "./schemas";
import sendContactForm from "../../app/api/lib/api";
import { useFormik } from "formik";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactFormValidation,
    onSubmit: async (values, actions) => {
      console.log(values);
      await sendContactForm(values);
      console.log("Form submitted successfully!");
      console.log(showSuccess);
      setShowSuccess(true); // Show success message
      setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
      actions.resetForm(); // Reset form fields
    },
  });

  const { touched, handleChange, values, handleSubmit, errors, handleBlur } =
    formik;

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-2 py-36 md:gap-8 xl:gap-4 lg:gap-24 relative md:px-8 lg:px-16 xl:px-48"
    >
      <div className="px-8 md:px-0">
        <h5 className="text-[36px] md:text-left text-[#304B69] text-left font-bold my-2">
          Get in Touch
        </h5>
        <p className="mb-4 max-w-md text-justify">
          I&apos;m passionate about crafting digital experiences that leave a
          lasting impact. Whether you&apos;re looking to bring your ideas to
          life, enhance your online presence, or optimize existing web
          solutions, I&apos;m here to help. Let us discuss how we can
          collaborate to turn your vision into a seamlessly functional and
          visually stunning website. Reach out, and let&apos;s embark on a
          journey to elevate your online presence together. I&apos;m currently
          looking for new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get
          back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/alayianwebforeveryone/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="ttps://www.linkedin.com/in/alayian-saeed-34287a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://wa.me/923488759075">
            <Image src={phone} className="h-12 w-14" alt="phone Icon" />
          </Link>
        </div>
      </div>

      <div className="mt-16 px-8 md:px-0 relative">
        <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            ) : null}
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              required
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
            {errors.subject && touched.subject ? (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            ) : null}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
            {errors.message && touched.message ? (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            ) : null}
          </div>

          <div className="relative ">
            <button
              type="submit"
              className="bg-[#00B1EC] hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {/* Success Popup */}
            {showSuccess && (
              <div className="absolute  top-12  bg-green-500 text-white p-4 rounded-lg shadow-lg">
                Form submitted successfully!
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
