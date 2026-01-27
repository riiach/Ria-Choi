import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const CardSlide = () => {
    const upTrack = useRef(null)
    const downTrack = useRef(null)

    useEffect(() => {
        const up = upTrack.current
        const down = downTrack.current

        // UP
        gsap.to(up, {
            yPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1,
        })

        // DOWN
        gsap.set(down, { yPercent: -50 })

        gsap.to(down, {
            yPercent: 0,
            duration: 20,
            ease: "none",
            repeat: -1,
        })
    }, [])


    return (
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-row gap-4 px-2">
            {/* LEFT — scroll UP */}
            <div className="w-1/2 h-full overflow-hidden">
                <div ref={upTrack} className="flex flex-col">
                    {/* group 1 */}
                    <div className="flex flex-col items-center gap-4 py-2 ">
                        <div className="h-[15em] w-[95%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/bMgfZLt9/shoppin-cart-content1.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[95%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/8L67WKGg/shoppin-cart-main.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[95%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/prN5TyxM/shoppin-cart-content2.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                    </div>

                    {/* group 2 (duplicate) */}
                    <div className="flex flex-col items-center gap-4 py-2" aria-hidden>
                        <div className="h-[15em] w-[95%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/bMgfZLt9/shoppin-cart-content1.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[95%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/8L67WKGg/shoppin-cart-main.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[95%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/prN5TyxM/shoppin-cart-content2.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* RIGHT — scroll DOWN */}
            <div className="w-1/2 h-full overflow-hidden">
                <div ref={downTrack} className="flex flex-col">
                    {/* group 1 */}
                    <div className="flex flex-col items-center gap-4 py-2">
                        <div className="h-[15em] w-[99%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/0VmWfzGx/shoppin-cart-content4.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[99%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/kVR3pWJr/shoppin-cart-content5.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[99%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/0VmWfzGx/shoppin-cart-content4.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                    </div>

                    {/* group 2 (duplicate) */}
                    <div className="flex flex-col items-center gap-4 py-2" aria-hidden>
                        <div className="h-[15em] w-[99%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/0VmWfzGx/shoppin-cart-content4.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[99%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/kVR3pWJr/shoppin-cart-content5.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                        <div className="h-[15em] w-[99%] md:w-[99%] bg-gray-400 rounded-xl text-5xl grid place-items-center"
                             style={{
                                 backgroundImage: "url('https://i.ibb.co/0VmWfzGx/shoppin-cart-content4.png')",
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                             }}
                        ></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardSlide
