import { ReactNode, FC } from 'react'


interface Props {
    children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
    return (
        <a href='ebad-resume.pdf' download className='cursor-pointer text-center select-none bg-primary outline-none py-3 text-sm tracking-widest w-40 hover:bg-black dark:hover:bg-white text-white dark:hover:text-primary transition duration-300
        shadow-[4px_4px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_var(--theme-primary)]
        dark:shadow-[4px_4px_0px_0px_#fff] dark:hover:shadow-[4px_4px_0px_0px_var(--theme-primary)]
        '>{children}</a>
    )
}

export default Button