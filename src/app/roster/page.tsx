const roster = [
  {
    name: "YellowDragon3532",
    role: "The Strat Whisperer",
    country: "Portugal/Italien/Brasilien/Sverige",
    image: "/roster/yd.png",
    skills: ["Wallhack", "Aimbot", "Leadership"],
  },
  {
    name: "ZeroX",
    role: "Damage Dealer Deluxe",
    country: "Grekland/Sverige",
    image: "/roster/ZeroX.png",
    skills: ["Damage Giver", "Granade Switcher", "AWP Missing King"],
  },
  {
    name: "Simba",
    role: "AFK Specialist",
    country: "Iran/Irak/Afghanistan/Saudiarabien/Sverige",
    image: "/roster/simba.png",
    skills: ["AFKs during buy time / First 4 Rounds", "Laughs while defusing in smoke", "Aims at feet"],
  },
  {
    name: "S!CK",
    role: "Tech Issue Enjoyer",
    country: "Sverige",
    image: "/roster/sick.png",
    skills: ["Sudden PC Restart", "Shooting Shadows", "Planting As CT"],
  },
  {
    name: "Vidoqe",
    role: "Last Man Standing Waiting For Kills",
    country: "Finland/Sverige",
    image: "/roster/vidoqe.png",
    skills: ["Top Fragger (in warmup)", "Save King", "Waiting for low hp enemies"],
  },
  {
    name: "RaZz",
    role: "Team Mascot / Meme God",
    country: "Polen/Lettland/Estland/Sverige",
    image: "/roster/razz.png",
    skills: ["Flash Teammates", "Rush B (sometimes)", "Burping Master"],
  },
]

const RosterPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">SKURK</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roster.map((player, index) => (
          <div
            key={index}
            className="bg-zinc-800 text-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="w-full h-64 flex items-center justify-center bg-zinc-900 overflow-hidden">
  <img
    src={player.image}
    alt={player.name}
    className="max-h-full max-w-full object-contain"
  />
</div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{player.name}</h2>
              <p className="text-yellow-400 mb-1">{player.role}</p>
              <p className="text-sm mb-3">{player.country}</p>

              <div>
                <h3 className="text-sm font-semibold mb-1 text-gray-300">Top Skills:</h3>
                <ul className="list-disc list-inside text-sm text-gray-400">
                  {player.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RosterPage

  