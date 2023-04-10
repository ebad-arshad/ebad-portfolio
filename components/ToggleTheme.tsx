import React, { FC, useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'

type ThemeType = 'dark' | 'light'

const ToggleTheme: FC = () => {

    // Theme toggling starts

    const [theme, set_theme] = useState<ThemeType>(typeof window !== 'undefined' ? localStorage.theme : 'dark');

    useEffect(() => {
        if (localStorage.theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [theme]);

    const toggle_theme = () => {
        set_theme((e: ThemeType) => e === "dark" ? "light" : "dark");
        localStorage.theme = theme === "dark" ? "light" : "dark"
    };

    // Theme toggling ends

    return (
        <div onClick={toggle_theme} className='fixed z-20 top-[68px] right-4 bg-black dark:bg-white rounded-full text-white dark:text-black p-3 text-lg cursor-pointer'><FaMoon /></div>
    )
}

export default ToggleTheme