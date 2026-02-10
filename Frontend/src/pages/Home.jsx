import MainContent from "../components/MainContent";
import NavbarMain from "../components/NavbarMain";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import Navbar from '../components/Navbar'
import Section from "../components/Section";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const sectionRef = useRef(null);
    const wideBoxRef = useRef(null);
    const fullBoxRef = useRef(null);
    const textRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wideBox = wideBoxRef.current;
            const fullBox = fullBoxRef.current;
            const text = textRef.current;

            const split = new SplitText(text, {
                type: "chars",
                charsClass: "char"
            });

            gsap.set(split.chars, {
                opacity: 0,
                y: 0,
                scale: 0.8
            });

            // Initial state for wide box (visible on page 1)
            gsap.set(wideBox, {
                height: "clamp(8rem, 20vw, 20rem)",
                borderRadius: "16px",
                autoAlpha: 1,
            });

            // Initial state for full box (hidden initially)
            gsap.set(fullBox, {
                position: "fixed",
                top: "150vh",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                width: "50vw",
                height: "50vh",
                borderRadius: "0px",
                autoAlpha: 0,
            });

            // Create snap points
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                snap: {
                    snapTo: 1 / 2,
                    duration: { min: 0.2, max: 0.6 },
                    ease: "power1.inOut",
                },
            });

            // Page 1: Fade out wide box and fade in full box
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: section1Ref.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    markers: false,
                }
            });

            tl1.to(wideBox, {
                autoAlpha: 0,
                ease: "none",
            }, 0)
                .to(fullBox, {
                    autoAlpha: 0,
                    ease: "none",
                }, 0);

            // Page 2->3: Transform full box to narrow right box
            gsap.to(fullBox, {
                width: "clamp(180px, 22vw, 240px)",
                height: "clamp(320px, 80vh, 800px)",
                borderRadius: "18px",
                left: "91%",
                top: "55%",
                ease: "none",
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    markers: false,
                }
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: section2Ref.current,
                    start: "top center",
                    end: "center center",
                    toggleActions: "play none none reverse",
                    markers: false,
                }
            });

            tl2.to(split.chars, {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.02,
                duration: 1,
                ease: "linear"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-[100vw] h-[300vh] flex flex-col relative overflow-y-auto" ref={sectionRef}>
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <Lottie
                    animationData={animationData}
                    autoplay
                    loop
                    renderer="svg"
                    rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                    className="w-full h-full"
                />
            </div>

            {/* Black overlay with holes */}
            <div className="fixed inset-0 z-10 pointer-events-none"
                 style={{}}
            >
                {/* Wide box - visible on page 1 */}
                <div className="
                    fixed
                    top-3/4
                    left-[45%] sm:left-[48%] md:left-[48%] lg:left-[50%]
                    transform -translate-x-1/2 -translate-y-1/2
                    w-11/12 xl:w-[94%]
                    bg-transparent
                    shadow-[0_0_0_9999px_rgba(0,0,0,1)]
                    mt-16 sm:mt-12 md:mt-0
                    mx-6 sm:mx-8 md:mx-5 lg:mx-0
                    "
                     ref={wideBoxRef}
                ></div>

                {/* Full/narrow box - visible on pages 2 & 3 */}
                <div className="bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,1)]" ref={fullBoxRef}></div>
            </div>

            <section ref={section1Ref} className="relative w-[100vw] h-[100vh] flex flex-col z-20">
                <NavbarMain />
                <MainContent />
            </section>

            <section ref={section2Ref} className="relative w-[100vw] h-[100vh] z-20 flex items-center">
                <div ref={textRef} className="absolute left-10 z-50 text-white font-medium pointer-events-none">
                    {/* Mobile */}
                    <h1 className="block md:hidden text-5xl">
                        Hi,<br/>
                        I'm a Full-Stack<br/>
                        Developer from<br/>
                        South Korea.
                    </h1>

                    {/* Tablet */}
                    <h1 className="hidden md:block lg:hidden text-7xl">
                        Hi,<br/>
                        I'm a Full-Stack<br/>
                        Developer from South Korea.
                    </h1>

                    {/* Desktop */}
                    <h1 className="hidden lg:block text-9xl">
                        Hi,<br/>
                        I'm a Full-Stack Developer
                        from South Korea.
                    </h1>
                </div>
            </section>

            <section ref={section3Ref} className="relative w-[100vw] h-[100vh] z-20">
                <div className="absolute bottom-0 left-0" >
                    <Section/>
                </div>
            </section>

            {/* Fixed Navbar for pages 2 and 3 */}
            <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto"
                 style={{
                     opacity: 0,
                     transition: 'opacity 0.6s ease'
                 }}
                 ref={(el) => {
                     if (el) {
                         const handleScroll = () => {
                             const scrollProgress = window.scrollY / window.innerHeight;
                             el.style.opacity = scrollProgress >= 1 ? '1' : '0';
                         };
                         window.addEventListener('scroll', handleScroll);
                         handleScroll();
                     }
                 }}>
                <Navbar />
            </div>
        </div>
    );
}