import React from 'react'
import Navbar from '../components/Navbar.jsx'
import {ArrowUpRight} from "lucide-react";
import {useRef, useEffect} from "react";
import gsap from "gsap";

const MoreProjects = () => {
    const moreProjects = [
        {
            name: "RSVP Form",
            course: "FreeCodeCamp React Certification",
            link: "https://github.com/riiach/RSVP-Form",
        },
        {
            name: "Currency Converter",
            course: "FreeCodeCamp React Certification",
            link: "https://github.com/riiach/Currency-Converter",
        },
        {
            name: "Weather App",
            course: "FreeCodeCamp JavaScript Certification",
            link: "https://github.com/riiach/Weather-App",
        },
        {
            name: "Tic-Tac-Toe Game",
            course: "FreeCodeCamp Front End Development Libraries Certification",
            link: "https://github.com/riiach/Tic-Tac-Toe-Game",
        },
        {
            name: "Number Guessing Game",
            course: "FreeCodeCamp Relational Databases Certification",
            link: "",
        },
        {
            name: "Dice Roll Simulator",
            course: "Personal Project",
            link: "https://github.com/riiach/Dice-Roll-Simulator",
        },
        {
            name: "Express Book Reviews",
            course: "Coursera Get Started with Cloud Native, DevOps, Agile, and NoSQL",
            link: "https://github.com/riiach/expressBookReviews",
        },
        {
            name: "E-Plant Shopping",
            course: "Coursera Developing Front-End Apps with React",
            link: "https://github.com/riiach/e-plantShopping",
        },
        {
            name: "Conference Event Planner",
            course: "Coursera Developing Front-End Apps with React",
            link: "https://github.com/riiach/conference_event_planner",
        },
        {
            name: "Event Planning Website",
            course: "Personal Project",
            link: "https://github.com/riiach/Event-Booking-Page",
        },
    ];

    const sectionRef = useRef(null);
    const listDesktopRef1 = useRef(null);
    const listDesktopRef2 = useRef(null);
    const listDesktopRef3 = useRef(null);
    const listMobileRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(listDesktopRef1.current.children, {
                y: -30,
                autoAlpha: 0,
                stagger: 0.12,
                ease: "sine.out",
            });

            gsap.from(listDesktopRef2.current.children, {
                y: -30,
                autoAlpha: 0,
                stagger: 0.12,
                ease: "sine.out",
            });

            gsap.from(listDesktopRef3.current.children, {
                y: -30,
                autoAlpha: 0,
                stagger: 0.12,
                ease: "sine.out",
            });

            gsap.from(listMobileRef.current.children, {
                y: -30,
                autoAlpha: 0,
                stagger: 0.12,
                ease: "sine.out",
            });

        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-[200vh] lg:h-screen flex flex-col justify-between pb-8 lg:pb-0 bg-black" ref={sectionRef}>
            <Navbar />

            {/* DESKTOP */}
            <div className="hidden lg:flex w-full h-full flex-row justify-between items-end p-10 text-base">

                <div className="w-1/5 flex flex-col" ref={listDesktopRef1}>
                    <h1 className="text-white mb-6">Project Name</h1>
                    {moreProjects.map((item, index) => (
                        <p className="text-white/60 mb-[2px]" key={index}>{item.name}</p>
                    ))}
                </div>

                <div className="w-3/5 flex flex-col" ref={listDesktopRef2}>
                    <h1 className="text-white mb-6">Learning Course</h1>
                    {moreProjects.map((item, index) => (
                        <p className="text-white/60 mb-[2px]" key={index}>{item.course}</p>
                    ))}
                </div>

                <div className="w-1/5 flex flex-col items-end" ref={listDesktopRef3}>
                    {moreProjects.map((item, index) => (
                        <a
                            key={index}
                            className="text-white underline inline-flex group mb-[2px]"
                            href={item.link}
                            target="_blank"
                        >
                            Link
                            <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                    ))}
                </div>
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden flex-col gap-4 p-6" ref={listMobileRef}>
                {moreProjects.map((item, index) => (
                    <div
                        key={index}
                        className="border border-white/10 rounded-xl p-4 flex flex-col gap-2"
                    >
                        <p className="text-white">{item.name}</p>
                        <p className="text-white/60 text-sm">{item.course}</p>

                        {/* SAME LINK */}
                        <a
                            className="text-white underline inline-flex group"
                            href={item.link}
                        >
                            Link
                            <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default MoreProjects
