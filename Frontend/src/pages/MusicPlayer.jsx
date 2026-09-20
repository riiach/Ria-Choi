import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const MusicPlayer = () => {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(boxRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.6,
                filter: "blur(10px)",
                ease: "sine.out",
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-[100vh] flex flex-col md:flex-row p-8 md:p-10 gap-4 bg-black overflow-hidden" ref={sectionRef}>
            <NavbarSide />
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between">
                <h1 className="text-white text-xl md:text-2xl">Today Eats</h1>
                <p className="text-white/60 text-sm sm:text-base md:text-xl">
                    TodayEats is a 5-person bootcamp team project built as an integrated <span className="text-white">food delivery platform</span> covering ordering, payment,
                    and order history management in a single service, developed as part of the Sparta Spring Advanced Bootcamp 7th cohort.
                    It's built with Java, Spring Boot, and Spring Security, backed by PostgreSQL and Redis, and deployed with Docker Compose on AWS.
                    I was responsible for the menu and AI domain, <span className="text-white">integrating the Gemini API</span> so store owners can auto-generate polished product descriptions
                    when registering a menu item instead of writing them by hand, with every <span className="text-white">AI request and response logged for traceability.</span>
                </p>
                <Description />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full rounded-xl "
                        style={{
                           backgroundImage: `url(https://i.ibb.co/v6t0jr8w/chrome-0l-A51j-SXJu.png)`,
                           backgroundSize: 'contain',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                ref={boxRef}
            ></div>
        </div>
    )
}
export default MusicPlayer
