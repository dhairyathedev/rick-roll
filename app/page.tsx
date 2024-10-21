import Image from 'next/image'

export default function RickRoll() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        <source src="https://ia600605.us.archive.org/18/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Rick Astley"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute bottom-4 left-4 right-4 text-center text-white bg-black bg-opacity-50 p-2 rounded">
        <p className="text-lg font-bold">You&apos;ve been Rick Rolled!</p>
      </div>
    </div>
  )
}