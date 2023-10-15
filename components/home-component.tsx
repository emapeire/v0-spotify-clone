import Image from "next/image"
import Link from "next/link"

export function HomeComponent() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 overflow-auto p-4 bg-gray-900 text-white">
        < section className="mb-8">
          <Link href="#">
            <h2 className="font-bold text-2xl mb-4">Featured Albums</h2>
          </Link>
          <div className="grid grid-cols-4 gap-4">
            <Link href="#">
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
                  priority={true}
                />
                <h3 className="mt-2 font-bold">Metallica</h3>
                <p className="text-sm text-gray-400">
                  1991
                </p>
              </div>
            </Link>
          </div>
        </ section>
      </main >
    </div >
  )
}
