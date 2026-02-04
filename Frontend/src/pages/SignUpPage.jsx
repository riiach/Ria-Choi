import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import CardToggleSlide from '../components/CardToggleSlide.jsx'

const SignUpPage = () => {

    return (
        <div className="bg-black flex flex-col md:flex-row w-screen h-[100vh] pl-8 pt-8 md:pl-10 md:pt-10">
            <div className="w-full md:w-1/3 h-1/2 md:h-full flex flex-col justify-between pr-6">
                <h1 className="text-white text-xl md:text-2xl">Sign Up Page</h1>
                <p className="text-white/60 text-sm md:text-base lg:text-xl">
                    The website includes user authentication
                    features such as sign-up and sign-in,
                    implemented using a <span className="text-white">SQL-based database</span> to
                    securely store and manage user credentials.
                    This functionality demonstrates backend integration
                    for <span className="text-white">user data handling, authentication workflows,
                    and server-side validation, </span>
                    enabling a personalized and secure user experience.
                </p>
                <Description />
            </div>
            <div className="w-full md:w-3/4 h-1/2 md:h-full flex">
                <CardToggleSlide />
            </div>
            <NavbarSide />
        </div>
    )
}
export default SignUpPage
