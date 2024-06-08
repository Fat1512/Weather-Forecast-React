import Box from '../../ui/Box';
import Row from '../../ui/Row';

function TodayDetailItem({ time, icon, content, unit, deg }) {
  return (
    <Box style="basis-[12%] items-center text-sm">
      <p>{time}</p>
      <img
        className={`my-2 h-8 transform rotate-[${deg}deg]`}
        src={`../../public/images/weather_icons/${icon}.png`}
        alt=""
      />
      <Row>
        {content} {unit}
      </Row>
    </Box>
  );
}

export default TodayDetailItem;
