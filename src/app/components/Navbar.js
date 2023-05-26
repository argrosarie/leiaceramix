'use client'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100">
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">My Website</a>
//       </div>
//       <div className="flex-none">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-base-100">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <Link href="/">
            <a className="btn btn-ghost text-xl">My Website</a>
          </Link>
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
              //   <FiX className="w-6 h-6" />
              <div>FIX</div>
            ) : (
              //   <FiMenu className="w-6 h-6" />
              <div>FiMenu</div>
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-700">Home</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 hover:text-gray-700">Contact</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-700">About</a>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="px-2 pt-2 pb-4 md:hidden">
          <Link
            href="/"
            className="block mb-2 text-gray-500 hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="block mb-2 text-gray-500 hover:text-gray-700"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="block mb-2 text-gray-500 hover:text-gray-700"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
