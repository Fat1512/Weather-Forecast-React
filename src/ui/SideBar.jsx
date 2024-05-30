import Forecast from '../features/Forecast/Forecast';
import Today from '../features/Today/Today';

function SideBar() {
  return (
    <div className="col-end-[23rem] ml-3 flex flex-col">
      <Today />
      <Forecast />
    </div>
  );
}

export default SideBar;
