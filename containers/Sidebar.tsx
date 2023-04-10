import { user_links, Link, user_name } from '@/constant/constant'
import Image from 'next/image'
import React, { FC, ReactNode, useContext, useState, useEffect } from 'react'
import profile_pic from '../assets/images/profile_image.png'
import { AiOutlineHome, AiFillIdcard } from 'react-icons/ai'
import { TfiPanel } from 'react-icons/tfi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { ContextType, nav_context } from '@/providers/ContextProvider'
import { AnimatePresence, motion } from 'framer-motion'

const sidebar_list = [
    { name: 'HOME', icon: <AiOutlineHome /> },
    { name: 'ABOUT ME', icon: <AiFillIdcard /> },
    { name: 'SERVICES', icon: <TfiPanel /> },
    { name: 'PORTFOLIO', icon: <BsFillJournalBookmarkFill /> },
    { name: 'CONTACT ME', icon: <FaMapMarkedAlt /> },
]

const Sidebar: FC = () => {

    const { navbar, set_navbar } = useContext(nav_context) as ContextType
    const [inner_width, set_inner_width] = useState<boolean>(true)
    const [active_sidebar, set_active_sidebar] = useState<string>('HOME')

    useEffect(() => {
        const hide_nav = () => {
            if (innerWidth < 1024) set_inner_width(false)
            else {
                set_inner_width(true);
                set_navbar(false)
            }
        }
        hide_nav()
        addEventListener('resize', hide_nav)
        return () => removeEventListener('resize', hide_nav)
    }, [set_navbar])

    return (
        <AnimatePresence>
            {(navbar || inner_width) && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'tween', duration: .4 }}
                    exit={{ x: '-100%' }}
                    className={`h-screen fixed top-0 left-0 w-full md:w-[250px] flex flex-col justify-between overflow-hidden bg-white dark:bg-sidebar pt-16 pb-4 z-[9999]`}>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='absolute -z-10 w-72 h-72 md:-left-[30px] -top-[150px] md:-top-[160px] bg-primary rounded-full' />
                            <div className='p-1 bg-white rounded-full'>
                                <Image width={100} height={100} src={profile_pic} alt='profile' />
                            </div>
                            <p className='tracking-widest text-black dark:text-white font-extralight text-sm mt-3'>{user_name.slice(0, user_name.lastIndexOf(' '))}</p>
                        </div>
                        <ul className='mt-14'>
                            {sidebar_list.map((item: { name: string, icon: ReactNode }, index: number) => {
                                return <li key={index}>
                                    <a
                                        onClick={() => { set_active_sidebar(item.name); set_navbar(false) }}
                                        href={`#${item.name.split(' ').join('_')}`}
                                        className={`${active_sidebar === item.name ? 'text-primary' : 'text-gray'} cursor-pointer transition duration-300 flex items-center hover:text-black dark:hover:text-white w-full py-4 ${index === sidebar_list.length - 1 ? '' : 'border-b border-gray/20'}`}
                                    >
                                        <span className='text-xl pl-6 pr-2'>{item.icon}</span>
                                        <p className='text-[12px] tracking-widest'>{item.name}</p>
                                    </a>
                                </li>
                            }
                            )}
                        </ul>
                    </div>
                    <ul className='flex text-black dark:text-white justify-center gap-4'>
                        {user_links?.map(({ link, social_media }: Link, index: number) => {
                            return <li key={index} className='hover:text-primary transition duration-300'><a target='_blank' href={link}>{social_media}</a></li>
                        })}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Sidebar