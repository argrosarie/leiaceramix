import Image from 'next/image'
import AroLagrima from '../../../public/assets/images/aro-lagrima.jpeg'
import AroLapices from '../../../public/assets/images/aro-lapices.jpeg'
import AroCorazones from '../../../public/assets/images/aro-corazones.jpeg'
import AroFantasmas from '../../../public/assets/images/aro-fantasmas.jpeg'
import AroGay from '../../../public/assets/images/aro-gay.jpeg'
import Taza from '../../../public/assets/images/taza.jpeg'

export default function Gallery() {
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-10 lg:px-32 lg:my-16 xl:my-20">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
