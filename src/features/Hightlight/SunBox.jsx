import useCurrentWeather from '../../hooks/useCurrentWeather';
import { getTimeBasedOnTimestamp } from '../../utils/helper';
import HightlightBox from './HightlightBox';
import SunDetails from './SunDetails';

function SunBox() {
  const { currentWeather, isLoading } = useCurrentWeather();
  return (
    <HightlightBox
      style="gap-2 col-[3_/_5] row-[1_/_2]"
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
