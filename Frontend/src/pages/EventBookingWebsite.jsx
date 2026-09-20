import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import gsap from 'gsap'
import { useRef, useEffect} from 'react'

const EventBookingWebsite = () => {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(boxRef.current.children, {
               x: -50,
               opacity: 0,
               duration: 1,
               filter: "blur(10px)",
               stagger: 0.1,
               ease: "sine.out",
            });
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen h-[100vh] flex flex-col p-8 md:p-10 bg-black" ref={sectionRef}>
            <NavbarSide />
            <div className="w-full h-1/2 lg:h-1/4 flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-between">
                    <h1 className="text-white text-xl md:text-2xl">LogiBox</h1>
                    <p className="w-full lg:w-1/2 lg:hidden h-1/3 text-sm 2xl:text-base text-white/60">
                        I integrated the <span className="text-white">Gemini API</span> to analyze order and delivery details
                        and automatically generate an estimated delivery time, cost, and risk level,
                        splitting the logic into focused components.
                    </p>
                    <Description />
                </div>
                <div className="w-full lg:w-1/2 h-full hidden lg:flex flex-col lg:flex-row gap-4">
                    <p className="w-full lg:w-1/2 h-1/3 mt-10 text-sm 2xl:text-base text-white/60">
                        I integrated the <span className="text-white">Gemini API</span> to analyze order and delivery details
                        and automatically generate an estimated delivery time, cost, and risk level,
                        splitting the logic into focused components.
                    </p>
                    <p className="w-full lg:w-1/2 h-1/3 mt-10 text-sm 2xl:text-base text-white/60">
                        For service-to-service communication, I implemented a <span className="text-white">Saga pattern</span> over <span className="text-white">RabbitMQ</span>,
                        in sync across services using topic exchange with routing-key-based queue bindings.
                    </p>
                </div>
            </div>
            <div className="w-full h-1/2 lg:h-3/4 flex flex-row gap-4" ref={boxRef}>
                <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 ">
                    <div
                        className="w-full h-2/3 rounded-lg bg-gray-400"
                        style={{
                           backgroundImage: 'url("https://i.ibb.co/y7dgds8/chrome-x-Rpp-FC2ezp.png")',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                    ></div>
                    <div className="w-full h-1/3 flex flex-row gap-4">
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/21QmNDHF/chrome-dru-LQEhs0-J.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/60jtjjHB/chrome-QRe09-US9u2.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                </div>
                <div className="hidden lg:flex w-full lg:w-1/2 h-full flex-col gap-4 ">
                    <div className="w-full h-1/3 flex flex-row gap-4">
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/1fQd9z8S/chrome-0-Ca-ZH2-Dnc-B.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                        <div
                            className="w-1/2 h-full rounded-lg bg-gray-400"
                            style={{
                               backgroundImage: 'url("https://i.ibb.co/qY9RrXxn/chrome-nffr710i-Dl.png")',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                    <div
                        className="w-full h-2/3 rounded-lg bg-gray-400"
                        style={{
                           backgroundImage: 'url("https://i.ibb.co/JRGTkCgp/chrome-1s3v-WUz-Sa-H.png")',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default EventBookingWebsite
