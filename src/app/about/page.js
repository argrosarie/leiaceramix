import Rosario from '../components/Background/page'

export default function About() {
  return (
    <div className="h-full flex flex-col justify-start bg-gradient-to-br from-stone-100 via-stone-300 to-stone-400 text-center pt-16 md:pt-24 space-y-4 md:space-y-8">
      <h1 className="uppercase text-slate-900 font-bold text-2xl md:text-3xl">
        About Leia
      </h1>
      <section className="text-left pb-8 space-y-4 px-6 md:px-14 md:text-justify lg:px-36 lg:min-h-screen">
        <p>
          Leia Green, a queer artist and the creative force behind Leia Ceramix,
          hails from the city of Nashville, Tennessee, USA, but has now found
          their home in Corrientes, Argentina. With a playful spirit and a
          passion for ceramics, Leia is honing their craft at La Pépinière, the
          beloved local ceramics studio.
        </p>

        <p>
          Leia&apos;s talent has garnered recognition, with their artwork being
          showcased in the museum &quot;Casa Iberá&quot; in November 2022. In
          2023, Leia set out on the journey of establishing their own business,
          driven by their passion for ceramics.{' '}
        </p>

        <p>
          The name &quot;Leia Ceramix&quot; pays homage to the Spanish use of
          the letter &quot;X&quot; for inclusive language, eliminating gender
          distinctions. Inspired by the power of inclusivity and gender
          diversity, Leia Ceramix is a celebration of their own genderqueer
          identity and the connections that transcend borders, societal norms,
          and linguistic barriers.{' '}
        </p>

        <p>
          When it comes to Leia&apos;s artistic style, you will find a blend of
          muted tones and blooming colors with a sprinkle of quirkiness and a
          touch of playful charm, their creations radiate a contagious sense of
          queer joy. Each piece tells a unique story and carries a touch of
          Leia&apos;s artistic vision.{' '}
        </p>

        <p>
          Embark on a thrilling artistic adventure and join Leia Green on this
          journey! Wrap your hands around a cozy, one-of-a-kind mug, turning
          your morning routines into delightful rituals. Adorn yourself with a
          quirky brooch, a radiant symbol of your unique individuality. Step
          into the mesmerizing world of Leia Ceramix and immerse yourself in the
          playful spirit that Leia lovingly weaves into their craft, crafting
          daily moments of pure joy.
        </p>
      </section>
      <Rosario />
    </div>
  )
}
