import React from 'react'
import { useLocation } from 'react-router-dom'
import {ArrowUpRight} from "lucide-react";

const Description = () => {
    const location = useLocation();
    const link =
        location.pathname === '/projects/ecommercewebsite'
        ? "https://powderblue-pheasant-997935.hostingersite.com/"
        : location.pathname === '/projects/signuppage'
        ? "https://riachoi-services.vercel.app/blog/traffic-peak-and-msa-backend-design"
        : location.pathname === '/projects/moviesearchpage'
        ? "https://honeydew-pigeon-971328.hostingersite.com/"
        : location.pathname === '/projects/eventbookingwebsite'
        ? "https://riachoi-services.vercel.app/blog/b2b-ai-logistics-systemic-backend-design"
        : location.pathname === '/projects/musicplayer'
        ? "https://riachoi-services.vercel.app/blog/spring-boot-backend-delivery-app"
        : location.pathname === '/projects/blog'
        ? "https://riachoi-services.vercel.app/"
        : "https://www.riachoi.com";

    const category =
        location.pathname === '/projects/blog'
        ? "Next.js"
        : location.pathname === '/projects/signuppage' || location.pathname === '/projects/eventbookingwebsite' || location.pathname === '/projects/musicplayer'
        ? "JAVA"
        : "React";

    const gitHubLink =
        location.pathname === '/projects/ecommercewebsite'
            ? "https://github.com/riiach/shopping_cart"
            : location.pathname === '/projects/signuppage'
            ? "https://github.com/5makase/KOK"
            : location.pathname === '/projects/moviesearchpage'
            ? "https://github.com/riiach/Movie-Search-Page/tree/main"
            : location.pathname === '/projects/eventbookingwebsite'
            ? "https://github.com/GT5-LT7/LogiBox"
            : location.pathname === '/projects/musicplayer'
            ? "https://github.com/GolemOnce/Sparta-TodayEats"
            : location.pathname === '/projects/blog'
            ? "https://github.com/riiach/riachoi_services#ria-choi-portfolio--blog-platform"
            : "https://www.riachoi.com";
    const year =
        location.pathname === '/projects/ecommercewebsite'
            ? "2025"
            : location.pathname === '/projects/signuppage'
            ? "2026"
            : location.pathname === '/projects/moviesearchpage'
            ? "2025"
            : location.pathname === '/projects/eventbookingwebsite'
            ? "2026"
            : location.pathname === '/projects/musicplayer'
            ? "2026"
            : "2026";

    return (
        <div className="w-full flex flex-row justify-between pb-8 md:pb-10">
            <div className="flex flex-col">
                <p className="text-white/60">Year</p>
                <p className="text-white">{year}</p>
            </div>
            <div className="flex flex-col">
                <p className="text-white/60">Category</p>
                <p className="text-white">{category}</p>
            </div>
            <div className="flex flex-col">
                <p className="inline-flex group">
                    {
                        location.pathname === '/projects/signuppage' || location.pathname === '/projects/eventbookingwebsite' || location.pathname === '/projects/musicplayer'
                        ? <a href={link} target="_blank" className="text-white underline">About This Project</a>
                        : <a href={link} target="_blank" className="text-white underline">Live</a>
                    }
                    <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                </p>
                <p className="inline-flex group">
                    <a href={gitHubLink} target="_blank" className="text-white underline">GitHub</a>
                    <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
                </p>
            </div>
        </div>
    )
}
export default Description
