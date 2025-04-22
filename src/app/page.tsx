import Link from "next/link"

const HomePage = () => {
  return (
    <div className="relative bg-zinc-900 text-white min-h-screen flex items-center justify-center px-4">
      

      <div className="z-10 text-center max-w-xl pb-100">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wide">TEAM SKURK</h1>
        <p className="text-lg text-gray-300 mb-6">
          Silver since day one. Tactical chaos, technical issues, and accidental knife kills – we are SKURK.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/roster"
            className="bg-yellow-400 text-zinc-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            View Roster
          </Link>
          <a
            href="https://discord.gg/skurk" // ändra till riktig invite om du vill
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-zinc-900 transition"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage
