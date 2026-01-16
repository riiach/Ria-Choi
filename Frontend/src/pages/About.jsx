import React from "react";
import styles from "./About.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavbarSide from "../components/NavbarSide.jsx";
import backgroundImg from "../assets/backgroundImg.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const abilities = [
        "Full Stack Development",
        "Pseudocode Driven Development",
        "Code Debugging",
        "Data Management",
        "Market Standard Workflow",
        "Cloud Management",
        "API Fetch",
        "Optimization",
        "Publishing"
    ];

    const positions = [
        "0% 0%",   "50% 0%",   "100% 0%",
        "0% 50%",  "50% 50%",  "100% 50%",
        "0% 100%", "50% 100%", "100% 100%",
    ];

    const sectionRef = useRef(null);
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const fadeInRef1 = useRef(null);
    const fadeInRef2 = useRef(null);
    const revealRef1 = useRef(null);
    const revealRef2 = useRef(null);
    const revealRef3 = useRef(null);
    const revealRef4 = useRef(null);
    const revealRef5 = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = document.querySelectorAll(".abilityCard");

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                snap: {
                    snapTo: 1 / 2,
                    duration: { min: 0.2, max: 0.6 },
                    ease: "power1.inOut",
                },
            });

            gsap.set(fadeInRef1.current, {
               opacity: 1,
               y: 0,
            });

            gsap.set(revealRef1.current, {
                opacity: 1,
                x: 0,
            });

            gsap.set(revealRef2.current, {
                opacity: 1,
                x: 0,
            });

            gsap.set(revealRef3.current, {
                opacity: 1,
                x: 0,
            });

            gsap.set(revealRef4.current, {
                opacity: 1,
                y: 0,
            });

            gsap.set(navRef.current, {
                autoAlpha:0,
                y: 10,
            })

            const tl1 = gsap.timeline({
               scrollTrigger: sectionRef1.current,
               start: "top top",
               toggleActions: "play none none reverse",
            });

            tl1.from(fadeInRef1.current, {
                scrollTrigger: {
                    opacity: 0,
                    y: 50,
                    duration: 0.6,
                    ease: "sine.out",
                }
            })
                .from(revealRef1.current, {
                    opacity: 0,
                    x: -50,
                    duration: 0.6,
                    ease: "sine.out",
                    stagger: 0.15,
                }, "+=0.1")
                .from(revealRef2.current, {
                        opacity: 0,
                        x: -50,
                        duration: 0.6,
                        ease: "sine.out",
                        stagger: 0.15,
                    }, "<")
                .from(revealRef3.current, {
                        opacity: 0,
                        x: -50,
                        duration: 0.6,
                        ease: "sine.out",
                        stagger: 0.15,
                    }, "<")
                .from(revealRef4.current, {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                        ease: "sine.out",
                        stagger: 0.15,
                    }, ">");

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef2.current,
                    start: "top 80%",
                    once: true,
                },
            });

            tl2.from(cards, {
                opacity: 0,
                scale: 0.96,
                duration: 0.6,
                ease: "sine.out",
                stagger: {
                    each: 0.14,
                    from: "start",
                },
            })
                .from(fadeInRef2.current, {
                    opacity: 0,
                    y: 50,
                    duration: 0.6,
                    ease: "sine.out",
                }, "+=0.1")
                .from(revealRef5.current, {
                    opacity: 0,
                    x: -50,
                    duration: 0.6,
                    ease: "sine.out",
                    stagger: 0.15,
            }, "+=0.1")
                .to(navRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 2,
                    ease: "sine.out",
            }, "+=0.3");

            ScrollTrigger.refresh();

        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-[200vh] flex flex-col" ref={sectionRef}>
            <section className={`w-screen h-screen bg-black text-2xl p-8 pointer-events-none ${styles.layoutGrid}`} ref={sectionRef1}>
                <div className={`text-white ${styles.box1}`}>
                    <p ref={fadeInRef1}>Who I am</p>
                </div>

                <div className={`text-white/60 flex flex-col justify-end ${styles.box2}`}>
                    <div className="mb-10" ref={revealRef1}>
                        <p>Currently computer science student at</p>
                        <p className="text-white">Oregon State University (Ecampus)</p>
                        <p>(2022-2024, 2026-2027)</p>
                    </div>
                    <div className="mb-10" ref={revealRef2}>
                        <p>Website Planner at <span className="text-white">WEE'S Group</span></p>
                        <p>(2020 - 2021)</p>
                    </div>
                    <div className="mb-10" ref={revealRef3}>
                        <p>Grew up in Busan, South Korea</p>
                    </div>
                    <div className="text-white" ref={revealRef4}>
                        <p>Detail Oriented</p>
                        <p>Solution Prone</p>
                        <p>Team Player</p>
                    </div>
                </div>

                <div className={`bg-gray-500 rounded-2xl mr-4 ${styles.box3}`}>
                    {/* Your image goes here */}
                </div>
            </section>
            <section className="w-screen h-screen bg-black flex flex-col sm:flex-col md:flex-col lg:flex-row text-2xl p-8 overflow-y-hidden" ref={sectionRef2}>
                <NavbarSide ref={navRef}/>
                <div className="w-full sm:full md:w-full lg:w-1/2 flex flex-wrap gap-4 mt-14 md:mt-10 lg:mt-0 pointer-events-none">
                {abilities.map((ability, index) => (
                        <div
                            key={index}
                            className="
                                abilityCard
                                aspect-square
                                rounded-xl bg-no-repeat bg-cover
                                flex items-center justify-center text-center
                                text-white p-4
                                text-sm md:text-base sm:text-base lg:text-xl
                                w-[calc(33.333%-1rem)]
                                md:w-[calc(33.333%-1rem)]
                                sm:[calc(33.333%-1rem)]
                              "
                            style={{
                                backgroundImage: `url(${backgroundImg})`,
                                backgroundSize: "300% 300%",
                                backgroundPosition: positions[index],
                            }}
                        >
                            {ability}
                        </div>
                    ))}
                </div>


                <div className="h-full w-full md:w-full lg:w-1/2 flex flex-col justify-end md:justify-between text-xl lg:text-xl md:text-sm sm:text-sm pointer-events-none">
                <p className="text-white mb-10 md:mb-0 text-2xl pointer-events-none" ref={fadeInRef2}>What I do</p>
                    <p className="text-white/60 pointer-events-none" ref={revealRef5}>I work at the intersection of front-end development, design,
                        and creative technology, building web experiences that are
                        both <span className="text-white">functional</span> and <span className="text-white">visually engaging.</span> From crafting
                        responsive interfaces and thoughtful web designs. I enjoy turning
                        ideas into polished digital products. With a <span className="text-white">foundation in back-end
                            development, data, and cloud concepts,</span> I aim to create
                        experiences that are not only beautiful, but also scalable and
                        well-structured.</p>
                </div>
            </section>
        </div>
    )
}
export default About
