import React from 'react'
import Navbar from "../components/Navbar.jsx"
import { Player } from "@lottiefiles/react-lottie-player";

const Resume = () => {
    return (
        <div className="bg-black flex flex-col justify-between items-center w-screen h-[100vh]">
            <Navbar />
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-white/60 text-2xl">Resume is under construction... 🛠️</p>
            </div>
        </div>
    )
}
export default Resume
