import Row from '../../ui/Row';

function HighlightItem({ icon, figure, unit }) {
  return (
    <Row style="items-center justify-between">
      <p className="my-auto text-5xl">{icon}</p>
      <p className="flex text-3xl">
        {figure}
        {unit}
      </p>
    </Row>
  );
}

export default HighlightItem;
