import { TbSunset2 } from 'react-icons/tb';
import { WiSunrise } from 'react-icons/wi';
import Row from '../../ui/Row';
import SunDetailsItem from './SunDetailsItem';

function SunDetails({ sunRise, sunSet }) {
  return (
    <Row>
      <SunDetailsItem icon={<WiSunrise />} sun="sunrise" time={sunRise} />
      <SunDetailsItem icon={<TbSunset2 />} sun="sunset" time={sunSet} />
    </Row>
  );
}

export default SunDetails;
