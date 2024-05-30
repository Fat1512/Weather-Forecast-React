import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchList from './SearchList';
import useSearchWeather from '../hooks/useSearchWeather';
import { controller } from '../services/apiWeather';

function SearchBar() {
  const [query, setQuery] = useState();
  const [listCountry, setListCountry] = useState();

  const { getSearchWeather, error } = useSearchWeather();
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
      return function () {
        // controller.abort();
      };
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
        className="w-[400px] rounded-full bg-gray-900 p-3 pl-10 focus:rounded-b-none focus:rounded-t-3xl focus:border-b focus:outline-none"
      />
      {listCountry && listCountry.length !== 0 && (
        <SearchList list={listCountry} />
      )}
    </form>
  );
}

export default SearchBar;
