import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import con1 from "../images/con1.png"
import con2 from "../images/con2.png"
import con3 from "../images/con3.png"
import con4 from "../images/con4.png"

const Home = () => {
  return (
    <div className="main-home-container">

      <section className="text-gray-600 body-font">
        <div className="bg"></div>
        <div className="container px-5 py-10 mx-auto flex flex-col flex-wrap items-center h-101 justify-center sm:mt-10">
          <h1 className="text-6xl text-gray-900 font-bold title-font  mt-14 mb-10 lg:mt-0 w-2/5 text-center flex flex-col items-center">
            ADVAYA
            <br />
            <span id="main" className="lg:text-5xl text-3xl font-semibold md:mt-5">
              Season 11
            </span>
          </h1>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-lg text-center">
              Join us for an exciting event showcasing the latest in concrete
              technology.
            </p>
            <div className="flex md:mt-8 mt-8 justify-center">
              
              <a
                href="#events"
                className="text-red-500 inline-flex items-center ml-4 text-md"
              >
                Know More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mt-14">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="mile sm:text-3xl text-2xl font-semibold title-font text-gray-900 tracking-wide">
              MILESTONES
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  75+
                </h2>
                <p className="leading-relaxed text-red-500 font-medium">
                  Companies
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  300+
                </h2>
                <p className="leading-relaxed text-red-500 font-medium">
                  Colleges
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  10
                </h2>
                <p className="leading-relaxed text-red-500 font-medium">
                  Successfull conducts
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  100k
                </h2>
                <p className="leading-relaxed text-red-500 font-medium">
                  Worth prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col items-center">
          <div className="flex flex-wrap w-full mb-6">
            <div className=" w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center tracking-wide">
                EVENTS
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
          <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/sortium'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con1}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.SORTIUM 
                  <a
                    href="/events/sortium"
                    className="text-red-500 inline-flex items-center text-sm"
                  >
                    Register
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </h2>
                <p className="leading-relaxed text-base">
                  Each team is given a product on the spot and given a prep time
                  of .....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/dwg'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con2}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  03 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.DWG
                  <a
                    href=""
                    className="text-red-500 inline-flex items-center text-sm"
                  >
                    Register
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </h2>
                <p className="leading-relaxed text-base">
                  Each team is given a crossword puzzle to be solved and ....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/quest'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con3}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  07 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.QUEST
                  <a
                    href=""
                    className="text-red-500 inline-flex items-center text-sm"
                  >
                    Register
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </h2>
                <p className="leading-relaxed text-base">
                  A technical quiz comprising of questions from .....
                </p>
              </div>
            </Link></div>
          </div>
          <a
            href="events"
            className="text-zinc-900 inline-flex items-center mt-6 text-xl"
          >
            More Events
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </section>

      <section id="sponsors" className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              SPONSORS
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center text-center">
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-stripe text-6xl text-zinc-900"></i>
              </div>
            </div>
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-node text-6xl text-zinc-900"></i>
              </div>
            </div>
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-wix text-6xl text-zinc-900"></i>
              </div>
            </div>
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-wodu text-6xl text-zinc-900"></i>
              </div>
            </div>
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-vnv text-6xl text-zinc-900"></i>
              </div>
            </div>
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-google-pay text-6xl text-zinc-900"></i>
              </div>
            </div>
            <div className="p-1 md:w-1/5 sm:w-1/2 w-2/4">
              <div className="px-4 py-6 rounded-lg">
                <i className="fa-brands fa-aws text-6xl text-zinc-900"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto flex flex-col items-center">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-center w-full">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full border-2 mx-2 my-2">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Vinay Kumar
                </h2>
                <p className="leading-relaxed text-red-500">+91 1234567890</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full border-2 mx-2 my-2">
              <div className="px-4 py-6 rounded-lg">
                <img
                  alt="team"
                  className="text-indigo-500 w-24 h-24 mb-2 inline-block rounded-full object-top object-cover"
                  src="img/img (2).JPG"
                />
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Aditya
                </h2>
                <p className="leading-relaxed text-red-500">+91 1234567890</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full border-2 mx-2 my-2">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Atharv
                </h2>
                <p className="leading-relaxed text-red-500">+91 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
/*<button className="inline-flex text-white bg-zinc-900 border-white py-2 px-5 focus:outline-none hover:bg-transparent hover:text-black border hover:border-gray-600 transition rounded tracking-wider mx-4 text-sm">
<a href="register.html">Register</a>
</button>*/