import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const changeCityInput = (e) => {
        setCityName(e.target.value);
    };

    const fetchWeatherAPI = async () => {
        const APIKey = "893c2ba576a930eb2f30481a951e7cab"; // Replace with your actual API key
        const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`;
        try {
            const resp = await fetch(APIurl);
            const respJson = await resp.json();
            setWeatherData(respJson);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSearch = () => {
        if (cityName.trim() !== "") {
            fetchWeatherAPI();
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3 className="text-center text-success">React Weather App</h3>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter City Name"
                                onChange={changeCityInput}
                                value={cityName}
                            />
                            <button className="btn btn-primary mt-2" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                        {/* Weather app info */}
                        <WeatherInfo cityName={cityName} weatherData={weatherData} />
                        {/* Weather app info */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherApp;