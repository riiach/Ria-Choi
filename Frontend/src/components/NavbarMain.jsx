import React from "react";
import { ArrowUpRight } from 'lucide-react'

function NavbarMain() {
    return (
        <section className="w-full bg-black text-white">
            <div className="w-full px-10 py-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-white/90 pointer-events-none">
                            Role
                        </p>
                        <div className="space-y-1 text-sm text-white/60">
                            <p>Entry-Level</p>
                            <p>Frontend Developer</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-white/90">
                            Specialised in
                        </p>
                        <div className="space-y-1 text-sm text-white/60">
                            <p>React</p>
                            <p>Express</p>
                            <p>Node</p>
                            <p>Cors</p>
                            <p>GSAP Animation</p>
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
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
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
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
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
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
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
                            Hi, my name is Ria Choi — a second year computer science major and
                            entry level front-end developer building clean, intuitive, and
                            engaging web experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavbarMain;
