export interface TeamInTable {
  'position': number;
  'team': {
    'id': number,
    'name': string,
    'crestUrl': string
  };
  'playedGames': number;
  'form': string;
  'won': number;
  'draw': number;
  'lost': number;
  'points': number;
  'goalsFor': number;
  'goalsAgainst': number;
  'goalDifference': number;
}

export type StandingsResponse = {
  standings: Array<{ group: null | string; stage: string; table: Array<TeamInTable>; }>;
  season: {
    'id': number,
    'startDate': string,
    'endDate': string,
    'currentMatchday': number,
    'winner': null | string
  },
  'filters': {},
  'competition': {
    'id': number,
    'area': {
      'id': number,
      'name': string
    },
    'name': string,
    'code': string,
    'plan': string,
    'lastUpdated': string
  },
};
