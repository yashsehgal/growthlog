import Hero from "./Hero";
import LogRecord from "./LogRecord";

export default function HomeView() {
    return (
        <div className="home-view app-container">
            <Hero />
            <div className="log-record-list-container mt-12">
                <LogRecord />
            </div>
        </div>
    )
}