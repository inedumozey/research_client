import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaTasks } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../components/utils/Logo';
import data from './dara';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




const links = [
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '/about-us',
        name: 'About Us'
    },
    {
        link: '/contact-us',
        name: 'Contact Us'
    }
]


export default function Layout({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);
    const router = useRouter()


    const handleShowSideBar = () => setShowSideBar(!showSideBar)

    return (
        <div className='relative'>
            {/* banner */}
            {/* <div className='-z-1 bg-red-500 absolute top-0 right-0 left-0 h-[30vh] '>
                banner
            </div> */}


            {/* header */}
            <div className='h-[60vh] relative'>
                {/* herro */}
                <div className='h-full w-full absolute top-0'>
                    <Hero data={data} />
                </div>

                {/* herro overlay */}
                <div className='h-full w-full absolute top-0 bg-[rgba(0,0,0,.8)]'></div>

                {/* header nav */}
                <div className='flex justify-between wrapper items-center transition duration-300 absolute w-full top-[20px]'>

                    <Toggle handleShowSideBar={handleShowSideBar} />

                    <div>
                        <Logo />
                    </div>

                    <div className='md:block hidden rounded-md h-[35px] leading-[35px] bg-color-pri1 overflow-hidden'>
                        <NavLink />
                    </div>

                    <Link href='/potfolio' className={`uppercase rounded-md h-[35px] leading-[35px] px-3 bg-[red] flex items-center hover:opacity-pale transition duration-300 gap-2 ${router.asPath == '/potfolio' ? "" : 'animate-bounce'}`}>
                        <FaTasks className={`text-[1.6rem] text-[#fff] ${router.asPath == '/potfolio' ? "text-color-white" : ''}`} />
                        <span className={`font-medium text-[#fff] ${router.asPath == '/potfolio' ? "text-color-white" : ''}`}>Potfolio</span>
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
            <div className='min-h-[calc(100vh-60vh-50px)]'>{children}</div>

            {/* footer`` */}
            <div className='min-h-[50px] text-[.8rem] text-center p-5'>
                &copy; Drophyte 2023 All Right Reserved
            </div>
        </div>
    )
}


function NavLink({ mode = "head" }) {
    const router = useRouter()

    return links?.map((link, i) => {
        if (mode == 'side') {
            return (
                <Link key={i} href={link.link} className={`px-2 ${router.asPath == link.link ? "bg-color-pri1 text-color-white" : ''} transition duration-300 leading-[35px] block ${router.asPath == link.link ? "" : 'hover:bg-color-skyblue'} font-medium wrapper uppercase`}>
                    {link.name}
                </Link>
            )
        }
        else {
            return (
                <Link key={i} href={link.link} className={`px-3 ${router.asPath == link.link ? "bg-color-pri1 text-color-white" : ''} transition duration-300 leading-[35px] inline-block ${router.asPath == link.link ? "" : 'hover:text-color-skyblue'} font-medium uppercase`}>
                    {link.name}
                </Link>
            )
        }
    })
}

function Toggle({ handleShowSideBar }) {
    return (
        <div onClick={handleShowSideBar} className='md:hidden block cursor-pointer'>
            <GiHamburgerMenu className='text-[1.5rem] text-color-pri1' />
        </div>
    )
}

function SideBar({ showSideBar, handleShowSideBar, setShowSideBar }) {

    return (
        <>
            {/* overlay */}
            <div
                onClick={() => setShowSideBar(false)}
                className={`
                    z-100
                    fixed
                    top-0
                    transition
                    duration-300
                    bottom-0
                    left-0
                    right-0
                    bg-[rgba(0,0,0,.6)]
                    md:hidden
                    ${showSideBar ? 'block' : 'hidden'}
                `}
            ></div>

            {/* side bar */}
            <div className={`z-1000 fixed top-0 bottom-0 left-0 w-[40vw] bg-color-white shadow-2xl transition duration-300 ${showSideBar ? "-translate-x-[0%]" : "-translate-x-[100%]"} md:hidden`}>

                {/* menu items */}
                <div className='h-[50px] flex justify-between items-center wrapper'>
                    <Logo />
                    <Toggle handleShowSideBar={handleShowSideBar} />
                </div>



                <div>
                    <NavLink mode="side" />
                </div>

            </div>
        </>
    )
}

function Hero({ data }) {

    return (
        <div className='h-full w-full'>
            {
                data?.map((item, i) => {
                    return (
                        <Swiper
                            className='h-full w-full'
                            key={i}
                            // spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <img src={item.image} alt="" className='h-full object-cover w-full' />
                                <h1 className='absolute top-[50%] z-[100] left-[50%] -translate-x-[50%]  -translate-y-[50%] text-[#fff]'>{item.caption}</h1>
                            </SwiperSlide>
                        </Swiper>
                    )
                })
            }

        </div>
    )
}