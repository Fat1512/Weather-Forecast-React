import { TbCurrentLocation } from 'react-icons/tb';
import { useGeolocation } from '../hooks/useGeoLocation';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function CurrentLocation() {
  const { isLoading, position, error, getPosition } = useGeolocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      if (!position) return;
      searchParams.set('lat', position.lat);
      searchParams.set('lon', position.lon);
      setSearchParams(searchParams);
    },
    [position],
  );

  return (
    <div
      onClick={getPosition}
      className="flex h-10 cursor-pointer items-center rounded-full bg-blue-300 px-3 text-black"
    >
      <span className=" text-sm ">
        <TbCurrentLocation />
      </span>
      <button className="block px-3 ">Current Location</button>
    </div>
  );
}

export default CurrentLocation;
