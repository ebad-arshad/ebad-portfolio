import React, { FC, useEffect, useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { motion } from 'framer-motion'
import { Divider } from '@mantine/core'

const color_palettes = ['bg-[#6610f2]', 'bg-[#007bff]', 'bg-[#6f42c1]', 'bg-[#17a2b8]', 'bg-[#dc3545]', 'bg-[#e83e8c]', 'bg-[#28a745]', 'bg-[#ffc107]', 'bg-[#fd7e14]', 'bg-[#795548]']

const ToggleColorTheme: FC = () => {

    const [color_palette_box, set_color_palette_box] = useState<boolean>(false)

    const set_color: (x: string) => void = (color: string) => {
        document.documentElement.style.setProperty('--theme-primary', color);
    }

    const close_palette: () => void = () => {
        set_color_palette_box(false)
    }

    return (
        <div
            className={`fixed top-[30%] ${!color_palette_box ? '-right-[193px]' : 'right-0'} z-50 flex`}>
            <div
                className='grid place-items-center w-9 h-9'>
                <IoMdSettings
                    className='rounded-tl-lg rounded-bl-lg bg-white text-black p-2 text-lg cursor-pointer w-[inherit] h-[inherit]'
                    onClick={() => set_color_palette_box(e => e ? false : true)} />
            </div>
            <div
                className='text-black bg-white p-4 w-48'
            >
                Color Switcher
                <Divider my="sm" />
                <ul className='grid grid-cols-5 gap-y-4'>
                    {color_palettes.map((color: string, indx: number) => {
                        return <li
                            onClick={() => { set_color(color.slice(4, -1)); close_palette() }}
                            className={`cursor-pointer w-6 h-6 rounded-full ${color}`} key={indx}></li>
                    })}
                </ul>
                <Divider my="sm" />
                <button onClick={() => { set_color('#20c997'); close_palette() }} className='cursor-pointer bg-[#20c997] text-white w-full py-2'>Reset Default Teal</button>
            </div>
        </div >
    )
}

export default ToggleColorTheme