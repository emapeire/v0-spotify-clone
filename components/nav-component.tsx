import Link from 'next/link'

export default function NavComponent() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center">
        <svg
          className="h-6 w-8 mr-2"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        <Link href="/">
          <span className="font-bold text-xl">Spotify</span>
        </Link>
      </div>
      <div className="relative w-64">
        <svg
          className="absolute left-3 top-2 h-5 w-5 text-gray-500"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input className="pl-10 bg-gray-800 rounded-full w-full py-2 text-white" placeholder="Search" type="text" />
      </div>
      <nav className="flex gap-4">
        <Link className="hover:text-green-500" href="/">
          Home
        </Link>
        <Link className="hover:text-green-500" href="#">
          Library
        </Link>
        <Link className="hover:text-green-500" href="#">
          Premium
        </Link>
      </nav>
    </header>
  )
}