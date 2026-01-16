import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Section = () => {
    return (
        <div className="flex flex-col gap-4 text-white m-8 mb-24 sm:p-4 sm:m-8 p-0 md:p-8 md:m-10">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 group">
                    <p className="text-4xl sm:text-4xl md:text-7xl font-medium text-gray-500">01</p>
                    <Link to="/about" className="text-4xl sm:text-4xl md:text-7xl font-medium pb-1 border-b-4 border-white">About me</Link>
                    <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </div>

                <div className="flex items-center gap-4 group">
                    <p className="text-4xl sm:text-4xl md:text-7xl font-medium text-gray-500">02</p>
                    <Link to="/skills" className="text-4xl sm:text-4xl md:text-7xl font-medium pb-1 border-b-4 border-white">Skills</Link>
                    <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </div>

                <div className="flex items-center gap-4 group">
                    <p className="text-4xl sm:text-4xl md:text-7xl font-medium text-gray-500">03</p>
                    <Link to="/projects" className="text-4xl sm:text-4xl md:text-7xl font-medium pb-1 border-b-4 border-white">Project</Link>
                    <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </div>

                <div className="flex items-center gap-4 group">
                    <p className="text-4xl sm:text-4xl md:text-7xl font-medium text-gray-500">04</p>
                    <Link to="/certification" className="text-4xl sm:text-4xl md:text-7xl font-medium pb-1 border-b-4 border-white">Certification</Link>
                    <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </div>

                <div className="flex items-center gap-4 group">
                    <p className="text-4xl sm:text-4xl md:text-7xl font-medium text-gray-500">05</p>
                    <Link to="/contact" className="text-4xl sm:text-4xl md:text-7xl font-medium pb-1 border-b-4 border-white">Contact</Link>
                    <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white" />
                </div>
            </div>
        </div>
    )
}

export default Section