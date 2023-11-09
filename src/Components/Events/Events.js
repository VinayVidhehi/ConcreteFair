import React from "react";
import con1 from "../images/con1.png";
import con2 from "../images/con2.png";
import con3 from "../images/con3.png";
import con4 from "../images/con4.png";
import con5 from "../images/con5.png";
import con6 from "../images/con6.png";
import con7 from "../images/con7.png";
import con8 from "../images/con8.png";
import con9 from "../images/con9.png";
import con10 from "../images/con10.png";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="main-event-container">
    
      <section id="event" className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col items-center">
          <div className="flex flex-wrap w-full mb-6">
            <div className=" w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center tracking-wide">
                EVENTS
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 justify-start">
            <div className="xl:w-1/3 md:w-1/2 p-5">
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
                  tagline comes here..
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

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/flix'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con4}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  07 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.FLIX
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
                  Each team is assigned with a particular theme and .....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/figure'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con5}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.FIGURE
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
                  Game of numbers and units .....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/test'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con6}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.TEST
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
                  Preparation of a flowable mix of given specifications within
                 .....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/fine'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con7}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.FINE
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
                  IS456 Challenge page no round + quiz .....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/voke'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con8}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.VOKE
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
                  Treasure hunt, with people at each check point, giving
                  participants .....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/x'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con9}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.X
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
                  Clues: Figuring out points of specified RL based on marked
                  BMs. Bearing of points may be given. Each clue also gives....
                </p>
              </div>
            </Link></div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={'/events/strain'}><div className="bg-gray-100 p-3 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={con10}
                  alt="content"
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  01 Nov
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between">
                  CON.STRAIN
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
                  JAM round followed by ....
                </p>
              </div>
            </Link></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
