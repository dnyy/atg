import axios from 'axios';
import { useState } from 'react';
import Search from './Search';
import RaceList from './RaceList';
import { GameResponse } from '../types';

import './App.css';

const BASE_URL = 'https://www.atg.se/services/racinginfo/v1/api';

const App: React.FC = () => {
  const [betType, setBetType] = useState<string>('');
  const [raceInfo, setRaceInfo] = useState<GameResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onClick = async (searchTerm: string) => {
    // let result;
    // try {
    //   setRaceInfo(null);
    //   setError('');
    //   setLoading(true);
    //   const { data } = await axios.get(`${BASE_URL}/products/${searchTerm.toUpperCase()}`);
    //   setBetType(data.betType);
    //   if (data.upcoming && data.upcoming.length > 0) {
    //     result = await axios.get(`${BASE_URL}/games/${data.upcoming[0].id}`);
    //     return setRaceInfo(result.data);
    //   } else if (data.results && data.results.length > 0) {
    //     result = await axios.get(`${BASE_URL}/games/${data.results[0].id}`);
    //     return setRaceInfo(result.data);
    //   } else {
    //     console.log('No upcoming or results');
    //   }
    // } catch (err) {
    //   setError(err.message)
    // } finally {
    //   setLoading(false)
    // }
  };
  return (
    <div className="main-wrapper" data-testid="wrapper">
      <Search onClick={onClick} />
      {/* {error && (
        <h3 role="alert">
          Något gick fel, kontrollera speltyp och försök igen
        </h3>
      )}
      {loading && !error ? (
        <h1>Hämtar spel</h1>
      ) : (
        <RaceList raceInfo={raceInfo} betType={betType} />
      )} */}
    </div>
  );
};

export default App;
