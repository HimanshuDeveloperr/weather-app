const ApiKey = "69b59ea551d7c421a7c723e23c8d82d6";

const WeatherIcon=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
    console.log(data)
  const {
    weather
,
    main: { temp, humidity },
    wind: { speed },
  } = data;

   const{description,icon}=weather[0];

   return{
    description,iconURL:WeatherIcon(icon),temp,humidity,speed,
   }

};

export { getFormattedWeatherData };
