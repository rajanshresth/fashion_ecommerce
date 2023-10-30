"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'

const NavBar = () => {
  return (
    <nav className='border-b mb-5 px-5 py-5 font-bold flex justify-between items-center'>
          <div className='font-bold text-3xl underline-offset-8 '>
            <Link href='/'>
              Fash.e
            </Link>
          </div>
          <NavLinks />
          <div className='flex space-x-16 lg:pr-10'>
            <Link href='/search'>
              <AiOutlineSearch size={25} />
            </Link>
            <Link href='/login'>
              <BiUserCircle size={25} />
            </Link>
            <Link href='/cart'>
              <AiOutlineShoppingCart size={25} />
            </Link>
          </div>
    </nav>
  )
}


const NavLinks=()=>{
  const currentPathname=usePathname()
  const links= [
    {label: "Women's", href: '/women'},
    {label: "Men's", href: '/men'},
    {label: "Kid's", href: '/kid'},
  ]
  return(
    <ul className="flex gap-3 text-xl font-semibold">
      {links.map((link)=>(
        <li key={link.href}>
          <Link 
            className={`px-4 py-2 ${currentPathname===link.href ? 'font-bold underline' : 'transition duration-150 ease-out hover:ease-in hover:underline hover:font-bold'}`}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar