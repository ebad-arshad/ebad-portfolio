import React, { FC } from 'react'
import SectionHeading from '../components/SectionHeading'
import { user_name, user_description, user_title_skill, user_data } from '../constant/constant'
import Button from '@/components/Button'

const AboutMe: FC = () => {
    return (
        <div className='flex flex-col items-center text-white'>
            <SectionHeading title='Know Me More' light_title='before:content-["ABOUT_ME"]' />
            <div className='flex flex-col lg:flex-row lg:gap-10'>
                <div className='text-center lg:text-start text-gray'>
                    <div className='font-bold text-3xl text-white text-center lg:text-start mb-5'>
                        <h1>I&apos;m <span className='text-primary'>{user_name},</span> {user_title_skill}</h1>
                    </div>
                    {user_description?.map((description: string, indx: number) => (
                        <span key={indx}>
                            {description}
                            < br />
                            < br />
                        </span>
                    ))}
                </div>
                <ul className='w-full flex flex-col'>
                    <li className='py-4 border-b border-b-gray/20'>Name: <span>{user_data.name}</span></li>
                    <li className='py-4 border-b border-b-gray/20'>Email: <a className='text-primary' href={`mailto:${user_data.email}`}>{user_data.email}</a></li>
                    <li className='py-4 border-b border-b-gray/20'>Age: <span>{user_data.age}</span></li>
                    <li className='py-4'>From: <span>{user_data.from}</span></li>
                    <Button>Download CV</Button>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe