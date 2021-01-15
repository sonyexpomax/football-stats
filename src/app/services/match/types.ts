type TResult = {
  wins: number,
  draws: number,
  losses: number
};
export type TMainData = {
  numberOfMatches: number,
  totalGoals: number,
  homeTeam: TResult,
  awayTeam: TResult
};
export type TMatch = {
  'id': number,
  'competition': {
    'id': number,
    'name': string
  },
  'season': {
    'id': number,
    'startDate': string,
    'endDate': string,
    'currentMatchday': number,
    'availableStages': Array<string>,
  },
  'utcDate': string,
  'status': string,
  'minute': number,
  'attendance': number,
  'venue': string,
  'matchday': number,
  'stage': string,
  'group': string,
  'lastUpdated': string,
};
export type MatchResponse = {
  head2head: TMainData,
  match: TMatch,
};
