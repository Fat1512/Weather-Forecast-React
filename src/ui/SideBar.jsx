import Forecast from '../features/Forecast/Forecast';
import Today from '../features/Today/Today';

function SideBar() {
  return (
    <div className="col-end-1 mx-3 flex flex-col max-xl:col-[1_/_-1]">
      <Today />
      <Forecast />
    </div>
  );
}

export default SideBar;
