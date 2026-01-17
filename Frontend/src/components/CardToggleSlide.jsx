import React from 'react'
import gsap from "gsap"
import { useRef, useEffect, useState } from "react";
import { Draggable } from 'gsap/Draggable';
import TestImg1 from '../assets/TestImg1.jpg';
import TestImg2 from '../assets/TestImg2.jpg';
import TestImg3 from '../assets/TestImg3.jpg';

gsap.registerPlugin(Draggable);

const CardToggleSlide = () => {
    const [bgImage1,setBgImage1] = useState(TestImg1);
    const [bgImage2,setBgImage2] = useState(TestImg2);
    const [bgImage3,setBgImage3] = useState(TestImg3);

    const bgImage3Ref = useRef(TestImg3);
    const bgImage2Ref = useRef(TestImg2);
    const bgImage1Ref = useRef(TestImg1);

    const boundRef = useRef(null);
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);

    useEffect(() => {
        bgImage3Ref.current = bgImage3;
        bgImage2Ref.current = bgImage2;
        bgImage1Ref.current = bgImage1;
    }, [bgImage1, bgImage2, bgImage3]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            Draggable.create(boxRef3.current, {
                type: "x,y",
                bounds: boundRef.current,
                onDrag: function() {
                  const x = this.x;
                  const y = this.y;
                  const distance = Math.sqrt(x ** 2 + y ** 2);
                  const blurAmount = Math.min(distance / 20, 10);

                  gsap.to(boxRef3.current, {
                      filter: `blur(${blurAmount}px)`,
                      duration: 0.1,
                  });
                },
                onDragEnd: function() {
                    const currentBg3 = bgImage3Ref.current;

                    if (currentBg3 === TestImg3) {
                        setBgImage3(TestImg2);
                        setBgImage2(TestImg1);
                        setBgImage1(TestImg3);
                    } else if (currentBg3 === TestImg2) {
                        setBgImage3(TestImg1);
                        setBgImage2(TestImg3);
                        setBgImage1(TestImg2);
                    } else if (currentBg3 === TestImg1) {
                        setBgImage3(TestImg3);
                        setBgImage2(TestImg2);
                        setBgImage1(TestImg1);
                    }


                    gsap.to(boxRef3.current, {
                     x: 0,
                     y: 0,
                     filter: "blur(0px)",
                     duration: 0.5,
                     ease: "back.out(0.5)",
                  });
                },
            });

            gsap.set(boxRef3.current, {
                xPercent: -38,
                yPercent: -38,
                x: 0,
                y: 0,
            });

            gsap.from(boxRef3.current, {
                opacity: 0,
                duration: 0.5,
                ease: "sine.out",
            });

            gsap.from(boxRef2.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "sine.out",
                delay: 0.25,
            });

            gsap.from(boxRef1.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "sine.out",
                delay: 0.5,
            });

        }, boundRef.current);

        return () => ctx.revert();
    }, [])

    return (
        <div className="w-full h-full" ref={boundRef}>
            <div className="
            w-[420px] h-1/3 md:w-2/4 md:h-2/3
            rounded-xl
            absolute top-3/4 left-56 md:top-1/2 md:left-2/3
            -translate-x-[50%] -translate-y-[58%]
            shadow-[-6px_-6px_30px_rgba(0,0,0,0.5)] blur-sm"
            ref={boxRef1}
            style={{
                backgroundImage: `url(${bgImage1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}
            ></div>
            <div className="
            w-[420px] h-1/3 md:w-2/4 md:h-2/3
            rounded-xl
            absolute top-3/4 left-56 md:top-1/2 md:left-2/3
            -translate-x-[44%] -translate-y-[48%]
            shadow-[-6px_-6px_30px_rgba(0,0,0,0.5)] blur-sm"
            ref={boxRef2}
            style={{
                 backgroundImage: `url(${bgImage2})`,
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                 backgroundPosition: "center center"
            }}
            ></div>
            <div className="
            w-[420px] h-1/3 md:w-2/4 md:h-2/3
            rounded-xl
            absolute top-3/4 left-56 md:top-1/2 md:left-2/3
            -translate-x-[38%] -translate-y-[38%]
            shadow-[-6px_-6px_30px_rgba(0,0,0,0.5)]"
            ref={boxRef3}
            style={{
                 backgroundImage: `url(${bgImage3})`,
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                 backgroundPosition: "center center"
            }}
            ></div>
        </div>
    )
}

export default CardToggleSlide