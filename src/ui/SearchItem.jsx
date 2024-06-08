import { TiLocation } from 'react-icons/ti';
import Row from './Row';
import RowCol from './RowCol';
import { useSearchParams } from 'react-router-dom';

function SearchItem({ country, setQuery }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChangeLocation() {
    searchParams.set('lat', country.lat);
    searchParams.set('lon', country.lon);
    setQuery('');
    setSearchParams(searchParams);
  }
  return (
    <li
      onClick={handleChangeLocation}
      className="cursor-pointer py-2 hover:bg-gray-700"
    >
      <Row style="items-center">
        <p className="my-2 flex items-center px-4 text-sm">
          <TiLocation />
        </p>
        <RowCol>
          <p className="text-gray-300">{country.name}</p>
          <p className="text-xs text-gray-500">
            {country.state} {country.country}
          </p>
        </RowCol>
      </Row>
    </li>
  );
}

export default SearchItem;
