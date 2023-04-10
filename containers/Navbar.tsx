import { user_name } from '@/constant/constant'
import { ContextType, nav_context } from '@/providers/ContextProvider'
import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

  const { navbar, set_navbar } = useContext(nav_context) as ContextType

  return (
    <div className='fixed top-0 lg:hidden left-0 z-30 backdrop-blur-sm w-full bg-white/70 dark:bg-sidebar/70 text-black dark:text-white'>
      <div className='flex justify-between p-4 text-2xl container mx-auto'>
        <p>
          {user_name.split(' ')[0]}
        </p>

        <div className='cursor-pointer grid place-items-center' onClick={() => set_navbar(e => !e)}>
          {navbar ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>
      </div>
    </div>
  )
}

export default Navbar