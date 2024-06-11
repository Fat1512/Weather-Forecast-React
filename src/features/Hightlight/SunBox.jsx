import useCurrentWeather from '../../hooks/useCurrentWeather';
import { getTimeBasedOnTimestamp } from '../../utils/helper';
import HightlightBox from './HightlightBox';
import SunDetails from './SunDetails';

function SunBox() {
  const { currentWeather, isLoading } = useCurrentWeather();
  return (
    <HightlightBox
      style="gap-2 max-lg:col-[1_/_-1] col-[3_/_5]"
      title="Sunrise & Sunset"
    >
      <SunDetails
        sunRise={getTimeBasedOnTimestamp(currentWeather.sys.sunrise)}
        sunSet={getTimeBasedOnTimestamp(currentWeather.sys.sunset)}
      />
    </HightlightBox>
  );
}

export default SunBox;
