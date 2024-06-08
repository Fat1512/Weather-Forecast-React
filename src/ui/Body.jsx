import useCurrentWeather from '../hooks/useCurrentWeather';
import Spinner from './Spinner';

function Body({ children }) {
  const { isLoading } = useCurrentWeather();
  if (isLoading) {
    return <Spinner />;
  }
  return <main className="grid grid-cols-2">{children}</main>;
}

export default Body;
