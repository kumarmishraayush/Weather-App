const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9d497a4310msh1e99c0beb7fbe4ep1b0203jsn6d08d3450c25",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getWeather = (city) =>
{
  cityName.innerHTML = city;
  const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
 
    
try {
  const fet = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.temp);
    console.log(result);
    
    vaayu.innerHTML = result.wind_speed

    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    max_temp.innerHTML = result.max_temp;
    min_temp.innerHTML = result.min_temp;
    temp.innerHTML = result.temp;
    wind_degrees.innerHTML = result.wind_degrees;
    wind_speed.innerHTML = result.wind_speed;
  };
  fet();
} catch (error) {
  console.error(error);
}

}

submit.addEventListener("click", (e)=>
{ e.preventDefault();
  getWeather(city.value)
})

getWeather("Delhi")