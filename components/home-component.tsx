import Image from "next/image"
import Link from "next/link"

export function HomeComponent() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto p-4 bg-gray-900 text-white">
        <section className="mb-8">
          <h2 className="font-bold text-2xl mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Image
                alt="Playlist Image"
                height="500"
                src="/img/metallica-cover.png"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width="500"
              />
              <h3 className="mt-2 font-bold">Metallica</h3>
              <p className="text-sm text-gray-400">
                Trash Metal.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
