import React from 'react'
import Description from '../components/Description.jsx'
import NavbarSide from '../components/NavbarSide.jsx'
import CardToggleSlide from '../components/CardToggleSlide.jsx'

const SignUpPage = () => {

    return (
        <div className="bg-black flex flex-col md:flex-row w-screen h-[100vh] pl-8 pt-8 md:pl-10 md:pt-10">
            <div className="w-full md:w-1/3 h-1/2 md:h-full flex flex-col justify-between pr-6">
                <h1 className="text-white text-xl md:text-2xl">KOK</h1>
                <ul>
                    <li className="text-white/60 text-sm md:text-base lg:text-xl mb-2">
                        <span className="text-white">Designed for large-scale traffic</span><br/>
                        Built from the start with real deployment and heavy traffic in mind rather than a one-off demo,
                        with target load levels defined in a system design document across the Gateway, Store, Notification, and User services.
                    </li>
                    <li className="text-white/60 text-sm md:text-base lg:text-xl mb-2">
                        <span className="text-white">Validation through load testing (k6, JMeter)</span><br/>
                        Combined JUnit, Postman, JMeter, and k6 across different layers of testing.
                        Ran multiple load test scenarios to compare a Redis distributed lock against a plain database lock on the reservation flow,
                        along with dedicated k6 tests for the Gateway and login endpoints. Also performed failure injection testing,
                        such as killing the Payment service mid-transaction and publishing events against a deleted store.
                    </li>
                    <li className="text-white/60 text-sm md:text-base lg:text-xl mb-2">
                        <span className="text-white">AWS deployment</span><br/>
                        Used Docker and Docker Compose for a consistent local development environment,
                        with Terraform and GitHub Actions handling infrastructure as code and CI/CD,
                        deploying the final system to EC2.
                    </li>
                </ul>
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
