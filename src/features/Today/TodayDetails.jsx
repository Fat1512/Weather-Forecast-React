import { WiCelsius } from 'react-icons/wi';
import useForecastWeather from '../../hooks/useForecastWeather';
import Row from '../../ui/Row';
import { getTimeBasedOnDatetime } from '../../utils/helper';
import TodayDetailItem from './TodayDetailItem';

function TodayDetails() {
  const { forecastWeather, isLoading } = useForecastWeather();
  if (isLoading) return;
  const listForecast = forecastWeather.list.slice(0, 8);
  return (
    <>
      <Row style="flex-wrap gap-1 justify">
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
      </Row>
    </>
  );
}

export default TodayDetails;
