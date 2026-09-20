import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import Navbar from "../components/Navbar.jsx"
import {ArrowUpRight} from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Project = () => {

    const projects = [
        {
            title: "KOK",
            techniques: ["Dev Lead", "Java", "AWS", "MSA", "Redis / Caching", "Observation"],
            img: "https://i.ibb.co/7tPktfVx/chrome-tf-Z8-KTj6-Qv.png",
            link: "/projects/signuppage"
        },
        {
            title: "LogiBox",
            techniques: ["Java", "MSA", "Redis / Caching", "RabbitMQ", "GeminiAPI"],
            img: "https://i.ibb.co/XrqgnBHH/chrome-Lcj-UO0ohm-B.png",
            link: "/projects/eventbookingwebsite",
        },
        {
            title: "TodayEats",
            techniques: ["Java", "Redis / Caching", "Auth"],
            img: "https://i.ibb.co/m5z38xNL/chrome-zu-YRf-Fi-Nrv.png",
            link: "/projects/musicplayer",
        },
        {
            title: "Tech Blog",
            techniques: ["Next.js", "PostgreSQL", "Docker", "Resend", "Sanity"],
            img: "https://i.ibb.co/yF32Qydw/chrome-62ww0cffl-P.png",
            link: "/projects/blog",
        },
        {
            title: "E-commerce Website",
            techniques: ["React","Express / Node", "Redux", "Tailwind", "Render.com","Stripe API",],
            img: "https://i.ibb.co/8L67WKGg/shoppin-cart-main.png",
            link: "/projects/ecommercewebsite",
        },
        {
            title: "Movie Search Page",
            techniques: ["React", "Tailwind", "Express / Node", "TMDB Data Base API"],
            img: "https://i.ibb.co/F2X8bm0/Movie-Search-Content.png",
            link: "/projects/moviesearchpage",
        }
    ];

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsLargeScreen(window.innerWidth >= 1600);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <div className="w-screen h-screen bg-black flex flex-col justify-between">
            <Navbar />
            <p className="absolute top-20 left-12 inline-flex items-center group/4">
                <NavLink to="/moreprojects" className="text-white text-sm md:text-xl">
                    └─ 📦{" "}
                    <span className="group-hover/4:underline transition-all duration-300 ease-in-out">
                        More Projects
                    </span>
                </NavLink>
                <ArrowUpRight
                    className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover/4:opacity-100 group-hover/4:translate-x-0 transition-all duration-300 ease-in-out"
                />
            </p>
            <p className="absolute top-32 left-12 text-white">Note to Hiring Team: Initial server requests may take 1–2 minutes due to the limitations of the current free-tier hosting environment.</p>
            {isLargeScreen ? (
                <div className="w-full h-3/4 flex flex-row p-4 md:p-10 gap-4" >
                    {projects.map((project, index) => (
                        <div className="flex flex-col w-full h-full justify-between" key={index}>
                            <div>
                                <div className="mb-4 inline-flex group">
                                    <NavLink to={project.link} className="text-white hover:underline transition-all duration-300 ease-in-out">{project.title}</NavLink>
                                    <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                                </div>
                                <div className="flex flex-col justify-start text-white/60">
                                    {project.techniques.map((technique, techIndex) => (
                                        <p key={techIndex}>{technique}</p>
                                    ))}
                                </div>
                            </div>
                            <div
                                className={`w-full h-2/3 rounded-xl bg-cover bg-center ${project.img ? '' : 'bg-gray-400'}`}
                                style={project.img ? { backgroundImage: `url(${project.img})` } : {}}
                            >
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-3/4 p-4 md:p-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 16,
                            },
                        }}
                        modules={[Pagination]}
                        className="h-full"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col w-full h-full justify-between">
                                    <div>
                                        <div className="mb-4 inline-flex group">
                                            <NavLink to={project.link} className="text-white hover:underline">
                                                {project.title}
                                            </NavLink>
                                            <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                                        </div>
                                        <div className="flex flex-col justify-start text-white/60">
                                            {project.techniques.map((technique, techIndex) => (
                                                <p key={techIndex}>{technique}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div
                                        className={`w-full h-2/3 rounded-xl bg-cover bg-center ${project.img ? '' : 'bg-gray-400'}`}
                                        style={project.img ? { backgroundImage: `url(${project.img})` } : {}}
                                    >
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}
export default Project
