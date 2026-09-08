
const API_KEY = "aa40c301543ae62320b9fe49163706ec";

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const error = document.getElementById("error");
    const weatherCard = document.getElementById("weatherCard");

    if (city === "") {
        error.textContent = "Please enter a city name";
        weatherCard.style.display = "none";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod !== 200) {
            error.textContent = data.message;
            weatherCard.style.display = "none";
            return;
        }

        document.getElementById("cityName").textContent = data.name;

        document.getElementById("temperature").textContent =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            data.main.humidity + "%";

        document.getElementById("feelsLike").textContent =
            Math.round(data.main.feels_like) + "°C";

        document.getElementById("minTemp").textContent =
            Math.round(data.main.temp_min) + "°C";

        document.getElementById("maxTemp").textContent =
            Math.round(data.main.temp_max) + "°C";

        error.textContent = "";
        weatherCard.style.display = "block";

    } catch (error) {

        console.log(error);

        error.textContent =
            "Something went wrong. Check your API key or internet connection.";

        weatherCard.style.display = "none";
    }
}


document.getElementById("cityInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});

