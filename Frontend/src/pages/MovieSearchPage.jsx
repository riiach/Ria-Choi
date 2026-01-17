import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

const MovieSearchPage = () => {
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
        <div className="w-screen h-screen flex-col md:flex md:flex-row p-8 md:p-10 bg-black" ref={sectionRef}>
            <NavbarSide />
            <div className="w-full h-full md:w-3/4 flex flex-col pr-0 md:pr-10 justify-between">
                <div className="w-full h-1/4 flex flex-col justify-between">
                    <h1 className="text-white text-2xl">Movie Search Page</h1>
                </div>
                <div className="md:hidden w-full md:w-1/4 justify-start">
                    <p className="text-base xl:text-xl text-white/60">
                        This website allows users to search for
                        movies and explore trending titles using data
                        from the <span className="text-white">Movie Database (TMDB) API. </span>
                        The main page highlights the most searched movies,
                        providing users with immediate access to popular and relevant content.
                        By integrating the TMDB API, the project demonstrates real-time data fetching,
                        dynamic rendering of search results, and responsive user interaction.
                        Tailwind CSS was used to create a clean, cohesive visual design,
                        emphasizing clarity, consistency, and an intuitive user experience.
                    </p>
                </div>
                <Description />
                <div className="w-full h-1/4 md:h-2/4 xl:h-3/4 flex flex-row gap-4" ref={boxRef}>
                    <div
                        className="w-1/2 aspect-square rounded-xl bg-gray-400"
                        /*
                        style={{
                            backgroundImage: `url(${})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        */
                    ></div>
                    <div
                        className="w-1/2 aspect-square rounded-xl bg-gray-400"
                        /*
                        style={{
                            backgroundImage: `url(${})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        */
                    ></div>
                </div>
            </div>
            <div className="hidden md:block w-full md:w-1/4 self-end">
                <p className="text-base xl:text-xl text-white/60" ref={textXlREf}>
                    This website allows users to search for
                    movies and explore trending titles using data
                    from the <span className="text-white">Movie Database (TMDB) API. </span>
                    The main page highlights the most searched movies,
                    providing users with immediate access to popular and relevant content.
                    By integrating the TMDB API, the project demonstrates real-time data fetching,
                    dynamic rendering of search results, and responsive user interaction.
                    Tailwind CSS was used to create a clean, cohesive visual design,
                    emphasizing clarity, consistency, and an intuitive user experience.
                </p>
            </div>
        </div>
    )
}
export default MovieSearchPage
