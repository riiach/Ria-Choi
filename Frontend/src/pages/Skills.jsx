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

    const skills = [
        {
            number: "01",
            title: "React",
            content: "React Certificate"
        },
        {
            number: "02",
            title: "JavaScript",
            content: "JavaScript Certificate"
        },
        {
            number: "03",
            title: "HTML/CSS",
            content: "Responsive Web Design Certificate"
        },
        {
            number: "04",
            title: "Express",
            content: "Express Course Certificate"
        },
        {
            number: "05",
            title: "Tailwind CSS",
            content: "Library Certificate"
        },
        {
            number: "06",
            title: "Mongo DB",
            content: ""
        },
        {
            number: "07",
            title: "My SQL",
            content: "NoSQL Course Certificate"
        },
        {
            number: "08",
            title: "Azure",
            content: "Azure Fundamental"
        },
        {
            number: "09",
            title: "AWS",
            content: "AWS Course Certificate"
        },
        {
            number: "10",
            title: "Docker",
            content: "Docker Course Certificate"
        },
        {
            number: "11",
            title: "Figma",
            content: ""
        },
        {
            number: "12",
            title: "Kubernetes",
            content: "Kubernetes Course Certificate"
        },
        {
            number: "13",
            title: "After Effect",
            content: ""
        },
        {
            number: "14",
            title: "Swiper",
            content: "",
        },
        {
            number: "15",
            title : "GSAP Animation",
            content: "",
        }
    ]

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
        <div className="flex flex-col bg-black w-screen h-[100vh] items-center overflow-hidden" ref={sectionRef}>
            <Navbar />

            <div className="
            absolute top-1/2 left-1/2 justify-center
            -translate-x-1/2 -translate-y-1/2
            flex flex-col flex-wrap gap-0 md:gap-2 ml-8 md:ml-12 lg:ml-24
            w-2/3 h-4/5 md:h-4/5 lg:h-4/5 xl:h-2/4
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-4xl
            xl:text-5xl
            " ref={elRef}>
                {skills.map((item, index) => (
                    <div className="flex items-center gap-4" key={index}>
                        <p className="text-gray-500">{item.number}</p>
                        <span className="text-white "
                              data-tooltip-id="detail"
                              data-tooltip-content={item.content}
                        >{item.title}</span>
                    </div>
                ))}
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
