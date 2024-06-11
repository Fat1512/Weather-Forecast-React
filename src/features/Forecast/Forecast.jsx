import useForecastWeather from '../../hooks/useForecastWeather';
import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import { getMonthDay, getWeekDay } from '../../utils/helper';
import ForecastRow from './ForecastRow';

function Forecast() {
  const { forecastWeather, isLoading } = useForecastWeather();
  if (isLoading) return;
  const listForecast = [];
  for (let i = 0; i < 5; i++) {
    listForecast.push(forecastWeather.list[i * 8]);
  }
  return (
    <>
      <Heading>5 Days Forecast</Heading>
      <Box>
        {listForecast.map((el) => (
          <ForecastRow
            key={el.dt}
            weatherImg={el.weather[0].icon}
            temperature={Math.round(el.main.temp)}
            // weekday={new Date(el.dt_txt).getUTCDate()}
            weekday={getWeekDay(el.dt_txt)}
            date={getMonthDay(el.dt_txt)}
          />
        ))}
      </Box>
    </>
  );
}

export default Forecast;
