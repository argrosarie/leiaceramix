'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AroLagrima from '../../../public/assets/images/aro-lagrima.jpeg'
import AroLapices from '../../../public/assets/images/aro-lapices.jpeg'
import AroCorazones from '../../../public/assets/images/aro-corazones.jpeg'
import AroFantasmas from '../../../public/assets/images/aro-fantasmas.jpeg'
import AroGay from '../../../public/assets/images/aro-gay.jpeg'
import Taza from '../../../public/assets/images/taza.jpeg'
import ModalComponent from '../components/Card/page'

export default function Gallery() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }
  const images = [
    { src: AroLagrima, alt: 'Aros lágrima' },
    { src: AroLapices, alt: 'Aros lápiz' },
    { src: AroCorazones, alt: 'Aros corazón' },
    { src: AroFantasmas, alt: 'Aros Fantasma' },
    { src: AroGay, alt: 'Aro Orgullo' },
    { src: Taza, alt: 'Taza' },
  ]
  return (
    <div className="min-h-screen grid place-content-center bg-gradient-to-br from-stone-100 via-stone-300 to-stone-400 text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-14 md:px-20 lg:px-32 lg:my-16 xl:my-20">
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image)}>
            <Image
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ModalComponent image={selectedImage} onClose={closeModal} />
      )}
    </div>
  )
}
