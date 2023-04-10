import React, { FC, ReactNode, createContext, useState, useEffect } from 'react'

interface Props {
    children: ReactNode;
}

export interface ContextType {
    navbar: boolean;
    set_navbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const nav_context = createContext<ContextType | null>(null)

const ContextProvider: FC<Props> = ({ children }) => {
    const [is_nav_open, set_is_nav_open] = useState<boolean>(false)
    return (
        <nav_context.Provider value={{ navbar: is_nav_open, set_navbar: set_is_nav_open }}>
            {children}
        </nav_context.Provider >
    )
}

export default ContextProvider