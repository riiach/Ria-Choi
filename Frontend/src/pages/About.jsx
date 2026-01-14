import React from "react";
import styles from "./About.module.css";

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

    return (
        <div className="w-screen h-[200vh] flex flex-col">
            <section className={`w-screen h-screen bg-black text-2xl p-8 pointer-events-none ${styles.layoutGrid}`}>
                <div className={`text-white ${styles.box1}`}>
                    <p>Who I am</p>
                </div>

                <div className={`text-white/60 flex flex-col justify-end ${styles.box2}`}>
                    <div className="mb-10">
                        <p>Currently computer science student at</p>
                        <p className="text-white">Oregon State University (Ecampus)</p>
                        <p>(2022-2024, 2026-2027)</p>
                    </div>
                    <div className="mb-10">
                        <p>Website Planner at <span className="text-white">WEE'S Group</span></p>
                        <p>(2020 - 2021)</p>
                    </div>
                    <div className="mb-10">
                        <p>Grew up in Busan, South Korea</p>
                    </div>
                    <div className="text-white">
                        <p>Positive</p>
                        <p>Solution Prone</p>
                        <p>Team Player</p>
                    </div>
                </div>

                <div className={`bg-gray-500 rounded-2xl ${styles.box3}`}>
                    {/* Your image goes here */}
                </div>
            </section>
            <section className="w-screen h-screen bg-black flex flex-col sm:flex-col md:flex-col lg:flex-row text-2xl p-8 pointer-events-none overflow-y-hidden">
                <div className="w-full sm:full md:w-full lg:w-1/2 flex flex-wrap gap-4 mt-14 md:mt-10 lg:mt-0">
                {abilities.map((ability, index) => (
                        <div
                            key={index}
                            className="
                                aspect-square
                                bg-white rounded-xl
                                flex items-center justify-center text-center
                                text-gray-500 p-4
                                text-sm md:text-base sm:text-base lg:text-xl
                                w-[calc(33.333%-1rem)]
                                md:w-[calc(33.333%-1rem)]
                                sm:[calc(33.333%-1rem)]
                              "
                        >
                            {ability}
                        </div>
                    ))}
                </div>


                <div className="h-full w-full md:w-full lg:w-1/2 flex flex-col justify-end md:justify-between text-xl lg:text-xl md:text-sm sm:text-sm">
                <p className="text-white mb-10 md:mb-0 text-2xl">What I do</p>
                    <p className="text-white/60">I work at the intersection of front-end development, design,
                        and creative technology, building web experiences that are
                        both <span className="text-white">functional</span> and <span className="text-white">visually engaging.</span> From crafting
                        responsive interfaces and thoughtful web designs. I enjoy turning
                        ideas into polished digital products. With a <span className="text-white">foundation in back-
                        end development, data, and cloud concepts,</span> I aim to create
                        experiences that are not only beautiful, but also scalable and
                        well-structured.</p>
                </div>
            </section>
        </div>
    )
}
export default About
