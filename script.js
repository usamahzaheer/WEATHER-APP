// API-KEY for maps api 
let API_KEY = "3c9b7019b4b5554953c0a6e0cb7cf5a7";

// URL should look like this:
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
/* api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3c9b7019b4b5554953c0a6e0cb7cf5a7 */
getWeatherData = (city) => {
    const URL = " https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&APPID=${API_KEY}&units=metric`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) =>{
        return response.json();
    }) 
}
getWeatherData("London,uk")

searchCity = () => {
     const city = document.getElementById('city-input').value;
    getWeatherData(city).then((response)=>{
        showWeatherData(response);
        console.log(response)
    }).catch((error)=>{
        console.log(error);
    })
}

showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}