import React from 'react'
import { useRef, useEffect } from "react"
import Navbar from '../components/Navbar.jsx'
import { ArrowUpRight } from 'lucide-react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Certification = () => {
    const certificates = [
        {
            year: 2019,
            title: "Adobe Photoshop Certificate",
            issuer: "Adobe",
        },
        {
            year: 2019,
            title: "Adobe Illustrator Certificate",
            issuer: "Adobe",
        },
        {
            year: 2019,
            title: "Adobe Indesign Certificate",
            issuer: "Adobe",
        },
        {
            year: 2025,
            title: "Azure Fundamental",
            issuer: "Microsoft",
        },
        {
            year: 2025,
            title: "Responsive Web Design Certificate",
            issuer: "FreeCodeCamp",
        },
        {
            year: 2025,
            title: "JavaScript Certification",
            issuer: "FreeCodeCamp",
        },
        {
            year: 2025,
            title: "Front End Development Libraries Certification",
            issuer: "FreeCodeCamp",
        },
        {
            year: 2025,
            title: "JavaScript Certificate",
            issuer: "W3Schools.com",
        },
        {
            year: 2025,
            title: "React Certificate",
            issuer: "W3Schools.com",
        },
        {
            year: 2025,
            title: "IBM Full-Stack JavaScript Developer",
            issuer: "Coursera",
        },
        {
            year: 2025,
            title: "AWS Cloud Practitioner Certification",
            issuer: "Coursera",
        },
    ];

    const sectionRef = useRef(null);
    const elRef = useRef(null);
    const elRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
        const tl = gsap.timeline();

            tl.from(elRef.current.children, {
                y: -30,
                autoAlpha: 0,
                stagger: 0.12,
                ease: "sine.out",
            })
                .from(
                    elRef2.current,
                    {
                        autoAlpha: 0,
                        duration: 1.2,
                        ease: "sine.out",
                    }, "+=0.5");
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black flex flex-col w-screen h-screen" ref={sectionRef}>
            <Navbar />
            <div className="flex flex-col justify-end w-full h-full p-10">
                <div className="flex flex-col justify-end w-full text-base md:text-xl" ref={elRef}>
                    {certificates.map((certificate, index) => (
                        <div className="flex flex-row justify-between" key={index}>
                            <div className="flex flex-row gap-2">
                                <p className="text-white/60">{certificate.year}</p>
                                <p className="text-white">{certificate.title}</p>
                            </div>
                            <p className="text-white/60">{certificate.issuer}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-between w-full mt-4 text-base md:text-2xl text-white" ref={elRef2}>
                    <p>Check out my Linked In profile for verifications.</p>
                    <p className="inline-flex group">
                        <a href="https://www.linkedin.com/in/ria-choi-76a658309/" target="_blank" className="underline">Link</a>
                        <ArrowUpRight className="w-4 h-4 hidden group-hover:inline-block transition-opacity duration-200 text-white" />
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Certification
