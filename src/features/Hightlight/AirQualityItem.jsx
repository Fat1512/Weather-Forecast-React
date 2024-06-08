import RowCol from '../../ui/RowCol';

function AirQualityItem({ title, index }) {
  return (
    <RowCol style="items-center">
      <p className="text-base text-gray-500">{title}</p>
      <p className="text-2xl">{index}</p>
    </RowCol>
  );
}

export default AirQualityItem;
