import SearchItem from './SearchItem';

function SearchList({ children }) {
  return (
    <ul className="absolute top-[105%] z-50 w-full rounded-xl bg-gray-900">
      {children}
    </ul>
  );
}

export default SearchList;
