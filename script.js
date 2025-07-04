function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '3bbf441c317fcba2ae32b8e8a49424d1'; 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey }&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weatherResult');
            if (data.cod === 200) {
                weatherDiv.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                weatherDiv.innerHTML = '<p>City not found. Please try again.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}