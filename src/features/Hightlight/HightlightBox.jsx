import Heading from '../../ui/Heading';

function HightlightBox({ title, children, style, icon = '' }) {
  return (
    <div className={`m-2 w-2/4 rounded-xl bg-gray-700 p-5 ${style}`}>
      <Heading style="text-sm text-gray-500 mb-6">{title}</Heading>
      {children}
    </div>
  );
}

export default HightlightBox;
