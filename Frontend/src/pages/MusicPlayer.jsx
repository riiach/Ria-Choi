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
        <div className="w-screen h-screen flex flex-col md:flex-row p-8 md:p-10 gap-4 bg-black" ref={sectionRef}>
            <NavbarSide />
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between">
                <h1 className="text-white text-2xl">Yogo</h1>
                <p className="text-white/60 text-base md:text-xl">
                    Yogo is a mobile application built with React Native (Expo) that performs automated <span class="text-white">logo recognition </span>
                    using the <span class="text-white">Google Vision API</span> (Logo Detection).
                    The app accepts both <span class="text-white">image uploads </span> and <span class="text-white">remote image URLs, </span>
                    converts them into API-compatible requests, and parses detection results in real time.
                </p>
                <Description />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full rounded-xl "
                        style={{
                           backgroundImage: `url(https://i.ibb.co/dsw7VH4j/Yogo-Content.jpg)`,
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
