import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getAirQuality, getCurrentWeather } from '../services/apiWeather';

function useAirQuality() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const {
    isLoading,
    data: airQuality,
    error,
  } = useQuery({
    queryFn: () => getAirQuality({ lat, lon }),
    queryKey: ['current-air-quality', lat, lon],
  });

  return { isLoading, airQuality, error };
}

export default useAirQuality;
