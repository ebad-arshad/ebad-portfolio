import SectionHeading from '@/components/SectionHeading'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTablet } from '@fortawesome/free-solid-svg-icons'

const Services: FC = () => {

    return (
        <div className='flex flex-col items-center text-black dark:text-white'>
            <SectionHeading title='What I Do?' light_title='before:content-["SERVICES"]' />
            <div className='grid grid-cols-1 gap-6'>
                <div className='transitions flex p-5 bg-black items-start hover:bg-primary cursor-pointer select-none'>
                    <div className='text-4xl mr-5'>
                        <FontAwesomeIcon className='text-white' icon={faTablet} />
                    </div>
                    <div className='flex flex-col justify-between gap-4'>
                        <p className='text-lg'>Web Design</p>
                        <p className='text-gray text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='transitions duration-300 flex p-5 bg-black items-start hover:bg-primary cursor-pointer select-none'>
                    <div className='text-4xl mr-5'>
                        <FontAwesomeIcon className='text-white' icon={faTablet} />
                    </div>
                    <div className='flex flex-col justify-between gap-4'>
                        <p className='text-lg'>Web Design</p>
                        <p className='text-gray text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services