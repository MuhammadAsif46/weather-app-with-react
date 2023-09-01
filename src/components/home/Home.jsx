import axios from "axios";
import { useRef, useState } from "react";
import WeatherCard from "../weather/WeatherCard";

export default function Home (){

    const [weatherData, setWeatherData] = useState([]);
    const cityNameRef = useRef(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("cityName : ", cityNameRef.current.value);

        let API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";

        try {
            const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`
            );
            console.log(response.data);
            setWeatherData([response.data, ...weatherData]);
        } catch (error) {
            // handle error
            console.log(error.data);
        }
    };

    return (
        <div className="home">
            <form onSubmit={submitHandler}>
                <label htmlFor="cityNameRef"> CityName: </label>
                <input 
                    id="cityNameRef" 
                    type="text" 
                    minLength={2} 
                    maxLength={20} 
                    ref={cityNameRef}
                    required
                />
                <br />
                <br />
                <button type="submit">Get Weather</button>
                <hr />

                {weatherData.length ? (
                    weatherData.map((eachWeatherData, index) => {
                    return <WeatherCard key={index} weatherData={eachWeatherData} />;
                })
                    ) : (
                <div>No Data</div>
                )}
            </form>
        </div>
    )
}