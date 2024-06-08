import { useMutation } from '@tanstack/react-query';
import { getGeoCountry } from '../services/apiWeather';

function useSearchWeather() {
  const {
    mutate: getSearchWeather,
    error,
    status,
  } = useMutation({
    mutationFn: getGeoCountry,
  });
  return { getSearchWeather, error, status };
}

export default useSearchWeather;
