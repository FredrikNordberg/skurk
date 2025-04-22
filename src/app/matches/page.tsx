const matches = [
  {
    date: "2025-04-01",
    opponent: "TEAM WIPE",
    map: "Dust2",
    score: "4 - 16",
    comment: "Simba AFK hela CT-sidan",
  },
  {
    date: "2025-04-02",
    opponent: "Clan Vortex",
    map: "Inferno",
    score: "6 - 16",
    comment: "B-spawn varje runda",
  },
  {
    date: "2025-04-03",
    opponent: "HEADSHOT MASTERS",
    map: "Mirage",
    score: "2 - 16",
    comment: "RaZz flashade hela laget",
  },
  {
    date: "2025-04-17",
    opponent: "MouseOff",
    map: "Vertigo",
    score: "16 - 14",
    comment:
      "Motståndaren trodde det var bo3 warmup, tog det inte seriöst. Vi trodde det var final.",
  },
  {
    date: "2025-04-04",
    opponent: "NoScope Elite",
    map: "Anubis",
    score: "3 - 16",
    comment: "S!CK tappade internet",
  },
  {
    date: "2025-04-05",
    opponent: "Globalbots",
    map: "Overpass",
    score: "0 - 16",
    comment: "Vi glömde att köpa",
  },
  {
    date: "2025-04-06",
    opponent: "Team Teabag",
    map: "Vertigo",
    score: "1 - 16",
    comment: "Alla ramlade av byggnaden",
  },
  {
    date: "2025-04-07",
    opponent: "Clutch K1ngz",
    map: "Dust2",
    score: "5 - 16",
    comment: "ZeroX hade musen upp och ner",
  },
  {
    date: "2025-04-08",
    opponent: "Friendly Fire",
    map: "Nuke",
    score: "3 - 16",
    comment: "Y-Drago wallbangade bara teammates",
  },
  {
    date: "2025-04-16",
    opponent: "Team Disconnect",
    map: "Mirage",
    score: "16 - 3",
    comment:
      "Deras internet dog i runda 5 – blev 5v2 resten av matchen, vi körde ändå full eco.",
  },
  {
    date: "2025-04-09",
    opponent: "Eco Rush",
    map: "Ancient",
    score: "2 - 16",
    comment: "Köpte bara Scouts",
  },
  {
    date: "2025-04-10",
    opponent: "Tryharders+",
    map: "Inferno",
    score: "6 - 16",
    comment: "Vi tog bara A – dom var på B",
  },
  
  {
    date: "2025-04-11",
    opponent: "Silver Elite Club",
    map: "Mirage",
    score: "1 - 16",
    comment: "Dom var 4. Vi var 5.",
  },
  {
    date: "2025-04-12",
    opponent: "Headset Heroes",
    map: "Vertigo",
    score: "0 - 16",
    comment: "Skrattade för mycket för att spela",
  },
  {
    date: "2025-04-13",
    opponent: "Eco Legends",
    map: "Overpass",
    score: "3 - 16",
    comment: "Alla dog i molotov",
  },
  {
    date: "2025-04-14",
    opponent: "OneTapZ",
    map: "Dust2",
    score: "5 - 16",
    comment: "Dom knivade oss sista rundan",
  },
  {
    date: "2025-04-15",
    opponent: "Team CTRL+F4",
    map: "Nuke",
    score: "2 - 16",
    comment: "Y-Drago ragequitta vid 0-2",
  },
  
  
];

const MatchesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        Match History (aka The Pain Log)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-zinc-800 text-white p-4 rounded-xl shadow-md"
          >
            <div className="flex justify-between mb-2 text-sm text-gray-400">
              <span>{match.date}</span>
              <span className={`italic ${match.score.startsWith("16") ? "text-green-400" : "text-red-400"}`}>
  {match.score.startsWith("16") ? "Win" : "Lost"}
</span>
            </div>
            <h2 className="text-xl font-semibold text-yellow-300">
              {match.opponent}
            </h2>
            <p className="text-sm text-gray-300 mb-1">
              Map: <span className="text-white">{match.map}</span>
            </p>
            <p className="text-lg font-bold text-red-500 mb-2">
              Score: {match.score}
            </p>
            <p className="text-sm italic text-gray-400">{match.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
