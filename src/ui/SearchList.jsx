import SearchItem from './SearchItem';

function SearchList({ list }) {
  return (
    <ul className="absolute top-full z-50 w-full rounded-b-3xl bg-gray-900">
      {list.map((country) => (
        <SearchItem key={country.lat} country={country} />
      ))}
    </ul>
  );
}

export default SearchList;
