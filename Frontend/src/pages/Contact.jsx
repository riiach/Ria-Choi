import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "../components/Navbar.jsx"
import {ArrowUpRight} from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

    const contacts = [
        {
            contact: "LinkedIn",
            address: "https://www.linkedin.com/in/ria-choi-76a658309/",
            link: true,
        },
        {
            contact: "WhatsApp",
            address: "+82 10 6764 5238",
            link: false,
        },
        {
            contact: "Email",
            address: "mailto:riiachoii@gmail.com",
            link: true,
        },
        {
            contact: "GitHub",
            address: "https://github.com/riiachoii",
            link: true,
        },
        {
            contact: "Blog",
            address: "https://riachoiblog.riachoi.com/",
            link: true,
        },
    ];

    const h1Ref = useRef(null);
    const sectionRef = useRef(null);
    const profileRef = useRef(null);
    const summaryRef = useRef(null);
    const contactRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(h1Ref.current, {
                autoAlpha: 0,
                duration: 1,
                ease: "sine.out",
            })
                .from(profileRef.current, {
                    autoAlpha: 0,
                    duration: 1,
                    filter: "blur(10px)",
                    ease: "sine.out",
                }, "<")
                .from(summaryRef.current, {
                    autoAlpha: 0,
                    x: -50,
                    duration: 1,
                    ease: "sine.out",
                    stagger: 0.15,
                }, ">")
                .from(contactRef.current, {
                    autoAlpha: 0,
                    duration: 0.01,
                    ease: "sine.out",
                })
                .from(contactRef.current.children, {
                    autoAlpha: 0,
                    y: -30,
                    stagger: 0.12,
                    ease: "sine.out",
                }, ">")
                .from(navbarRef.current, {
                    autoAlpha: 0,
                    duration: 1,
                    ease: "sine.out",
                }, "+=0.5");

        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-[100vh] bg-black flex flex-col text-white pb-8 md:pb-0" ref={sectionRef}>
            <Navbar ref={navbarRef}/>
            <div className="w-full h-full flex flex-col justify-between p-4 md:p-10">
                <div className="w-full h-2/3 flex flex-col md:flex-row justify-between ">
                    <h1 className="text-4xl md:text-8xl" ref={h1Ref}>Let's work together</h1>
                    <div className="w-1/2 md:w-1/4 aspect-square md:h-[20rem] xl:h-[24rem] rounded-xl bg-gray-400" ref={profileRef}>
                        {/*Profile Photo goes here*/}
                    </div>
                </div>

                <div className="
                w-full flex
                flex-col md:flex-row
                justify-between">
                    <div className="
                    w-full md:w-1/4
                    mb-8 md:mb-0
                    text-white/60 text-xl md:text-xl lg:text-2xl
                    flex flex-col gap-1 justify-end" ref={summaryRef}>
                        <p className="inline-flex group">
                            <a href="tel:+811067645238"
                               target="_blank"
                               rel="noreferrer"
                               className="hover:underline hover:text-white"
                            >+82 10 6764 5238</a>
                        </p>
                        <p className="inline-flex group">
                            <a href="https://www.riachoi.com/"
                               target="_blank"
                               rel="noreferrer"
                               className="hover:underline hover:text-white"
                               >www.riachoi.com</a>
                        </p>
                        <p className="inline-flex group">
                            <NavLink to="/resume" className="text-white hover:underline">Check Out My Resume</NavLink>
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 flex flex-col border-t border-white/60" ref={contactRef}>
                        {contacts.map((contact, index) => (
                            <div key={index} className="w-full flex flex-row justify-between border-b border-white/60 items-center pt-2">
                                <p className="pb-2 leading-none">{contact.contact}</p>
                                {contact.link ? (
                                    <a
                                        href={contact.address}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center pb-2 leading-none text-xs sm:text-base md:text-base lg:text-xl underline group text-white/60 hover:text-white"
                                    >
                                        {contact.address.replace('mailto:', '')}
                                        <ArrowUpRight className="w-4 h-4 ml-1 hidden group-hover:inline-block transition-opacity duration-200 text-white" />
                                    </a>
                                ) : (
                                    <p className="pb-2 leading-none text-white/60">{contact.address}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
