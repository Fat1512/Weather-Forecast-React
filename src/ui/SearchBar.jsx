import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchList from './SearchList';
import useSearchWeather from '../hooks/useSearchWeather';
import { controller } from '../services/apiWeather';
import SearchItem from './SearchItem';
import MiniSpinner from './MiniSpinner';

function SearchBar() {
  const [query, setQuery] = useState();
  const [listCountry, setListCountry] = useState();

  const { getSearchWeather, error, status } = useSearchWeather();
  useEffect(
    function () {
      if (!query) {
        setListCountry([]);
        return;
      }
      getSearchWeather(
        { country: query },
        {
          onSuccess: (data) => {
            setListCountry(data);
          },
        },
      );
    },
    [query],
  );

  return (
    <form className="relative flex items-center">
      <span className="absolute left-4 text-sm">
        <FaSearch />
      </span>
      <input
        placeholder="Search City"
        onChange={(e) => setQuery(() => e.target.value)}
        type="text"
        value={query}
        className="w-[400px] rounded-full bg-gray-900 p-3 pl-10 focus:outline-none"
      />
      {status === 'loading' && (
        <span className="absolute right-4 top-1/2 flex origin-left translate-y-[-50%] items-center">
          <MiniSpinner />
        </span>
      )}
      {listCountry && listCountry.length !== 0 && (
        <SearchList>
          {listCountry.map((country) => (
            <SearchItem
              setQuery={setQuery}
              key={country.lat}
              country={country}
            />
          ))}
        </SearchList>
      )}
    </form>
  );
}

export default SearchBar;
