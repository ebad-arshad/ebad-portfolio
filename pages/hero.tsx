import React, { FC } from 'react'
import profile_image from '../assets/images/profile_image.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { user_name, typewriter, user_links } from '../constant/constant'

const Hero: FC = () => {
    return (
        <div className={`overflow-hidden grid place-items-center w-screen h-screen bg-[url('../assets/images/hero-pic.jpg')] bg-top bg-cover`}>
            <section className='flex flex-col items-center text-white'>
                <div className='w-48 h-48'>
                    <Image className='object-cover' width={500} height={500} src={profile_image} alt='Profile Image' />
                </div>
                <p className='font-light mt-7 text-2xl sm:text-4xl lg:text-5xl text-center uppercase sm:tracking-widest'>{user_name}</p>
                <p className='uppercase flex gap-1 m-4 text-sm sm:text-lg'>I am
                    <Typewriter
                        options={{
                            strings: typewriter,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <ul className='flex gap-2'>
                    {user_links.map((link, i) =>
                        (<li key={i} className='bg-green p-3 rounded-full hover:opacity-90 cursor-pointer transition duration-200'><a target='_blank' href={link.link}>{link.social_media}</a></li>)
                    )}
                </ul>
            </section>
        </div>
    )
}

export default Hero