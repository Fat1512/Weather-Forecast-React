import { MdOutlineVisibility, MdOutlineWaves } from 'react-icons/md';
import HighlightItem from './HighlightItem';
import HightlightBox from './HightlightBox';
import { WiCelsius, WiHumidity } from 'react-icons/wi';
import { FaThermometerHalf } from 'react-icons/fa';
import useCurrentWeather from '../../hooks/useCurrentWeather';

function ConditionBox() {
  const { currentWeather } = useCurrentWeather();

  const humidity = currentWeather.main.humidity;
  const pressure = currentWeather.main.pressure;
  const feels_like = currentWeather.main.feels_like;
  const visibility = currentWeather.visibility;
  return (
    <>
      <HightlightBox style="col-[1_/_2] max-lg:col-[1_/_2]" title="Humidity">
        <HighlightItem figure={`${humidity}`} unit="%" icon={<WiHumidity />} />
      </HightlightBox>
      <HightlightBox style="col-[2_/_3] max-lg:col-[2_/_3]" title="Pressure">
        <HighlightItem
          figure={`${pressure}`}
          unit="hPa"
          icon={<MdOutlineWaves />}
        />
      </HightlightBox>
      <HightlightBox style="col-[3_/_4] max-lg:col-[1_/_2]" title="Visibility">
        <HighlightItem
          figure={`${visibility / 1000}km`}
          icon={<MdOutlineVisibility />}
        />
      </HightlightBox>
      <HightlightBox style="col-[4_/_5] max-lg:col-[2_/_3]" title="Feels like">
        <HighlightItem
          figure={`${feels_like}`}
          unit={<WiCelsius />}
          icon={<FaThermometerHalf />}
        />
      </HightlightBox>
    </>
  );
}

export default ConditionBox;
