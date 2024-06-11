import useCurrentWeather from '../hooks/useCurrentWeather';
import Spinner from './Spinner';

function Body({ children }) {
  const { isLoading } = useCurrentWeather();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="grid max-xl:grid-cols-[auto_1fr] max-lg:grid-cols-1">
      {children}
    </main>
  );
}

export default Body;
