import React from 'react'
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
        }
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
        <div className="w-screen h-screen bg-black flex flex-col text-white" ref={sectionRef}>
            <Navbar ref={navbarRef}/>
            <div className="w-full h-full flex flex-col justify-between p-4 md:p-10">
                <div className="w-full h-2/3 flex flex-col md:flex-row justify-between ">
                    <h1 className="text-8xl md:text-8xl" ref={h1Ref}>Lets's work together</h1>
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
                    text-white/60 text-xl md:text-2xl
                    flex flex-col gap-1 justify-end" ref={summaryRef}>
                        <p className="inline-flex group">
                            <a href="tel:+811067645238"
                               target="_blank"
                               rel="noreferrer"
                            >+82 10 6764 5238</a>
                            <ArrowUpRight className="w-4 h-4 hidden group-hover:inline-block transition-opacity duration-200 text-white" />
                        </p>
                        <p className="inline-flex group">
                            <a href="https://www.riachoi.com/"
                               target="_blank"
                               rel="noreferrer"
                               >www.riachoi.com</a>
                            <ArrowUpRight className="w-4 h-4 hidden group-hover:inline-block transition-opacity duration-200 text-white" />
                        </p>
                        <p className="inline-flex group">
                            <a href=""
                               target="_blank"
                               rel="noreferrer"
                               className="text-white"
                               >Check Out My Resume</a>
                            <ArrowUpRight className="w-4 h-4 hidden group-hover:inline-block transition-opacity duration-200 text-white" />
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col border-t border-white" ref={contactRef}>
                        {contacts.map((contact, index) => (
                            <div key={index} className="w-full flex flex-row justify-between border-b border-white items-center pt-2">
                                <p className="pb-2 leading-none">{contact.contact}</p>
                                {contact.link ? (
                                    <a
                                        href={contact.address}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center pb-2 leading-none underline group"
                                    >
                                        {contact.address.replace('mailto:', '')}
                                        <ArrowUpRight className="w-4 h-4 ml-1 hidden group-hover:inline-block transition-opacity duration-200 text-white" />
                                    </a>
                                ) : (
                                    <p className="pb-2 leading-none">{contact.address}</p>
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
