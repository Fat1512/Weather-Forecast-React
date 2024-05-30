import { FaCalendarAlt } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';
import { TiLocation } from 'react-icons/ti';
import Heading from '../../ui/Heading';
import Box from '../../ui/Box';
import useCurrentWeather from '../../hooks/useCurrentWeather';
import { getFullDate } from '../../utils/helper';

function Today() {
  const { isLoading, error, currentWeather } = useCurrentWeather();

  if (isLoading) return null;

  const { weather, sys, main } = currentWeather;
  const date = getFullDate(new Date().toDateString());
  return (
    <Box>
      <Heading>Now</Heading>
      <div className="flex flex-col border-b-2 border-gray-500 pb-3">
        <div className="flex items-center justify-between text-[5rem]">
          <span className="flex">
            {Math.round(main.temp)}
            <WiCelsius />
          </span>
          <img
            src={`../../public/images/weather_icons/${weather[0].icon}.png`}
            alt=""
          />
        </div>
        <p className="text-sm text-gray-400">{weather[0].destination}</p>
      </div>

      <p className="my-2 flex items-center gap-4 text-sm">
        <FaCalendarAlt />
        <span className="text-gray-300">{date}</span>
      </p>
      <p className="my-2 flex items-center gap-4 text-sm">
        <TiLocation />
        <span className="text-gray-300">
          {currentWeather.name}, {sys.country}
        </span>
      </p>
    </Box>
  );
}

export default Today;
