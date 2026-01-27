import React from 'react'
import { useLocation } from 'react-router-dom'
import {ArrowUpRight} from "lucide-react";

const Description = () => {
    const location = useLocation();
    const link =
        location.pathname === '/projects/ecommercewebsite'
        ? "https://powderblue-pheasant-997935.hostingersite.com/"
        : location.pathname === '/projects/signuppage'
        ? "https://darkgrey-beaver-446774.hostingersite.com/"
        : location.pathname === '/projects/moviesearchpage'
        ? "https://honeydew-pigeon-971328.hostingersite.com/"
        : location.pathname === '/projects/eventbookingwebsite'
        ? "https://purple-herring-149129.hostingersite.com/"
        : location.pathname === '/projects/musicplayer'
        ? ""
        : "https://www.riachoi.com";

    const category =
        location.pathname === '/projects/eventbookingwebsite'
        ? "JavaScript"
        : location.pathname === 'projects/musicplayer'
        ? "JavaScript"
        : "React";

    const gitHubLink =
        location.pathname === '/projects/ecommercewebsite'
            ? "https://github.com/riiach/shopping_cart"
            : location.pathname === '/projects/signuppage'
            ? "https://github.com/riiach/signUpPage.git"
            : location.pathname === '/projects/moviesearchpage'
            ? "https://github.com/riiach/Movie-Search-Page/tree/main"
            : location.pathname === '/projects/eventbookingwebsite'
            ? "https://github.com/riiach/TravelRecommendation.git"
            : location.pathname === '/projects/musicplayer'
            ? ""
            : "https://www.riachoi.com";

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
            <div className="flex flex-col">
                <p className="inline-flex group">
                    <a href={link} target="_blank" className="text-white underline">Website</a>
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </p>
                <p className="inline-flex group">
                    <a href={gitHubLink} target="_blank" className="text-white underline">GitHub</a>
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </p>
            </div>
        </div>
    )
}
export default Description
