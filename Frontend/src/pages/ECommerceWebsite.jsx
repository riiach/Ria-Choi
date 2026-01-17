import React from 'react'
import {ArrowUpRight} from "lucide-react"
import CardSlide from "../components/CardSlide.jsx"
import NavbarSide from "../components/NavbarSide.jsx"
import Description from "../components/Description.jsx"

const ECommerceWebsite = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row w-screen h-screen px-8 md:px-10">
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between pr-6">
                <h1 className="text-white text-2xl pt-8 md:pt-10">E-Commerce Website</h1>
                <p className="text-white/60 text-base md:text-xl">
                    This commercial website was built to explore
                    e-commerce fundamentals, focusing on <span className="text-white">shopping cart</span> functionality and
                    <span className="text-white"> backend server requests</span> during checkout.
                    The site allows users to browse products, add items to a shopping cart,
                    and proceed through a checkout flow that communicates
                    with a backend server to process purchase requests, demonstrating
                    <span className="text-white"> state management, API communication,</span> and secure checkout handling.
                </p>
                <Description/>
            </div>
            <CardSlide />
            <NavbarSide />
        </div>
    )
}
export default ECommerceWebsite
