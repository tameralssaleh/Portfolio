import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import "./styles/index.css";
import Home from "./Pages/Home";
import "./styles/index.css";
import { useEffect } from "react";

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
        <BrowserRouter>
            <ProgressBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
