function RowCol({ children, style }) {
  return <div className={`flex flex-col ${style}`}>{children}</div>;
}

export default RowCol;
