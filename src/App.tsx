import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import "./styles/index.css";
import "./styles/index.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function ProgressBar() {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [location]);

    return null;
}

function App() {

  return (
    <>
        <BrowserRouter basename="/">
            <ProgressBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
