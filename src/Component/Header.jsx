import { useState, useEffect } from "react";
import { Maincontent } from "./Maincontent";

export const Header = () => {
  const [cityWeather, setCityWeather] = useState({
    bengaluru: { weather: "", temp: "" },
    mumbai: { weather: "", temp: "" },
    delhi: { weather: "", temp: "" },
    kolkata: { weather: "", temp: "" },
    chennai: { weather: "", temp: "" },
  });

  const getWeatherData = async (cityname) => {
    let API_KEY = "bf2739a632bb9f29a37f9a4359c75846";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_KEY}`;

    try {
      const api_response = await fetch(url);
      const data = await api_response.json();
      
      if (data.cod !== 200) {
        console.log(`City not found: ${cityname}`);
        return { weather: "N/A", temp: "N/A" };
      }
      
      return {
        weather: data.weather[0].main,
        temp: data.main.temp,
      };
    } catch (error) {
      console.error(`Error fetching weather data for ${cityname}:`, error);
      return {
        weather: "N/A",
        temp: "N/A",
      };
    }
  };

  const fetchWeatherForCities = async () => {
    const cities = ["bengaluru", "mumbai", "delhi", "kolkata", "chennai"];
    let cityWeatherData = {};

    for (const city of cities) {
      const weatherData = await getWeatherData(city);
      cityWeatherData[city] = weatherData;
    }
setCityWeather(cityWeatherData);
  };

  useEffect(() => {
    fetchWeatherForCities();
  }, []);


  return (
    <>
      <div className="images">
        <div>
          <img
            className="imageforheader"
            src="https://www.india-briefing.com/news/wp-content/uploads/2013/07/India-Briefing-Economy-of-Mumbai-Indias-Major-Commercial-Hub.jpg"
            alt=""
          />
          <div className="row">
            <h2>BENGALURU</h2>
            <h1>{cityWeather.bengaluru.temp}°C, {cityWeather.bengaluru.weather}</h1>
          </div>
        </div>
        <div>
          <img
            className="imageforheader"
            src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
            alt=""
          />
          <div className="row">
            <h2>MUMBAI</h2>
            <h1>{cityWeather.mumbai.temp}°C, {cityWeather.mumbai.weather}</h1>
          </div>
        </div>
        <div>
          <img
            className="imageforheader"
            src="https://im.rediff.com/news/2014/aug/25chennai1.jpg?w=670&h=900"
            alt=""
          />
          <div className="row">
            <h2>CHENNAI</h2>
            <h1>{cityWeather.chennai.temp}°C, {cityWeather.chennai.weather}</h1>
          </div>
        </div>
        <div>
          <img
            className="imageforheader"
            src="https://cdn.britannica.com/75/121075-050-CBF79FB6/Victoria-Statue-front-Memorial-Hall-Kolkata-West.jpg"
            alt=""
          />
          <div className="row">
            <h2>DELHI</h2>
            <h1>{cityWeather.delhi.temp}°C, {cityWeather.delhi.weather}</h1>
          </div>
        </div>
        <div>
          <img
            className="imageforheader"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Charminar_Hyderabad_2023.jpg"
            alt=""
          />
         
        </div>
      </div>
      
      <Maincontent />
    </>
  );
};
