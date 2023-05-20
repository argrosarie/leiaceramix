import Image from 'next/image';
import Cafecito from "../../public/assets/icons/cafecito.png";

export default function Home() {
  return (
    <>
    <div className='grid place-content-center mt-5'>
      <p className='uppercase text-2xl'>Hi! It&apos;s Leia</p>
      <div>
      <a href='https://cafecito.app/leiaceramix' rel='noopener' target='_blank'>
        <div className='w-full h-full'>
        <Image
        src={Cafecito} 
        alt='Invitame un café en cafecito.app'
        
         />
         </div>
        </a>
      </div>
    </div>
    </>
  )
}
