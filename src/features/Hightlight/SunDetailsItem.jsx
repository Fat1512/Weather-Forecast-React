import Row from '../../ui/Row';
import RowCol from '../../ui/RowCol';

function SunDetailsItem({ sun, time, icon }) {
  return (
    <Row style="w-2/4 gap-8 items-center">
      <p className="my-auto text-6xl">{icon}</p>

      <RowCol>
        <p className="text-sm text-gray-500">{sun}</p>
        <p className="text-4xl">{time}</p>
      </RowCol>
    </Row>
  );
}

export default SunDetailsItem;
