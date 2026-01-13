import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import MoreProject from "./pages/MoreProject";
import Skills from "./pages/Skills";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";

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
        </Routes>
    );
}
