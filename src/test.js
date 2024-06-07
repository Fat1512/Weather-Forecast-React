const API_KEY = `ff8a11c6adb23e69012266900523c85a`;
const query = 'new york';

const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=40.3843304&lon=-75.4203885&units=metric&appid=ff8a11c6adb23e69012266900523c85a`;
const API_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
const API_REVERSE_GEOCODING = `http://api.openweathermap.org/geo/1.0/reverse?lat=21.0294498&lon=105.8544441&limit=5&appid=${API_KEY}`;
const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${10.8033079}&lon=${106.6409201}&appid=ff8a11c6adb23e69012266900523c85a`;
const API_WEATHER_COUNTRY = `https://api.openweathermap.org/data/2.5/weather?q=${query}&limit=5&appid=ff8a11c6adb23e69012266900523c85a`;
const API_MAIN = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=ff8a11c6adb23e69012266900523c85a`;
const API_POLUTION = `http://api.openweathermap.org/data/2.5/air_pollution?lat=23.251314&lon=90.851784&appid=${API_KEY}`;
async function f() {
  // const res = await fetch(
  //   ``,
  // );
  // const res = await fetch(API_GEOCODING);
  const res = await fetch(API_FORECAST);
  const res1 = await fetch(API_WEATHER);
  const res2 = await fetch(API_POLUTION);
  const res3 = await fetch(API_GEOCODING);
  const res4 = await fetch(API_REVERSE_GEOCODING);
  const data = await res.json();
  const data1 = await res1.json();
  const data3 = await res3.json();
  const data4 = await res4.json();
  // const data2 = await res2.json();
  // console.log(data);
  // console.log(data1);
  // console.log(data3);
  // console.log(data4);

  // const { list } = data;
  // let options = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // };
  // list.forEach((el) =>
  //   console.log(
  //     new Intl.DateTimeFormat('en-US', options).format(new Date(el.dt_txt)),
  //   ),
  // );
  // console.log(data);
  // console.log();
  // list.forEach((el) => console.log(new Date(el.dt_txt).toUTCString()));
  // console.log(data);
  // console.log(data2);
  // console.log(data3);
}

f();

const asd = 2;
export default asd;
