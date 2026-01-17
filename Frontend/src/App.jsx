import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import MoreProject from "./pages/MoreProject";
import Skills from "./pages/Skills";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";
import ECommerceWebsite from "./pages/ECommerceWebsite.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import MovieSearchPage from "./pages/MovieSearchPage.jsx"
import EventBookingWebsite from "./pages/EventBookingWebsite.jsx"
import MusicPlayer from "./pages/MusicPlayer.jsx"
import MoreProjects from "./pages/MoreProjects.jsx"

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/more" element={<MoreProject />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/ecommercewebsite" element={<ECommerceWebsite />} />
            <Route path="/projects/signuppage" element={<SignUpPage />} />
            <Route path="/projects/moviesearchpage" element={<MovieSearchPage />} />
            <Route path="/projects/eventbookingwebsite" element={<EventBookingWebsite />} />
            <Route path="/projects/musicplayer" element={<MusicPlayer />} />
            <Route path="/moreprojects" element={<MoreProjects />} />
        </Routes>
    );
}
