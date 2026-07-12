const apiKey = "3d6f85d3506b6aad1004db7d2b909f88";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (response.status !== 200) {
            alert("City not found. Please enter a valid city.");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temperature").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("condition").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind.speed + " m/s";

        document.getElementById("pressure").innerText =
            data.main.pressure + " hPa";

        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {

        alert("Unable to fetch weather data. Check your internet connection or API key.");
        console.log(error);

    }
}

// Press Enter to search
document.getElementById("city").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        getWeather();
    }

});