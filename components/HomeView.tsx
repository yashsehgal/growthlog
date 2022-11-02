import { useEffect } from 'react';
import ThemeSwitch from '../scripts/theme-switch';
import Hero from "./Hero";
import LogRecord from "./LogRecord";
import Navbar from "./Navbar";

export default function HomeView() {
    useEffect(() => {
        ThemeSwitch("light");
    }, []);
    return (
        <div className="home-view app-container">
            <Navbar />
            <Hero />
            <div className="log-record-list-container mt-12">
                <LogRecord />
            </div>
        </div>
    )
}