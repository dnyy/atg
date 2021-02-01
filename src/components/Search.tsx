import { useState, useEffect, useRef } from 'react';
import { useFetchGameScheduleId, useRequest } from '../hooks';
import { GameResponse } from '../types';

import './Search.css';
interface SearchProps {
  onClick: (searchTerm: string) => Promise<void>;
}

// function FetchOnClick() {
//   function handleClick() {}
//   return (
//     <>
//       <button disable={shouldFetch} onClick={handleClick}>
//         Fetch
//       </button>
//       {data ? <h1>{data.fullName}</h1> : null}
//     </>
//   );
// }

const Search: React.FC<SearchProps> = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [raceInfo, setRaceInfo] = useState<GameResponse | null>(null);
  console.log('🚀 ~ file: Search.tsx ~ line 26 ~ raceInfo', raceInfo);
  const [id, setId] = useState('');
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { game } = useRequest('/products', shouldFetch, input);
  console.log('🚀 ~ file: Search.tsx ~ line 31 ~ game', game);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  });

  const handleClick = () => {
    setShouldFetch(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        ref={inputRef}
        value={input}
        placeholder="Speltyp"
        onChange={handleChange}
      />
      <button
        disabled={shouldFetch}
        className="search-button"
        onClick={handleClick}
      >
        Sök
      </button>
    </div>
  );
};

export default Search;
