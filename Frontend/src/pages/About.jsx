import React from 'react'
import { useEffect } from "react";

const About = () => {

    useEffect(() => console.log("ABOUT MOUNTED"), []);

    return (
        <div>
            <section className="grid grid-cols-12 grid-rows-[auto_1fr] gap-6 h-screen">
                <div className="col-span-7 row-span-1">
                    <p>Who I am</p>
                </div>

                <div className="col-span-7 row-span-1">
                    <ul>
                        <li>Currently computer science student at</li>
                        <li>Oregon State University (Ecampus)</li>
                        <li>(2022-2024, 2026-2027)</li>
                    </ul>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}
export default About
