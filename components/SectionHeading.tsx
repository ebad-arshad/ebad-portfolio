import React, { FC } from 'react'

interface Props {
    title: string;
    light_title: string;
}

const SectionHeading: FC<Props> = ({ title, light_title }) => {
    return (
        <div className='w-full pb-16'>
            <h1 className={`${light_title} w-full before:opacity-20 before:text-5xl md:before:text-7xl
            before:font-bold before:text-gray before:absolute before:w-fit flex flex-col items-center justify-center text-2xl md:text-3xl font-bold relative
            `}>
                {title}
                <span className='border border-primary absolute -bottom-2 w-14' />
            </h1>
        </div>
    )
}

export default SectionHeading