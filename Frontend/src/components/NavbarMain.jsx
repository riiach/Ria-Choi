import React from "react";
import { ArrowUpRight } from 'lucide-react'

function NavbarMain() {
    return (
        <section className="w-full bg-black text-white">
            <div className="w-full px-6 py-4 md:px-10 md:py-10">
                <div className="grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                        <p className="text-sm md:text-sm font-semibold tracking-wide text-white/90 pointer-events-none">
                            Role
                        </p>
                        <div className="space-y-1 text-sm md:text-sm text-white/60">
                            <p>Web Developer</p>
                            <p>Full Stack Developer</p>
                            <p>Software Engineer</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-white/90">
                            Languages
                        </p>
                        <div className="space-y-1 text-sm text-white/60">
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-white/90">
                            Contact
                        </p>
                        <div className="space-y-1 text-sm text-white/60">
                            <div className="flex group">
                                <p className="inline-flex">
                                    <a
                                        href="tel:+821067645238"
                                        aria-label="Call +82 10 6764 5238"
                                        className="group underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/60"
                                    >
                                        +82 10 6764 5238
                                    </a>
                                </p>
                                <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                            </div>
                            <div className="flex group">
                                <p className="inline-flex">
                                    <a
                                        href="https://www.linkedin.com/in/ria-choi-76a658309/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/60"
                                    >
                                        Linked In
                                    </a>
                                </p>
                                <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                            </div>
                            <div className="flex group">
                                <p className="inline-flex">
                                    <a
                                        href="https://riachoi-services.vercel.app/blog"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/60"
                                    >
                                        Tech Blog
                                    </a>
                                    <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                                </p>
                            </div>
                            <div className="flex group">
                                <p className="inline-flex">
                                    <a
                                        href="https://www.riachoi.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/60"
                                    >
                                        www.riachoi.com
                                    </a>
                                    <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Brief */}
                    <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-white/90">
                            Brief
                        </p>
                        <p className="text-sm leading-relaxed text-white/60">
                            A detailed oriented full stack developer with a passion for creating innovative and user-friendly web applications. Proficient in both front-end and back-end technologies, I specialize in building responsive and interactive web experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavbarMain;
