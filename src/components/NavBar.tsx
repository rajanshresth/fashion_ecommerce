"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import {Button} from "@/components/ui/button";
import { Input } from '@/components/ui/input'
import { BiUserCircle } from 'react-icons/bi'

export default function Component() {
  return (
    <div className="flex h-16 items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
            <svg
              className=" h-6 w-6 text-gray-800 dark:text-gray-200"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
              <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
            </svg>
            <span className="sr-only">Fashion Store</span>
        </Link>
        <form className="relative">
          <svg
            className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <Input
            className="pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search fashion items..."
            type="search"
          />
        </form>
      </div>
      <NavLinks />
      <div className='flex gap-2'> 
        
        <Button size="icon" variant="ghost">
          <Link href={'/user'}>
            <BiUserCircle className=" h-6 w-6 text-gray-800 dark:text-gray-200" />
            <span className="sr-only">User</span>
          </Link> 
        </Button>
        <Button size="icon" variant="ghost">
          <Link href={'/cart'}>
                <svg
                  className=" h-6 w-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span className="sr-only">Shopping Cart</span>
          </Link>
        </Button>
      </div>
    </div>
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
    <nav className="hidden md:flex space-x-4 font-bold font-xl">
        {links.map((link)=>(
          <div key={link.href}>
            <Link 
              className={`text-gray-800 ${currentPathname===link.href ? 'underline dark:text-gray-200' : 'hover:text-blue-500 hover:underline'}`}
              href={link.href}
            >
              {link.label}
            </Link>
          </div>
      ))}
      </nav>
  )
}
