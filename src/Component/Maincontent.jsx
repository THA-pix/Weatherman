import { useState } from "react";

import huminnity from './images/huminity.png';
import helo from './images/helo.png';
import wivnd from './images/wind.png';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import ten from './images/ten.png';
import therthy from './images/therthy.png';
import nine from './images/nine.png';
import leven from './images/leven.png';
import four from './images/four.png';
import fifty from './images/fifty.png';

export const Maincontent = ()=>{
    const [imga , setimga] = useState(helo);
    const [city , setcity] = useState("ENTER CITY");
    const [iscity , setiscity] = useState("");
    const [temp , settemp] = useState(0);
    const [contry , setcontry] = useState("COUNTRY");
    const [huminity , sethuminity] = useState(0);
    const [wind , setwind] = useState(0);
    const [forecast, setForecast] = useState([]);


    const weathericonmap = {
        "01d" : one,
        "01n" : one,
        "02d" : two,
        "02n" : two,
        "03d" : three,
        "03n" : three,
        "04d" : four,
        "04n" : four,
        "09d" : nine,
        "09n" : nine,
        "10d" : ten,
        "10n" : ten,
        "11d" : leven,
        "11n" : leven,
        "13d" : therthy,
        "13n" : therthy,
        "50d" : fifty,
        "50n" : fifty

    };

    const search = async()=>{
        let api_key = "bf2739a632bb9f29a37f9a4359c75846";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bf2739a632bb9f29a37f9a4359c75846`;
        let res = await fetch(url);
        let data = await res.json();
        let res1 = await fetch(url1);
        let data1 = await res1.json();
        try{
            if (data.cod !== 200) {
                console.log("City not found");
                return;
            }
            
            setcity(data.name);
            settemp(Math.floor(data.main.temp));
            setcontry(data.sys.country);
            sethuminity(data.main.humidity);
            setwind(Math.floor(data.wind.speed));
            const weatherIconCode = data.weather[0].icon;
            console.log(weatherIconCode);
            setimga(weathericonmap[weatherIconCode]);
        }
        catch(error){
            console.log("an error occor :"+error);
            
        }
        const forecastData = createForecastData(data1);
        setForecast(forecastData);
        

    };
    const Handlecity = (e)=>{
        setcity(e.target.value);
    };
    const enterclick = (e)=>{
        if(e.key == "Enter"){
            search();
        }
    
    }
    const createForecastData = (data) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let currentDayIndex = new Date().getDay(); 
        
        return data.list.slice(0, 7).map((item, index) => {
            const time = new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const dayName = daysOfWeek[(currentDayIndex + index) % 7]; 
            return {
                day: dayName,
                time: time,
                img: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                temp: Math.round(item.main.temp)
            };
        });
    };

    
    return(
        <>
        <div className="forsearch">
                <input placeholder="Enter any city" onChange={Handlecity} onKeyDown={enterclick}></input>
                <button onClick={search}>Search</button>
        </div>
            <div className="rigthdiv">
                <img src={imga} className="mainimage"></img>
                <h1><span>{city}{iscity}</span></h1>
                <h1 className="celci">{temp}ºC</h1>
                <h2>{contry}</h2>
                <div className="iconimage">
                    <img src={huminnity}></img>
                    <img src={wivnd}></img>
                </div>
                <div className="bloimage">
                    <h4>{huminity}% huminity</h4>
                    <h4>{wind}% wind speed</h4>
                </div>
                
            </div>
            <div className="leftdiv">
        <h1 className="head">WELCOME TO <span>weatherBOSS</span></h1>
        <h1>DAILY FORECAST</h1>
        <div className="col">
            {forecast.map((dayForecast, index) => (
                <div className="row" key={index}>
                    <h3>{ dayForecast.time}</h3>
                    <h3>{dayForecast.day}</h3>
                    <img src={dayForecast.img} alt="weather icon" />
                    <h3>TEMP</h3>
                    <h3>{dayForecast.temp} °C</h3>
                </div>
        ))}
    </div>
</div>

            
        </>
    );
}
