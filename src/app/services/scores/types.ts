export type Referee =  {
  'id': number,
  'name': string,
  'role': string,
  'nationality': string
};

export interface Score {
  'id': number;
  'season': {
    'id': number,
    'startDate': string,
    'endDate': string,
    'currentMatchday': number
  };
  'utcDate': string;
  'status': string;
  'matchday': 1;
  'stage': string;
  'group': string;
  'lastUpdated': string;
  'odds': {
    'msg': string
  };
  'score': {
    'winner': string,
    'duration': string,
    'fullTime': {
      'homeTeam': number,
      'awayTeam': number
    },
    'halfTime': {
      'homeTeam': number,
      'awayTeam': number
    },
    'extraTime': {
      'homeTeam': null | string,
      'awayTeam': null | string
    },
    'penalties': {
      'homeTeam': null | string,
      'awayTeam': null | string
    }
  };
  'homeTeam': {
    'id': number,
    'name': string
  };
  'awayTeam': {
    'id': number,
    'name': string
  };
  'referees': Array<Referee>;
}

export type ScoresResponse = {
  'count': number,
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
    'lastUpdated': string,
  },
  'matches': Array<Score>
};
