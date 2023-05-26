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

  return (
    <nav className="bg-base-100 fixed z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <button
            onClick={() => router.push('/')}
            className="btn btn-ghost text-xl"
          >
            Leia Ceramix
          </button>
        </div>
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
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-gray-700"
          >
            Home
          </button>

          <button
            onClick={() => router.push('/contact')}
            className="text-gray-500 hover:text-gray-700"
          >
            Contact
          </button>

          <button
            onClick={() => router.push('/about')}
            className="text-gray-500 hover:text-gray-700"
          >
            About
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="px-2 pt-2 pb-4 md:hidden">
          <button
            onClick={() => router.push('/')}
            className="block mb-2 text-gray-500 hover:text-gray-700"
          >
            Home
          </button>
          <button
            onClick={() => router.push('/contact')}
            className="block mb-2 text-gray-500 hover:text-gray-700"
          >
            Contact
          </button>
          <button
            onClick={() => router.push('/about')}
            className="block mb-2 text-gray-500 hover:text-gray-700"
          >
            About
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
