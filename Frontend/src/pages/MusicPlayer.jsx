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
                <h1 className="text-white text-2xl">Music Player</h1>
                <p className="text-white/60 text-base md:text-xl">
                    This music player allows users to play audio tracks with core playback
                    controls, including play, pause, stop, previous, and next functionality.
                    The project demonstrates audio handling, user interaction through media controls,
                    and state management to control playback flow, delivering a simple
                    and intuitive listening experience.
                </p>
                <Description />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full rounded-xl bg-gray-500"
                /*
                        style={{
                           backgroundImage: `url(${})`,
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                 */
                ref={boxRef}
            ></div>
        </div>
    )
}
export default MusicPlayer
