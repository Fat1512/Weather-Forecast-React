import useAirQuality from '../../hooks/useAirQuality';
import Row from '../../ui/Row';
import AirQualityItem from './AirQualityItem';
function AirQuality({ icon }) {
  const { airQuality, isLoading } = useAirQuality();

  if (isLoading) return null;
  const list = Object.entries(airQuality.list[0].components).splice(0, 4);

  return (
    <Row style="justify-between items-center">
      <img
        className="h-14"
        src={`../../public/images/weather_icons/${icon}.png`}
        alt=""
      />
      {list.map((item) => (
        <AirQualityItem
          key={item[0]}
          title={item[0].toUpperCase()}
          index={item[1]}
        />
      ))}
    </Row>
  );
}

export default AirQuality;
