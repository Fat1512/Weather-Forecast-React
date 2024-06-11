import useCurrentWeather from '../../hooks/useCurrentWeather';
import AirQuality from './AirQuality';
import HightlightBox from './HightlightBox';

export function AirQualityBox() {
  const { currentWeather, isLoading } = useCurrentWeather();
  return (
    <HightlightBox
      style="gap-2 col-[1_/_3] row-[1_/_2]"
      title="Air quality index"
    >
      <AirQuality icon={currentWeather.weather[0].icon} />
    </HightlightBox>
  );
}
