import Heading from '../../ui/Heading';

function HightlightBox({ title, children, style, icon = '' }) {
  return (
    <div className={`rounded-xl bg-gray-800 p-5 ${style}`}>
      <Heading style="text-sm text-gray-500 mb-6">{title}</Heading>
      {children}
    </div>
  );
}

export default HightlightBox;
