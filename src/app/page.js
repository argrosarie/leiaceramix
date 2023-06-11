import Image from 'next/image'
import Profile from '../../public/assets/images/profile.jpeg'
import CafecitoBlue from '../../public/assets/icons/cafecitoBlue.png'
import BuyMeACoffe from '../../public/assets/icons/buyme.png'
import Instagram from '../../public/assets/icons/instagram.png'

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-stone-100 via-stone-300 to-stone-400 space-y-8 md:space-x-20 py-20">
        <section className="">
          <div className="">
            <Image
              src={Profile}
              alt="Leia"
              className=" md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
            />
          </div>
        </section>
        <div className="space-y-4 pb-4 md:space-y-8">
          <section className="flex flex-col items-center justify-center w-full space-y-2">
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
            <p className="text-base text-slate-500 font-bold">
              Sitio en construcción ⚠️
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
