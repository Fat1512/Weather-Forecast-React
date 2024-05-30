import Row from '../../ui/Row';

function HighlightItem({ icon, figure, unit }) {
  return (
    <Row style="items-center justify-between">
      <p className="my-auto text-6xl">{icon}</p>
      <p className="flex text-4xl">
        {figure}
        {unit}
      </p>
    </Row>
  );
}

export default HighlightItem;
