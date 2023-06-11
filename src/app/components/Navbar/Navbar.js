'use client'

import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('/')
  const [scrollY, setScrollY] = useState(0)
  const [navbarBackground, setNavbarBackground] = useState('transparent')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const shouldNavbarBeOpaque = scrollY > 0
    setNavbarBackground(
      shouldNavbarBeOpaque
        ? 'bg-gradient-to-br from-stone-100 via-stone-300 to-stone-400'
        : 'transparent',
    )
  }, [scrollY])

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about' },
  ]

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <button
        key={index}
        onClick={() => {
          router.push(item.path)
          setCurrentPage(item.path)
          setIsOpen(false)
        }}
        className={`text-gray-500 hover:text-gray-700 ${
          currentPage === item.path
            ? 'bg-slate-500 text-white hover:text-white'
            : ''
        }  my-1 rounded-md p-1 bg-gray-200 md:px-2`}
      >
        {item.label}
      </button>
    ))
  }
  // isOpen ? 'bg-transparent/50' : 'bg-transparent h-14'
  return (
    <nav
      // className={`fixed z-10 w-full transition-colors duration-500 ${navbarBackground}`}
      className={`bg-stone-300 fixed z-10 w-full ${
        isOpen ? 'bg-transparent/50' : 'bg-transparent h-14'
      } ${navbarBackground ? 'transition-colors duration-500' : ''} `}
    >
      <div className="flex items-center justify-between px-4 py-3 md:pl-10 lg:pl-20">
        <button
          onClick={() => router.push('/')}
          className={`btn btn-ghost text-xl font-extralight md:text-2xl md:py-2${
            isOpen ? 'text-white' : 'text-black '
          }`}
        >
          Leia Ceramix
        </button>

        <div className="flex md:hidden">
          <button
            onClick={handleToggleMenu}
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 " />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 pr-10 lg:pr-20">
          {renderMenuItems()}
        </div>
      </div>
      {isOpen && (
        <div className="ml-4 pt-2 pb-4 md:hidden flex flex-col items-start text-lg ">
          {renderMenuItems()}
        </div>
      )}
    </nav>
  )
}

export default Navbar
