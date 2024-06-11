import { WiCelsius } from 'react-icons/wi';
import useForecastWeather from '../../hooks/useForecastWeather';
import Row from '../../ui/Row';
import { getTimeBasedOnDatetime } from '../../utils/helper';
import TodayDetailItem from './TodayDetailItem';
import Heading from '../../ui/Heading';

function TodayDetails() {
  const { forecastWeather, isLoading } = useForecastWeather();
  if (isLoading) return;
  const listForecast = forecastWeather.list.slice(0, 8);
  return (
    <div>
      <Heading>Today at</Heading>
      <div className="grid-rows-auto grid grid-cols-8 gap-4">
        {listForecast.map((el) => (
          <TodayDetailItem
            key={el.dt_txt}
            time={getTimeBasedOnDatetime(el.dt_txt)}
            content={el.main.temp}
            unit={<WiCelsius />}
            icon={el.weather[0].icon}
          />
        ))}
        {listForecast.map((el) => (
          <TodayDetailItem
            key={el.dt_txt}
            time={getTimeBasedOnDatetime(el.dt_txt)}
            content={`${el.wind.speed}`}
            unit="km/h"
            deg={el.wind.deg}
            icon="direction"
          />
        ))}
      </div>
    </div>
  );
}

export default TodayDetails;
