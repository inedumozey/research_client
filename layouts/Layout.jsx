import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTasks } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../components/utils/Logo";
import data from "./data";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, GrabCursor} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const links = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about-us",
    name: "About Us",
  },
  {
    link: "/contact-us",
    name: "Contact Us",
  },
];

export default function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();

  const handleShowSideBar = () => setShowSideBar(!showSideBar);

  return (
    <div className="relative">

      {/* header */}
      <div className="h-[65vh] relative">

        {/* herro */}
        <div className="h-full w-full absolute top-0">
          <Hero data={data} />
        </div>

        {/* header nav */}
        <div className="flex justify-between wrapper items-center transition duration-300 absolute w-full top-[20px] z-[1000]">
          <Toggle handleShowSideBar={handleShowSideBar} />

          <div>
            <Logo />
          </div>

          <div className="md:block hidden rounded-md h-[35px] leading-[35px] bg-color-pri1 overflow-hidden">
            <NavLink />
          </div>

          <Link
            href="/potfolio"
            className={`uppercase rounded-md h-[35px] leading-[35px] px-3 bg-[#551616] flex items-center hover:opacity-pale transition duration-300 gap-2 ${router.asPath == "/potfolio" ? "" : "animate-bounce"
              }`}
          >
            <FaTasks
              className={`text-[1.6rem] text-[#fff] ${router.asPath == "/potfolio" ? "text-color-white" : ""
                }`}
            />
            <span
              className={`font-medium text-[#fff] ${router.asPath == "/potfolio" ? "text-color-white" : ""
                }`}
            >
              Potfolio
            </span>
          </Link>
        </div>
      </div>

      {/* side bar */}
      <SideBar
        showSideBar={showSideBar}
        handleShowSideBar={handleShowSideBar}
        setShowSideBar={setShowSideBar}
      />

      {/* body */}
      <div className="min-h-[calc(100vh-65vh-50px)]">{children}</div>

      {/* footer`` */}
      <div className="min-h-[50px] text-[.8rem] text-center p-5">
        &copy; Drophyte 2023 All Right Reserved
      </div>
    </div>
  );
}

function NavLink({ mode = "head" }) {
  const router = useRouter();

  return links?.map((link, i) => {
    if (mode == "side") {
      return (
        <Link
          key={i}
          href={link.link}
          className={`px-2 ${router.asPath == link.link ? "bg-color-pri1 text-color-white" : ""
            } transition duration-300 leading-[35px] block ${router.asPath == link.link ? "" : "hover:bg-color-skyblue"
            } font-medium wrapper uppercase`}
        >
          {link.name}
        </Link>
      );
    } else {
      return (
        <Link
          key={i}
          href={link.link}
          className={`px-3 ${router.asPath == link.link ? "bg-color-pri1 text-color-white" : ""
            } transition duration-300 leading-[35px] inline-block ${router.asPath == link.link ? "" : "hover:text-color-skyblue"
            } font-medium uppercase`}
        >
          {link.name}
        </Link>
      );
    }
  });
}

function Toggle({ handleShowSideBar }) {
  return (
    <div onClick={handleShowSideBar} className="md:hidden block cursor-pointer">
      <GiHamburgerMenu className="text-[1.5rem] text-color-pri1" />
    </div>
  );
}

function SideBar({ showSideBar, handleShowSideBar, setShowSideBar }) {
  return (
    <>
      {/* overlay */}
      <div
        onClick={() => setShowSideBar(false)}
        className={`
                    z-[2000]
                    fixed
                    top-0
                    transition
                    duration-300
                    bottom-0
                    left-0
                    right-0
                    bg-[rgba(0,0,0,.6)]
                    md:hidden
                    ${showSideBar ? "block" : "hidden"}
                `}
      ></div>

      {/* side bar */}
      <div
        className={`z-[2002] fixed top-0 bottom-0 left-0 w-[40vw] bg-color-white shadow-2xl transition duration-300 ${showSideBar ? "-translate-x-[0%]" : "-translate-x-[105%]"
          } md:hidden`}
      >
        {/* menu items */}
        <div className="h-[50px] flex justify-between items-center wrapper">
          <Logo />
          <Toggle handleShowSideBar={handleShowSideBar} />
        </div>

        <div>
          <NavLink mode="side" />
        </div>
      </div>
    </>
  );
}

function Hero({ data }) {
  const [start, setStart] = useState(true);
  const [begins, setBegins] = useState(false);
  const [swiping, setSwiping] = useState(false);

  return (
    <Swiper
      className="h-full w-full"
      loop
      autoplay={{ delay: 6000, pauseOnMouseEnter:true }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      grabCursor
      onSlideChange={() => {setStart(false); setSwiping(false)}}
      onSlideChangeTransitionEnd={() => {setStart(true); setSwiping(false); setBegins(false)}}
      onSlideChangeTransitionStart={() => {setBegins(true); setSwiping(false)}}
      onSetTranslate={()=>{setSwiping(true); console.log("swiping")}}
    >
      {
        data?.map((item, i) => {
          return (
            
            <SwiperSlide key={i} className={`h-full w-full transition duration-[2s] group`}>
              <div className="h-full w-full absolute top-0 bg-[rgba(0,0,0,.6)] z-[10]"></div>
              <div className="overflow-hidden h-[100%] w-[100%]">
              <img
                src={item.image}
                alt=""
                className={`h-[100%] object-cover w-[100%] ${start ? 'animate-scale-up' : 'animate-scale-down'} group-hover:animate-none`}
              />
              </div>
              <h1 className={`z-[11] ${swiping || begins ? 'opacity-0' : 'opacity-[1]'} absolute top-[50%] left-[50%] text-[1rem] scale-[1] -translate-x-[50%] -translate-y-[50%] text-[#fff] ${start ? 'animate-fade-in' : 'animate-out'} p-[15px] bg-[rgba(0,0,0,.3)] text-center w-[80vw] md:w-auto`}>
                {item.text}
              </h1>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}