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
                    <h1 className="text-white text-2xl">Event Booking Website</h1>
                    <p className="w-full lg:w-1/2 lg:hidden h-1/3 text-sm 2xl:text-base text-white/60">
                        Éclat Rose is a party planning and reservation website
                        designed to provide an engaging booking experience for special events.
                        The site focuses on helping users easily explore services
                        and make reservations through a clear, user-friendly interface.
                        The website includes a reservation system
                        that allows users to book events through structured form submissions,
                        capturing essential event details efficiently.
                        Interactive GSAP animations are integrated throughout the site
                        to enhance user engagement, guide attention, and create smooth, dynamic transitions.
                    </p>
                    <Description />
                </div>
                <div className="w-full lg:w-1/2 h-full hidden lg:flex flex-col lg:flex-row gap-4">
                    <p className="w-full lg:w-1/2 h-1/3 mt-10 text-sm 2xl:text-base text-white/60">
                        Éclat Rose is a party planning and reservation website
                        designed to provide an engaging booking experience for special events.
                        The site focuses on helping users easily explore services
                        and make reservations through a clear, user-friendly interface.
                    </p>
                    <p className="w-full lg:w-1/2 h-1/3 mt-10 text-sm 2xl:text-base text-white/60">
                        The website includes a <span className="text-white">reservation system </span>
                        that allows users to book events through structured <span className="text-white">form submissions, </span>
                        capturing essential event details efficiently.
                        Interactive <span className="text-white">GSAP animations </span>are integrated throughout the site
                        to enhance user engagement, guide attention, and create smooth, dynamic transitions.
                    </p>
                </div>
            </div>
            <div className="w-full h-1/2 lg:h-3/4 flex flex-row gap-4" ref={boxRef}>
                <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 ">
                    <div
                        className="w-full h-2/3 rounded-lg bg-gray-400"
                        /*
                        style={{
                           backgroundImage: `url(${})`,
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                        */
                    ></div>
                    <div className="w-full h-1/3 flex flex-row gap-4">
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            /*
                            style={{
                               backgroundImage: `url(${})`,
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                            */
                        ></div>
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            /*
                            style={{
                               backgroundImage: `url(${})`,
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                            */
                        ></div>
                    </div>
                </div>
                <div className="hidden lg:flex w-full lg:w-1/2 h-full flex-col gap-4 ">
                    <div className="w-full h-1/3 flex flex-row gap-4">
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            /*
                            style={{
                               backgroundImage: `url(${})`,
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                            */
                        ></div>
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            /*
                            style={{
                               backgroundImage: `url(${})`,
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                            */
                        ></div>
                    </div>
                    <div
                        className="w-full h-2/3 rounded-lg bg-gray-400"
                        /*
                        style={{
                           backgroundImage: `url(${})`,
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                        */
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default EventBookingWebsite
