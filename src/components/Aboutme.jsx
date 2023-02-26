import Link from "next/link";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaGraduationCap,
  FaPhone,
} from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Aboutme = () => {
  return (
    <>
      <div id="about me" className="w-full ">
        <div className="max-w-screen-xl mx-auto px-8 py-16  md:text-start">
          <h2 className="text-3xl ms:text-7xl tracking-wider p-10 uppercase text-indigo-900 font-bold">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-black bg-white mt-4">
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
              <h2 className="text-indigo-900 uppercase py-5 font-extrabold lg:pt-10 lg:pb-2 md:m-10 text-xl">
                hello folks!
              </h2>
              <span className="text-xl text-indigo-900 uppercase font-semibold lg:pt-10 lg:pb-10 md:m-10">
                I'm Clementsijo, Frontend developer
              </span>
              <p className="md:m-10 text-md">
                with extensive knowledge and a self-taught developer delivering
                quality works using web technologies like React Js, Next JS,
                Tailwind CSS, Bootstrap etc. who loves to work for an
                organization which provides me the opportunity to improve my
                skills and knowledge.I combine my web development skills to
                produce and design creative and effective web applications. I
                enjoy turning complex problems into simple, beautiful and
                intuitive solutions
              </p>
              <div className="flex items-center justify-center gap-10">
                <Link href="/resume.pdf" download="{true}">
                  <div className="group flex items-center justify-center my-8 bg-indigo-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
                    Resume
                    <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                      <MdExpandMore size={25} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
              <div className="p-4 text-left">
                <div className="grid md:grid-col gap-4 w-full  py-2">
                  <div className="flex flex-col lg:gap-0 cursor-pointer ">
                    <div
                      className=" items-center justify-between bg-indigo-900 text-white p-6 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-10 lg:gap-0 rounded-t-xl"
                    >
                      <FaBirthdayCake />
                      <p>22</p>
                    </div>
                    <div
                      className=" items-center justify-between bg-indigo-900 text-white p-6 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-10 lg:gap-0"
                    >
                      <FaGraduationCap size={20} />
                      <p> Bachelor of Computer Application</p>
                    </div>
                    <div
                      className=" items-center justify-between bg-indigo-900 text-white p-6 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-10 lg:gap-0"
                    >
                      <FaPhone />
                      <p> 6362529465</p>
                    </div>
                    <div
                      className=" items-center justify-between bg-indigo-900 text-white p-6 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-10 lg:gap-0"
                    >
                      <FaEnvelope />
                      <p>clementsijo@gmail.com</p>
                    </div>
                    <div
                      className="items-center justify-between bg-indigo-900 text-white p-6 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-10 lg:gap-0  rounded-b-xl"
                    >
                      <MdLocationOn className="text-white" size={20} />
                      <p>Bangalore - Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
