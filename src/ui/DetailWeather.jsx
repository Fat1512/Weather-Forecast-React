import { WiCelsius, WiHumidity } from 'react-icons/wi';
import { MdOutlineVisibility, MdOutlineWaves } from 'react-icons/md';
import { FaThermometerHalf } from 'react-icons/fa';
import { getTimeBasedOnTimestamp } from '../utils/helper';

import Box from './Box';
import Heading from './Heading';
import Highlight from '../features/Hightlight/Hightlight';
import HightlightBox from '../features/Hightlight/HightlightBox';
import HighlightItem from '../features/Hightlight/HighlightItem';
import AirQuality from '../features/Hightlight/AirQuality';
import SunDetails from '../features/Hightlight/SunDetails';
import TodayDetails from '../features/Today/TodayDetails';
import Row from './Row';
import useCurrentWeather from '../hooks/useCurrentWeather';

function DetailWeather() {
  const { currentWeather, isLoading } = useCurrentWeather();
  if (isLoading) return;

  const humidity = currentWeather.main.humidity;
  const pressure = currentWeather.main.pressure;
  const feels_like = currentWeather.main.feels_like;
  const visibility = currentWeather.visibility;
  return (
    <Highlight>
      <Box>
        <Heading>Todays Highlights</Heading>
        <Row>
          <HightlightBox style="gap-2" title="Air quality index">
            <AirQuality icon={currentWeather.weather[0].icon} />
          </HightlightBox>
          <HightlightBox style="gap-2" title="Sunrise & Sunset">
            <SunDetails
              sunRise={getTimeBasedOnTimestamp(currentWeather.sys.sunrise)}
              sunSet={getTimeBasedOnTimestamp(currentWeather.sys.sunset)}
            />
          </HightlightBox>
        </Row>

        <Row>
          <HightlightBox title="Humidity">
            <HighlightItem
              figure={`${humidity}`}
              unit="%"
              icon={<WiHumidity />}
            />
          </HightlightBox>
          <HightlightBox title="Pressure">
            <HighlightItem
              figure={`${pressure}`}
              unit="hPa"
              icon={<MdOutlineWaves />}
            />
          </HightlightBox>
          <HightlightBox title="Visibility">
            <HighlightItem
              figure={`${visibility / 1000}km`}
              icon={<MdOutlineVisibility />}
            />
          </HightlightBox>
          <HightlightBox title="Feels like">
            <HighlightItem
              figure={`${feels_like}`}
              unit={<WiCelsius />}
              icon={<FaThermometerHalf />}
            />
          </HightlightBox>
        </Row>
      </Box>
      <Heading>Today at</Heading>
      <TodayDetails />
    </Highlight>
  );
}

export default DetailWeather;
