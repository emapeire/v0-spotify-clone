import Link from "next/link"

export function HomeComponent() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <div className="flex items-center">
          <svg
            className="h-8 w-8 mr-2"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <span className="font-bold text-xl">Spotify</span>
        </div>
        <div className="relative w-64">
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-gray-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input className="pl-10 bg-gray-800 rounded-full w-full py-2 text-white" placeholder="Search" type="text" />
        </div>
        <nav className="flex gap-4">
          <Link className="hover:text-green-500" href="#">
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
      <main className="flex-1 overflow-auto p-4 bg-gray-900 text-white">
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <img
                alt="Playlist Image"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-2 font-bold">Chill Vibes</h3>
              <p className="text-sm text-gray-400">Relax and unwind with these chill tracks.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between p-4 bg-black text-white">
        <div className="flex items-center gap-4">
          <svg
            className="h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="19 20 9 12 4" />
            <line x1="5" x2="5" y1="19" y2="5" />
          </svg>
          <svg
            className="h-8 w-8"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="10" x2="10" y1="15" y2="9" />
            <line x1="14" x2="14" y1="15" y2="9" />
          </svg>
          <svg
            className="h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="5 4 15 12 20" />
            <line x1="19" x2="19" y1="5" y2="19" />
          </svg>
        </div>
        <div className="flex-1 mx-8">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm">Track Title - Artist Name</span>
            <span className="text-sm">3:21</span>
          </div>
          <div className="relative h-1 bg-gray-800 rounded-full">
            <div
              className="absolute left-0 h-1 bg-green-500 rounded-full"
              style={{
                width: "35%",
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="11 5 6 9 2 15 19" />
            <path d="M15.54 8.46a5 5 0 1 7.07" />
            <path d="M19.07 4.93a10 10 0 1 14.14" />
          </svg>
          <div className="relative w-24 h-1 bg-gray-800 rounded-full">
            <div
              className="absolute left-0 h-1 bg-green-500 rounded-full"
              style={{
                width: "75%",
              }}
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
