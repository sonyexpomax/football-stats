export type Conference = 'West' | 'East';
export type Division = 'Central' | 'Atlantic' | 'Northwest' | 'Pacific' | 'Southwest';

export interface Team {
  'id': number;
  'area': {
    'id': number,
    'name': string
  };
  'name': string;
  'shortName': string;
  'tla': string;
  'crestUrl': string;
  'address': string;
  'phone': string;
  'website': string;
  'email': string;
  'founded': number;
  'clubColors': string;
  'venue': string;
  'lastUpdated': string;
}

export type TeamsResponse = {
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
    'lastUpdated': string
  },
  'season': {
    'id': number,
    'startDate': string,
    'endDate': string,
    'currentMatchday': number,
    'winner': null | string
  },
  'teams': Array<Team>
};
