import React from 'react'
import Navbar from "../components/Navbar.jsx"
import { RPConfig, RPTheme, RPProvider, RPDefaultLayout, RPPages } from '@pdf-viewer/react'


const Resume = () => {
    return (
        <div className="bg-black flex flex-col justify-between items-center w-screen h-[100vh]">
            <Navbar />
            <RPConfig>
                <RPTheme
                    customVariables={{
                        '--rp-text-color': 'gray',
                        '--rp-toolbar-background': '#00000',
                        '--rp-pages-background-color': '#00000',
                    }}
                >
                    <RPProvider src="/RiaChoi.pdf">
                        {/* Set the mobile responsive breakpoint to 500px */}
                        <RPDefaultLayout style={{ height: '100%', width: '100vw' }}>
                            <RPPages />
                        </RPDefaultLayout>
                    </RPProvider>
                </RPTheme>
            </RPConfig>
        </div>
    )
}
export default Resume
