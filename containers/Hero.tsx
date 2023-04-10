import React, { FC } from 'react'
import profile_image from '@/assets/images/profile_image.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { user_name, typewriter, user_links, Link } from '@/constant/constant'
import { FiChevronDown } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero: FC = () => {
    return (
        <div id='HOME' className={`overflow-hidden grid place-items-center max-w-screen h-screen bg-[url('../assets/images/hero_pic.jpg')] bg-top bg-cover bg-no-repeat`}>
            <div className='flex flex-col items-center text-white'>
                <div className='w-48 h-48 cursor-pointer'>
                    <Image className='object-cover' width={500} height={500} src={profile_image} alt='Profile Image' />
                </div>
                <p className='font-light mt-7 text-2xl sm:text-4xl lg:text-5xl text-center uppercase sm:tracking-widest'>{user_name}</p>
                <div className='uppercase flex gap-1 m-4 text-sm sm:text-lg'>I am
                    <Typewriter
                        options={{
                            strings: typewriter,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <ul className='flex gap-2'>
                    {user_links.map(({ link, social_media }: Link, i: number) =>
                        (<li key={i} className='bg-primary p-3 rounded-full hover:opacity-90 cursor-pointer transition duration-200'><a target='_blank' href={link}>{social_media}</a></li>)
                    )}
                </ul>
            </div>
            <motion.a
                initial={{ y: 0 }}
                animate={{ y: 40 }}
                transition={{ repeat: Infinity, duration: 2 }}
                href='#ABOUT_ME'
                className='cursor-pointer text-white text-3xl absolute bottom-14'><FiChevronDown />
            </motion.a>
        </div >
    )
}



export default Hero