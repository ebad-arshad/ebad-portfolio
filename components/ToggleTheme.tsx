import React, { FC } from 'react'
import { FaMoon } from 'react-icons/fa'

const ToggleTheme: FC = () => {
    return (
        <div className='fixed z-50 top-4 right-4 bg-white rounded-full text-black p-3 text-lg cursor-pointer'><FaMoon /></div>
    )
}

export default ToggleTheme