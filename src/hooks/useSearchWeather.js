import { useMutation } from '@tanstack/react-query';
import { getGeoCountry } from '../services/apiWeather';

function useSearchWeather() {
  const { mutate: getSearchWeather, error } = useMutation({
    mutationFn: getGeoCountry,
  });

  return { getSearchWeather, error };
}

export default useSearchWeather;
