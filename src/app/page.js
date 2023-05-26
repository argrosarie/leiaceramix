import Image from 'next/image'
import Cafecito from '../../public/assets/icons/cafecito.png'
import CafecitoBlue from '../../public/assets/icons/cafecitoBlue.png'
import BuyMeACoffe from '../../public/assets/icons/buyme.png'
import Instagram from '../../public/assets/icons/instagram.png'

export default function Home() {
  return (
    <>
      <div className="grid place-content-center min-h-screen bg-gradient-to-br from-stone-100 via-stone-300 to-stone-400 space-y-8">
        <section className="mt-10 flex flex-col items-center justify-center w-full space-y-2">
          <p className="uppercase text-3xl text-gray-500 font-bold text-center">
            Hi! <br />
            It&apos;s Leia Ceramix
          </p>
          <a href="https://instagram.com/leia_ceramix" target="_blank">
            <Image
              src={Instagram}
              width={30}
              height={30}
              alt="Instagram icon"
            />
          </a>
        </section>

        <section className="flex flex-col items-center space-y-1">
          <a
            href="https://cafecito.app/leiaceramix"
            rel="noopener"
            target="_blank"
          >
            <Image
              src={CafecitoBlue}
              alt="Invitame un café en cafecito.app"
              width={160}
              height={41}
            />
          </a>
          <a href="https://www.buymeacoffee.com/leiaceramix" target="_blank">
            <Image
              src={BuyMeACoffe}
              alt="Buy Me a Coffee"
              width={160}
              height={41}
            />
          </a>
        </section>
        <p className="grid place-content-center text-base text-slate-500 font-bold">
          Sitio en construcción ⚠️
        </p>
      </div>
    </>
  )
}
