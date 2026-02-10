import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const Blog = () => {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);
    const textXlREf = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(boxRef.current.children, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                filter: "blur(10px)",
                stagger: 0.2,
                ease: "sine.out",
            }).from(textXlREf.current, {
                x:-50,
                opacity: 0,
                duration: 0.6,
                ease: "sine.out",
            }, "+=0.1");

        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-[100vh] flex-col md:flex md:flex-row p-8 md:p-10 bg-black" ref={sectionRef}>
            <NavbarSide />
            <div className="w-full h-full md:w-3/4 flex flex-col pr-0 md:pr-10 justify-between">
                <div className="w-full h-1/4 flex flex-col justify-between">
                    <h1 className="text-white text-xl md:text-2xl">Blog Page</h1>
                </div>
                <div className="md:hidden w-full md:w-1/4 justify-start">
                    <p className="text-sm md:text-base xl:text-xl text-white/60">
                        The platform is built with React and focuses heavily on content structure and user experience.
                        Instead of treating blog posts as static text,
                        I designed a <span className="text-white">flexible rendering</span> system that supports multiple content types like headings, quotes, lists, and references,
                        making each post easy to read and <span className="font-semibold">visually structured.</span>
                        While building the search bar feature,
                        I implemented <span className="text-white">React Context</span> to manage shared search state across components.
                        This allowed the search input and results to stay synchronized without excessive prop drilling,
                        improving both code organization and scalability.
                    </p>
                </div>
                <Description />
                <div className="w-full h-1/2 md:h-2/4 xl:h-3/4 flex flex-row gap-4" ref={boxRef}>
                    <div
                        className="w-full aspect-square rounded-xl bg-gray-400"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/wFmFTt4L/Blog-Content.png')",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
            </div>
            <div className="hidden md:block w-full md:w-1/4 self-end">
                <p className="text-base xl:text-xl text-white/60" ref={textXlREf}>
                    The platform is built with React and focuses heavily on content structure and user experience.
                    Instead of treating blog posts as static text,
                    I designed a <span className="text-white">flexible rendering</span> system that supports multiple content types like headings, quotes, lists, and references,
                    making each post easy to read and <span className="font-semibold">visually structured.</span>
                    While building the search bar feature,
                    I implemented <span className="text-white">React Context</span> to manage shared search state across components.
                    This allowed the search input and results to stay synchronized without excessive prop drilling,
                    improving both code organization and scalability.
                </p>
            </div>
        </div>
    )
}
export default Blog
