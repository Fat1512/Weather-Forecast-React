import { API_KEY } from '../utils/constant';
export let controller;
export async function getGeoCountry({ country }) {
  controller = new AbortController();
  console.log(controller);
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${API_KEY}`,
    { signal: controller.signal },
  );
  if (!res.ok) throw new Error(`URL is not available right now`);
  const data = (await res).json();
  return data;
}

export async function getCurrentWeather({ lat, lon }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );
  if (!res.ok) throw new Error('adsda');
  const data = (await res).json();
  return data;
}

export async function getForecastWeather({ lat, lon }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );
  if (!res.ok) throw new Error('adsda');
  const data = (await res).json();
  return data;
}

export async function getAirQuality({ lat, lon }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );
  if (!res.ok) throw new Error('adsda');
  const data = (await res).json();
  return data;
}
