// Mock data for development/testing when API is not available
export const mockMatches = [
  {
    id: 1,
    name: "Team Liquid vs G2 Esports",
    status: "finished",
    begin_at: "2024-12-18T20:00:00Z",
    league: {
      name: "LEC Spring 2024",
      image_url: null
    },
    serie: {
      full_name: "Week 5"
    },
    videogame: {
      name: "League of Legends"
    },
    match_type: "Best of",
    number_of_games: 3,
    opponents: [
      {
        opponent: {
          name: "Team Liquid",
          image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Team_Liquid_2020_logo.svg/200px-Team_Liquid_2020_logo.svg.png"
        }
      },
      {
        opponent: {
          name: "G2 Esports",
          image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/G2_Esports_logo.svg/200px-G2_Esports_logo.svg.png"
        }
      }
    ],
    results: [
      { score: 2 },
      { score: 1 }
    ]
  },
  {
    id: 2,
    name: "FaZe Clan vs Natus Vincere",
    status: "running",
    begin_at: "2024-12-18T22:30:00Z",
    league: {
      name: "BLAST Premier Spring 2024"
    },
    serie: {
      full_name: "Group Stage"
    },
    videogame: {
      name: "CS:GO"
    },
    match_type: "Best of",
    number_of_games: 3,
    opponents: [
      {
        opponent: {
          name: "FaZe Clan",
          image_url: null
        }
      },
      {
        opponent: {
          name: "Natus Vincere",
          image_url: null
        }
      }
    ],
    results: [
      { score: 1 },
      { score: 1 }
    ]
  },
  {
    id: 3,
    name: "T1 vs Gen.G",
    status: "not_started",
    begin_at: "2024-12-19T10:00:00Z",
    league: {
      name: "LCK Spring 2024"
    },
    serie: {
      full_name: "Week 3"
    },
    videogame: {
      name: "League of Legends"
    },
    match_type: "Best of",
    number_of_games: 3,
    opponents: [
      {
        opponent: {
          name: "T1",
          image_url: null
        }
      },
      {
        opponent: {
          name: "Gen.G",
          image_url: null
        }
      }
    ],
    results: []
  },
  {
    id: 4,
    name: "OG vs Team Secret",
    status: "finished",
    begin_at: "2024-12-18T18:00:00Z",
    league: {
      name: "DPC Western Europe"
    },
    serie: {
      full_name: "Division I"
    },
    videogame: {
      name: "Dota 2"
    },
    match_type: "Best of",
    number_of_games: 3,
    opponents: [
      {
        opponent: {
          name: "OG",
          image_url: null
        }
      },
      {
        opponent: {
          name: "Team Secret",
          image_url: null
        }
      }
    ],
    results: [
      { score: 0 },
      { score: 2 }
    ]
  },
  {
    id: 5,
    name: "Cloud9 vs TSM",
    status: "not_started",
    begin_at: "2024-12-19T01:00:00Z",
    league: {
      name: "LCS Spring 2024"
    },
    serie: {
      full_name: "Week 4"
    },
    videogame: {
      name: "League of Legends"
    },
    match_type: "Best of",
    number_of_games: 1,
    opponents: [
      {
        opponent: {
          name: "Cloud9",
          image_url: null
        }
      },
      {
        opponent: {
          name: "TSM",
          image_url: null
        }
      }
    ],
    results: []
  },
  {
    id: 6,
    name: "OpTic Gaming vs The Guard",
    status: "finished",
    begin_at: "2024-12-18T19:30:00Z",
    league: {
      name: "VCT Americas"
    },
    serie: {
      full_name: "Playoffs"
    },
    videogame: {
      name: "Valorant"
    },
    match_type: "Best of",
    number_of_games: 5,
    opponents: [
      {
        opponent: {
          name: "OpTic Gaming",
          image_url: null
        }
      },
      {
        opponent: {
          name: "The Guard",
          image_url: null
        }
      }
    ],
    results: [
      { score: 3 },
      { score: 2 }
    ]
  }
];

export const mockGames = [
  { 
    id: 1, 
    name: "League of Legends",
    slug: "lol",
    logo_url: "https://cdn.pandascore.co/images/league-of-legend/image/image-1561378837713.png"
  },
  { 
    id: 2, 
    name: "CS:GO",
    slug: "csgo",
    logo_url: "https://cdn.pandascore.co/images/csgo/image/image-1561379126259.png"
  },
  { 
    id: 3, 
    name: "Dota 2",
    slug: "dota2",
    logo_url: "https://cdn.pandascore.co/images/dota-2/image/image-1561378948682.png"
  },
  { 
    id: 4, 
    name: "Valorant",
    slug: "valorant",
    logo_url: "https://cdn.pandascore.co/images/valorant/image/image-1590168813321.png"
  },
  { 
    id: 5, 
    name: "Overwatch 2",
    slug: "ow",
    logo_url: "https://cdn.pandascore.co/images/overwatch/image/image-1561379167217.png"
  },
  { 
    id: 6, 
    name: "Rainbow Six Siege",
    slug: "r6siege",
    logo_url: "https://cdn.pandascore.co/images/rainbow-six-siege/image/image-1561379193953.png"
  },
  { 
    id: 7, 
    name: "Rocket League",
    slug: "rl",
    logo_url: "https://cdn.pandascore.co/images/rocket-league/image/image-1561379208530.png"
  },
];
