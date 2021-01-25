import { useState, useEffect, useRef } from 'react';
import './Search.css';
interface SearchProps {
  onClick: (searchTerm: string) => Promise<void>;
}

const Search: React.FC<SearchProps> = ({ onClick }) => {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  });

  const handleClick = () => {
    if (input) {
      onClick(input)
    }
    setInput('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  };

  return (
    <div className="search-wrapper" data-testid="search">
      <input
        className="search-input"
        ref={inputRef}
        value={input}
        placeholder="Speltyp"
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleClick} data-testid="searchButton">Sök</button>
    </div>
  )
}

export default Search;