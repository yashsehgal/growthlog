import { useState, useEffect } from 'react';
import { AiOutlineBulb } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import ThemeSwitch from '../scripts/theme-switch';

export default function DarkLightModeSwitch() {
    const [pageTheme, setPageTheme] = useState({ icon: <AiOutlineBulb />, mode: "light" });
    return (
        <button className="light-dark-mode-switch-button rounded-md bg-gray-100 hover:bg-gray-200 shadow-sm px-2 py-2 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => {
                pageTheme?.mode && pageTheme?.mode === "light" 
                ? setPageTheme({ icon: <FaMoon />, mode: "dark" })
                : setPageTheme({ icon: <AiOutlineBulb />, mode: "light" });
                
                pageTheme?.mode && pageTheme?.mode === "light"
                    ? ThemeSwitch("dark")
                    : ThemeSwitch("light")
            }
        }>
            {pageTheme?.icon}
        </button>
    )
}