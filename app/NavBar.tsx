'use client'

import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation';




const NavBar = () => {

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]

    const pathname = usePathname();

    console.log(pathname)

    return (
        <nav className='flex items-center space-x-6 border-b-2 border-gray-300 p-5 h-14'>
            <Link href="/">
                <AiFillBug size={25} />
            </Link>

            <ul className='flex space-x-6'>
                {links.map((item) => (
                    <Link
                        className={`${pathname === item.href? 'text-zinc-900': 'text-zinc-500' } hover:text-zinc-800 transition-colors`}
                        key={item.href}
                        href={item.href}>
                        {item.label}
                    </Link>))}
            </ul>
        </nav>
    )
}

export default NavBar