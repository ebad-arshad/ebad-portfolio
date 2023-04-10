import { ReactNode, FC } from 'react'


interface Props {
    children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
    return (
        <a href='ebad-resume.pdf' download className='cursor-pointer text-center select-none bg-primary outline-none py-3 text-sm tracking-widest w-40 hover:bg-white hover:text-primary transition duration-300
        shadow-[4px_4px_0px_0px_#fff] hover:shadow-[4px_4px_0px_0px_var(--theme-primary)]
        '>{children}</a>
    )
}

export default Button