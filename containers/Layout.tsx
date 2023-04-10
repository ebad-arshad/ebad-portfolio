import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    id: string
}

const Layout: FC<Props> = ({ children, id }) => {
    return (
        <div id={id} className='container mx-auto py-20 border-b border-b-gray/20 px-4 lg:px-14'>{children}</div>
    )
}

export default Layout