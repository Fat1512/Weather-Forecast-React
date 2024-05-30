import { WiCelsius } from "react-icons/wi";

function ForecastRow({temperature, weekday, date, weatherImg}) {
  return (
    <li className="my-3 flex list-none justify-between text-sm">
      <div className="flex items-center justify-between gap-2 text-base">
        <img
          className="h-6"
          src={`../../public/images/weather_icons/${weatherImg}.png`}
          alt=""
        />
         <span className="flex items-center">
            {temperature}
            <span className="text-4xl">
              <WiCelsius />
            </span>
          </span>
      </div>
      <span className="py-1 text-gray-500">{date}</span>
      <span className="py-1 text-gray-500">{weekday}</span>
    </li>
  );
}

export default ForecastRow;
