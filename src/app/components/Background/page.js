import Link from 'next/link'

export default function Rosario() {
  return (
    <div className="py-2">
      <p>
        website powered by{' '}
        <Link
          href="https://www.rosariosanchez.tech"
          target="_blank"
          className="underline"
        >
          Rosario
        </Link>{' '}
        🏳️‍🌈
      </p>
    </div>
  )
}
