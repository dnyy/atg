import { GameRace, GameResponse } from '../types';
import { formatDate, formatTime } from '../utils';
import Table from './Table';
import './RaceList.css';

interface RaceListProps {
  raceInfo: GameResponse | null;
  betType: string | null;
};

const RaceList: React.FC<RaceListProps> = ({ raceInfo, betType }) => (
  <ul className="race-wrapper" data-testid="raceWrapper">
    {raceInfo && raceInfo.races.map((race: GameRace, index: number) => (
      <li key={race.id} className="race-item">
        <div className="race-item-wrapper">
          <h3 className="race-title">{betType}-{index+1}</h3>
          <div className="race-number-wrapper">
            <h3 className="race-number-text">Lopp</h3>
            <p className="race-number-circle"><span className="race-number-digit">{race.number}</span></p>
          </div>
          <div className="race-info-wrapper">
            <p data-testid="date-and-time" className="race-datetime">
              {formatDate(race.scheduledStartTime)} Kl {formatTime(race.scheduledStartTime)}
            </p>
            <p>{race.name}</p>
          </div>
        </div>
        <Table starts={race.starts} />
      </li>
    ))}
  </ul>
);

export default RaceList;