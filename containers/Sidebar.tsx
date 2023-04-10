import { user_links, Link, user_name } from '@/constant/constant'
import Image from 'next/image'
import React, { FC, ReactNode, useState } from 'react'
import profile_pic from '../assets/images/profile_image.png'
import { AiOutlineHome, AiFillIdcard } from 'react-icons/ai'
import { TfiPanel } from 'react-icons/tfi'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'

const sidebar_list = [
    { name: 'HOME', icon: <AiOutlineHome /> },
    { name: 'ABOUT ME', icon: <AiFillIdcard /> },
    { name: 'SERVICES', icon: <TfiPanel /> },
    { name: 'PORTFOLIO', icon: <BsFillJournalBookmarkFill /> },
    { name: 'CONTACT ME', icon: <FaMapMarkedAlt /> },
]

const Sidebar: FC = () => {

    const [active_sidebar, set_active_sidebar] = useState<string>('HOME')

    return (
        <div className='relative flex flex-col justify-between h-screen overflow-hidden pt-16 pb-4'>
            <div>
                <div className='flex flex-col items-center'>
                    <div className='absolute -z-10 w-72 h-72 -left-[30px] -top-[160px] bg-primary rounded-full' />
                    <div className='p-1 bg-white rounded-full'>
                        <Image width={100} height={100} src={profile_pic} alt='profile' />
                    </div>
                    <p className='tracking-widest text-white font-extralight text-sm mt-3'>{user_name.slice(0, user_name.lastIndexOf(' '))}</p>
                </div>
                <ul className='mt-14'>
                    {sidebar_list.map((item: { name: string, icon: ReactNode }, index: number) => {
                        return <li key={index}>
                            <a
                                onClick={() => set_active_sidebar(item.name)}
                                href={`#${item.name.split(' ').join('_')}`}
                                className={`${active_sidebar === item.name ? 'text-primary' : 'text-gray'} cursor-pointer transition duration-300 flex items-center hover:text-white w-full py-4 ${index === sidebar_list.length - 1 ? '' : 'border-b border-gray/20'}`}
                            >
                                <span className='text-xl pl-6 pr-2'>{item.icon}</span>
                                <p className='text-[12px] tracking-widest'>{item.name}</p>
                            </a>
                        </li>
                    }
                    )}
                </ul>
            </div>
            <ul className='flex text-white justify-center gap-4'>
                {user_links?.map(({ link, social_media }: Link, index: number) => {
                    return <li key={index} className='hover:text-primary transition duration-300'><a target='_blank' href={link}>{social_media}</a></li>
                })}
            </ul>
        </div >
    )
}

export default Sidebar