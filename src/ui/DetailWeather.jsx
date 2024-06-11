import Highlight from '../features/Hightlight/Hightlight';
import TodayDetails from '../features/Today/TodayDetails';
import HighlightDetails from '../features/Hightlight/HighlightDetails';

function DetailWeather() {
  return (
    <Highlight>
      <HighlightDetails />
      <TodayDetails />
    </Highlight>
  );
}

export default DetailWeather;
