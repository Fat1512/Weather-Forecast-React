import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getCurrentWeather } from '../services/apiWeather';

function useCurrentWeather() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: currentWeather,
    error,
  } = useQuery({
    queryFn: () => getCurrentWeather({ lat, lon }),
    queryKey: ['current-weather', lat, lon],
  });

  return { isLoading, currentWeather, error };
}

export default useCurrentWeather;
