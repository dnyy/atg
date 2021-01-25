export enum BetTypes {
  V75 = 'V75',
  V65 = 'V65',
  V64 = 'V64',
  V4 = 'V4',
};

export interface GameTypes {
  betType: BetTypes;
  upcoming: GameInfo[];
  results: GameInfo[];
};

export interface GameInfo {
  id: string;
  startTime: string;
}

// ----
export interface Fullname {
  firstName: string;
  lastName: string;
}

export interface Horse {
  name: string;
  trainer: Fullname;
  pedigree: {
    father: {
      name: string;
    }
  }
};

export interface GameRace {
  id: string,
  number: number;
  name: string;
  scheduledStartTime: string;
  starts: RaceStart[];
};

export interface RaceStart {
  number: number;
  driver: Fullname;
  horse: Horse;
}

export interface GameResponse {
  id: string;
  races: GameRace[];
  status: string;
}