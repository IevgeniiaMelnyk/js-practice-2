const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));

console.log(upatedPlayers)

const countries = [
    {
        flags: { svg: 'aaa', png: 'bbb' },
        name: { official: 'zzz', abr: 'ccc' },
        capital: 'capital',
        population: 'population',
        languages: 'language'
    },
    {
        flags: { svg: 'aaa', png: 'bbb' },
        name: { official: 'zzz', abr: 'ccc' },
        capital: 'capital',
        population: 'population',
        languages: 'language'
    },
    {
        flags: { svg: 'aaa', png: 'bbb' },
        name: { official: 'zzz', abr: 'ccc' },
        capital: 'capital',
        population: 'population',
        languages: 'language'
    }
]

const upatedCountries = countries.map(country => ({
  ...country,
    flags: country.flags.svg,
    name: country.name.official
}));

console.log(upatedCountries)