import Link from "next/link";

export default function PlayerComponent() {
  return (
    <footer className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center gap-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-skip-back"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 5v14l-12 -7z"></path>
            <path d="M4 5l0 14"></path>
          </svg>
        </button>
        <button>
          <svg
            className="h-6 w-6"
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
            <circle cx="12" cy="12" r="10" />
            <line x1="10" x2="10" y1="15" y2="9" />
            <line x1="14" x2="14" y1="15" y2="9" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-player-skip-forward"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 5v14l12 -7z"></path>
            <path d="M20 5l0 14"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 mx-8">
        <div className="flex justify-between items-center mb-1">
          <Link href="#">
            <span className="text-sm">Enter Sadman - Metallica</span>
          </Link>
          <span className="text-sm pointer-events-none">5:31</span>
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
        <button>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-volume"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8a5 5 0 0 1 0 8"></path>
            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
          </svg>
        </button>
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
  )
}