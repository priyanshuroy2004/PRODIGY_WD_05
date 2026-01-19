const apiKey = "e6be4ebc916f48e7a1bd8ce7cd5ecf9b";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherInfo").innerHTML =
                    "<p>City not found</p>";
                return;
            }

            document.getElementById("weatherInfo").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.log(error);
        });
}
