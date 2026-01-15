import React from 'react'
import { useRef, useEffect } from "react"
import Navbar from '../components/Navbar.jsx'
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const elRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(elRef.current.children, {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "sine.out",
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="flex flex-col bg-black w-screen h-screen items-center" ref={sectionRef}>
            <Navbar />

            <div className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            flex flex-col flex-wrap gap-0 md:gap-2 ml-8 md:ml-12 lg:ml-24
            w-2/3 h-2/4
            text-3xl
            sm:text-3xl
            md:text-4xl
            lg:text-4xl
            xl:text-5xl
            2xl:text-6xl
            " ref={elRef}>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">01</p>
                    <span className="text-white "
                    data-tooltip-id="detail"
                    data-tooltip-content="React Certificate 2025"
                    >React</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">02</p>
                    <span className="text-white "
                          data-tooltip-id="detail"
                          data-tooltip-content="JavaScript Certificate 2025"
                    >JavaScript</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">03</p>
                    <span className="text-white "
                          data-tooltip-id="detail"
                          data-tooltip-content="Frontend Certificate 2025"
                    >HTML/CSS</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">04</p>
                    <p className="text-white">Express</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">05</p>
                    <p className="text-white">Tailwind CSS</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">06</p>
                    <p className="text-white">Mongo DB</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">07</p>
                    <p className="text-white">MySQL</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">08</p>
                    <span className="text-white "
                          data-tooltip-id="detail"
                          data-tooltip-content="Azure Certificate 2025"
                    >Azure</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">09</p>
                    <span className="text-white "
                          data-tooltip-id="detail"
                          data-tooltip-content="AWS Course Certificate"
                    >AWS</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">10</p>
                    <span className="text-white "
                          data-tooltip-id="detail"
                          data-tooltip-content="Docker Course Certificate"
                    >Docker</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">11</p>
                    <p className="text-white">Figma</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">12</p>
                    <span className="text-white "
                          data-tooltip-id="detail"
                          data-tooltip-content="Photoshop Certificate 2019"
                    >Photoshop</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-gray-500">13</p>
                    <p className="text-white">After Effect</p>
                </div>
            </div>

            <Tooltip
                id="detail"
                place="right-start"
                className="!bg-black/70 !text-white/60 !text-sm"
            />
        </div>
    )
}
export default Skills
