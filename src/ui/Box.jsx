function Box({ children, style }) {
  return (
    <div className={`flex flex-col rounded-2xl bg-gray-900 p-5 ${style}`}>
      {children}
    </div>
  );
}

export default Box;
