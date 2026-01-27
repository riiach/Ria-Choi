import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import gsap from 'gsap'
import { useRef, useEffect} from 'react'

const EventBookingWebsite = () => {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(boxRef.current.children, {
               x: -50,
               opacity: 0,
               duration: 1,
               filter: "blur(10px)",
               stagger: 0.1,
               ease: "sine.out",
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col p-8 md:p-10 bg-black" ref={sectionRef}>
            <NavbarSide />
            <div className="w-full h-1/2 lg:h-1/4 flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-between">
                    <h1 className="text-white text-2xl">Travel Recommendation</h1>
                    <p className="w-full lg:w-1/2 lg:hidden h-1/3 text-sm 2xl:text-base text-white/60">
                        Travel Today is a <span className="text-white">full-stack booking and search web application</span> built with pure HTML, CSS, and Vanilla JavaScript, designed to demonstrate strong JavaScript fundamentals without relying on modern frontend frameworks.
                        This project focuses on building <span className="text-white">real-world UI logic from scratch</span>.
                        On the backend, a <span className="text-white">Node.js and Express API</span> handles form submissions and communicates with a <span className="text-white">MySQL database</span> hosted on Hostinger, allowing contact data to be stored persistently.
                    </p>
                    <Description />
                </div>
                <div className="w-full lg:w-1/2 h-full hidden lg:flex flex-col lg:flex-row gap-4">
                    <p className="w-full lg:w-1/2 h-1/3 mt-10 text-sm 2xl:text-base text-white/60">
                        Travel Today is a <span className="text-white">full-stack booking and search web application</span> built with pure HTML, CSS, and Vanilla JavaScript, designed to demonstrate strong JavaScript fundamentals without relying on modern frontend frameworks.
                        This project focuses on building <span className="text-white">real-world UI logic from scratch</span>, instead of abstracting logic away with libraries.
                    </p>
                    <p className="w-full lg:w-1/2 h-1/3 mt-10 text-sm 2xl:text-base text-white/60">
                        On the backend, a <span className="text-white">Node.js and Express API</span> handles form submissions and communicates with a <span className="text-white">MySQL database</span> hosted on Hostinger, allowing contact data to be stored persistently.
                        Travel Today reflects my ability to design and implement <span className="text-white">end-to-end application flows</span>, balancing frontend interactivity with backend data handling in a clean and structured way.
                    </p>
                </div>
            </div>
            <div className="w-full h-1/2 lg:h-3/4 flex flex-row gap-4" ref={boxRef}>
                <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 ">
                    <div
                        className="w-full h-2/3 rounded-lg bg-gray-400"
                        style={{
                           backgroundImage: 'url("https://i.ibb.co/C3bRwDNT/travel-Today1.png")',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="w-full h-1/3 flex flex-row gap-4">
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/xSswDWsD/travel-Today2.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/gbB7pD0K/travel-Today3.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                </div>
                <div className="hidden lg:flex w-full lg:w-1/2 h-full flex-col gap-4 ">
                    <div className="w-full h-1/3 flex flex-row gap-4">
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/FLb6GG6s/travel-Today4.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/gbPTcpQ6/travel-Today5.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                    <div
                        className="w-full h-2/3 rounded-lg bg-gray-400"
                        style={{
                           backgroundImage: 'url("https://i.ibb.co/QvtmqRrc/travel-Today6.png")',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default EventBookingWebsite
