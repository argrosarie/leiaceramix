import React from 'react'
import Image from 'next/image'

export default function ModalComponent({ image, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="bg-white rounded-lg p-4">
        <div className="relative">
          <button
            className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Image
            src={image.src}
            alt={image.alt}
            className="max-w-full h-auto rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
