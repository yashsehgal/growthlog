import DarkLightModeSwitch from "./DarkLightModeSwitch";

export default function Navbar() {
    return (
        <div className="navbar-content-wrapper mt-8 mb-6 w-full h-auto flex flex-row gap-4 items-center justify-end text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200">
            <a href="https://yashsehgal.com" rel="noreferrer" target="_blank">
                <h4 className="portfolio-logo-link-content-wrapper">{"go to yashsehgal.com"}</h4>
            </a>
            <DarkLightModeSwitch />
        </div>
    )
}