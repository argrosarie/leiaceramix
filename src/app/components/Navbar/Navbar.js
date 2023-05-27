'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

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
        onClick={() => router.push(item.path)}
        className="text-gray-500 hover:text-gray-700"
      >
        {item.label}
      </button>
    ))
  }

  return (
    <nav className="bg-base-100 fixed z-10 w-full bg-transparent/10">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => router.push('/')}
          className="btn btn-ghost text-xl font-extralight "
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
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 mx-6">{renderMenuItems()}</div>
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
