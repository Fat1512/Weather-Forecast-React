import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getForecastWeather } from '../services/apiWeather';

function useForecastWeather() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const {
    isLoading,
    data: forecastWeather,
    error,
  } = useQuery({
    queryFn: () => getForecastWeather({ lat, lon }),
    queryKey: ['forcast-weather', lat, lon],
  });
  return { isLoading, forecastWeather, error };
}

export default useForecastWeather;
