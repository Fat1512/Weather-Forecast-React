import useCurrentWeather from '../../hooks/useCurrentWeather';
import AirQuality from './AirQuality';
import HightlightBox from './HightlightBox';

export function AirQualityBox() {
  const { currentWeather } = useCurrentWeather();
  return (
    <HightlightBox
      style="gap-2 max-lg:col-[1_/_-1] col-[1_/_3]"
      title="Air quality index"
    >
      <AirQuality icon={currentWeather.weather[0].icon} />
    </HightlightBox>
  );
}
