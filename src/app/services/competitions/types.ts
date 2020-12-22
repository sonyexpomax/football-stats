export type Conference = 'West' | 'East';
export type Division = 'Central' | 'Atlantic' | 'Northwest' | 'Pacific' | 'Southwest';

export interface Competition {
  'id': number;
  'area': {
    'id': number,
    'name': string,
    'countryCode': string,
    'ensignUrl': string,
  };
  'name': string;
  'code': string;
  'emblemUrl': string;
  'plan': string;
  'currentSeason': {
    'id': number,
    'startDate': string,
    'endDate': string,
    'currentMatchday': number,
    'winner': string | null
  };
  'numberOfAvailableSeasons': number;
  'lastUpdated': string;
}

export type CompetitionsResponse = {
  competitions: Array<Competition>;
  'count': number,
  'filters': {},
};
