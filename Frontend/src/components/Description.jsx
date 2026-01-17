import React from 'react'
import { useLocation } from 'react-router-dom'
import {ArrowUpRight} from "lucide-react";

const Description = () => {
    const location = useLocation();
    const link =
        location.pathname === '/projects/ecommercewebsite'
        ? "https://powderblue-pheasant-997935.hostingersite.com/"
        : location.pathname === '/projects/signuppage'
        ? ""
        : location.pathname === '/projects/moviesearchpage'
        ? ""
        : location.pathname === '/projects/eventbookingwebsite'
        ? ""
        : location.pathname === '/projects/musicplayer'
        ? ""
        : "https://www.riachoi.com";

    const category =
        location.pathname === '/projects/eventbookingwebsite'
        ? "JavaScript"
        : "React";

    return (
        <div className="w-full flex flex-row justify-between pb-8 md:pb-10">
            <div className="flex flex-col">
                <p className="text-white/60">Year</p>
                <p className="text-white">2025</p>
            </div>
            <div className="flex flex-col">
                <p className="text-white/60">Category</p>
                <p className="text-white">{category}</p>
            </div>
            <div className="flex flex-col justify-end">
                <p className="inline-flex group">
                    <a href={link} target="_blank" className="text-white underline">Link</a>
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </p>
            </div>
        </div>
    )
}
export default Description
