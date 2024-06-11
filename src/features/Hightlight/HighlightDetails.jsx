import Heading from '../../ui/Heading';
import { AirQualityBox } from './AirQualityBox';
import ConditionBox from './ConditionBox';
import SunBox from './SunBox';

function HighlightDetails() {
  return (
    <div className="rounded-2xl bg-gray-900 p-4">
      <Heading>Todays Highlights</Heading>
      <div className="grid grid-cols-4 gap-2">
        <AirQualityBox />
        <SunBox />
        <ConditionBox />
      </div>
    </div>
  );
}

export default HighlightDetails;
