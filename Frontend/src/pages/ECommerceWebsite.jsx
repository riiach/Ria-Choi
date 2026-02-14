import React from 'react'
import {ArrowUpRight} from "lucide-react"
import CardSlide from "../components/CardSlide.jsx"
import NavbarSide from "../components/NavbarSide.jsx"
import Description from "../components/Description.jsx"

const ECommerceWebsite = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row w-screen h-[100vh] px-8 md:px-10">
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between pr-6">
                <h1 className="text-white text-xl md:text-2xl pt-8 md:pt-10">E-Commerce Website</h1>
                <p className="text-white/60 text-sm md:text-xl">
                    This commercial website was built to explore
                    e-commerce fundamentals, focusing on <span className="text-white">shopping cart</span> functionality and
                    <span className="text-white"> backend server requests</span> during checkout.
                    This website is built with <span className="text-white">React and Redux, </span>
                    giving me fine-grained control over how state flows through the application.
                    I used <span className="text-white">reducers and a centralized Redux store </span>to manage the cart system,
                    ensuring consistent behavior and a seamless shopping experience across the entire e-commerce site.
                    <br/>*Card Number for testing 4242 4242 4242 4242
                </p>
                <Description/>
            </div>
            <CardSlide />
            <NavbarSide />
        </div>
    )
}
export default ECommerceWebsite
